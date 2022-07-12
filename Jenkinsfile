pipeline {
    agent any
    stages {
        stage('Update SDK') {
            steps {
                sh label: 'Fetch LiteLoader SDK', script: 'git submodule foreach "git checkout main && git pull"'
            }
        }
        stage('Update Lib') {
            when {
                changeset "**/LINK.txt"
            }
            steps {
                sh label: 'Download Bedrock Server', script: '''
                    curl -L -o server.zip $(cat ./Scripts/LINK.txt)
                    unzip -o -q server.zip -d Server
                    '''
                sh label: 'Generate Lib', script: '''
                    mkdir -p lib
                    cd LiteLoaderSDK/Tools && ./LibraryBuilder.exe -o ../../lib/ ../../Server/
                    '''
            }
        }
        stage('Build') {
            steps {
                sh label: 'Compile BDSLM', script: ' /c/Program\\ Files\\ \\(x86\\)/Microsoft\\ Visual\\ Studio/2022/BuildTools/MSBuild/Current/Bin/msbuild.exe -m -p:Configuration=Release;Platform=x64'
                sh label: 'Pack BDSLM', script: '''
                    rm -rf artifact
                    mkdir artifact
                    ls ./x64/Release/
                    cp ./x64/Release/BDSLM.dll ./artifact/
                    mkdir -p ./artifact/BDSLM
                    cp -r ./third-party/nginx ./artifact/BDSLM/
                    cp -r ./third-party/unmined ./artifact/BDSLM/
                    mkdir -p ./artifact/BDSLM/nginx/logs
                    mkdir -p ./artifact/BDSLM/nginx/temp
                    cp ./conf/config.yaml ./artifact/BDSLM/
                    '''
                sh label: 'Zip BDSLM', script: '''
                    rm -f artifact.zip
                    7z a BDSLM.zip ./artifact/**
                    '''
            }
        }
        stage('Test') {
            steps {
                echo '1'
            }
        }
        stage('Deploy') {
            steps {
                archiveArtifactsToQiniu allowEmptyArchive: false, caseSensitive: false, excludeFilesGlob: '', includeFilesGlob: '**BDSLM.zip', onlyIfSuccessful: true, useDefaultExcludes: false
            }
        }
    }
}
