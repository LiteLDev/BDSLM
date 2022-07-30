#pragma once
#include "pch.h"
using std::string;
using std::wstring;

class Shell
{
public:
	Shell(void);
	~Shell(void);

	bool RunProcess(const wstring& process);
	bool StopProcess(void);
	bool GetOutput(int timeout, string& outstr);//获取输出字符串
	bool SetInput(const string& cmd);//执行命令
private:
	HANDLE m_hChildInputWrite;	//用于重定向子进程输入的句柄
	HANDLE m_hChildInputRead;
	HANDLE m_hChildOutputWrite;	//用于重定向子进程输出的句柄  
	HANDLE m_hChildOutputRead;
	PROCESS_INFORMATION m_cmdPI;//cmd进程信息
};
Shell::Shell(void)
{
	m_hChildInputWrite = NULL;
	m_hChildInputRead = NULL;
	m_hChildOutputWrite = NULL;
	m_hChildOutputRead = NULL;
	ZeroMemory(&m_cmdPI, sizeof(m_cmdPI));
}

Shell::~Shell(void)
{
	StopProcess();
}
bool Shell::RunProcess(const wstring& process)
{
	SECURITY_ATTRIBUTES   sa{};
	sa.bInheritHandle = TRUE;
	sa.lpSecurityDescriptor = NULL;
	sa.nLength = sizeof(sa);

	//创建子进程输出匿名管道 
	if (FALSE == ::CreatePipe(&m_hChildOutputRead, &m_hChildOutputWrite, &sa, 0))
	{
		return false;
	}

	//创建子进程输入匿名管道   
	if (FALSE == CreatePipe(&m_hChildInputRead, &m_hChildInputWrite, &sa, 0))
	{
		::CloseHandle(m_hChildOutputWrite);
		::CloseHandle(m_hChildOutputRead);
		return false;
	}

	ZeroMemory(&m_cmdPI, sizeof(m_cmdPI));
	STARTUPINFO  si;
	GetStartupInfo(&si);

	si.cb = sizeof(STARTUPINFO);
	si.dwFlags = STARTF_USESTDHANDLES | STARTF_USESHOWWINDOW;
	si.wShowWindow = SW_HIDE;
	si.hStdInput = m_hChildInputRead;     //重定向子进程输入   
	si.hStdOutput = m_hChildOutputWrite;   //重定向子进程输入    
	si.hStdError = m_hChildOutputWrite;

	if (FALSE == ::CreateProcess(NULL, (wchar_t*)process.c_str(), NULL, NULL, TRUE, NORMAL_PRIORITY_CLASS, NULL, NULL, &si, &m_cmdPI))
	{
		::CloseHandle(m_hChildInputWrite);
		::CloseHandle(m_hChildInputRead);
		::CloseHandle(m_hChildOutputWrite);
		::CloseHandle(m_hChildOutputRead);
		m_hChildInputWrite = NULL;
		m_hChildInputRead = NULL;
		m_hChildOutputWrite = NULL;
		m_hChildOutputRead = NULL;
		ZeroMemory(&m_cmdPI, sizeof(m_cmdPI));
		return false;
	}

	return true;
}
bool Shell::StopProcess(void)
{
	::CloseHandle(m_hChildInputWrite);
	::CloseHandle(m_hChildInputRead);
	::CloseHandle(m_hChildOutputWrite);
	::CloseHandle(m_hChildOutputRead);
	m_hChildInputWrite = NULL;
	m_hChildInputRead = NULL;
	m_hChildOutputWrite = NULL;
	m_hChildOutputRead = NULL;
	::TerminateProcess(m_cmdPI.hProcess, -1);
	::CloseHandle(m_cmdPI.hProcess);
	::CloseHandle(m_cmdPI.hThread);
	ZeroMemory(&m_cmdPI, sizeof(m_cmdPI));
	return true;
}
bool Shell::GetOutput(int timeout, string& outstr)
{
	if (NULL == m_hChildOutputRead)
	{
		return false;
	}

	outstr = "";
	char buffer[4096] = { 0 };
	DWORD readBytes = 0;
	while (timeout > 0)
	{
		//对管道数据进行读，但不会删除管道里的数据，如果没有数据，就立即返回
		if (FALSE == PeekNamedPipe(m_hChildOutputRead, buffer, sizeof(buffer) - 1, &readBytes, 0, NULL))
		{
			return false;
		}

		//检测是否读到数据，如果没有数据，继续等待
		if (0 == readBytes)
		{
			timeout -= 1;
			continue;
		}

		readBytes = 0;
		if (::ReadFile(m_hChildOutputRead, buffer, sizeof(buffer) - 1, &readBytes, NULL))
		{
			outstr.insert(outstr.end(), buffer, buffer + readBytes);
			timeout -= 1;
		}
		else
		{
			return false;
		}
	}

	return false;
}

bool Shell::SetInput(const string& cmd)
{
	if (NULL == m_hChildInputWrite)
	{
		return "";
	}

	string tmp = cmd + "\r\n";
	DWORD writeBytes = 0;
	if (FALSE == ::WriteFile(m_hChildInputWrite, tmp.c_str(), (DWORD)tmp.size(), &writeBytes, NULL))
	{
		return false;
	}
	return true;
}