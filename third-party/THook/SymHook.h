#pragma  once
namespace SymHook{

    // [原型] public: __cdecl SPSCQueue<class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >,512>::SPSCQueue<class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >,512>(unsigned __int64) __ptr64
    // [符号] ??0?$SPSCQueue@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@$0CAA@@@QEAA@_K@Z
    constexpr RVA MSSYM_MD5_3b8fb7204bf8294ee636ba7272eec000 = 0x000AC140;

    // [原型] private: bool __cdecl SPSCQueue<class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >,512>::inner_enqueue<0,class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64>(class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64) __ptr64
    // [符号] ??$inner_enqueue@$0A@AEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@?$SPSCQueue@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@$0CAA@@@AEAA_NAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@Z
    constexpr RVA MSSYM_MD5_b5c9e566146b3136e6fb37f0c080d91e = 0x000AC4A0;
    
    // [原型] public: virtual class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64 __cdecl Actor::getNameTag(void)const __ptr64
    // [符号] ?getNameTag@Actor@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    constexpr RVA MSSYM_B1QE10getNameTagB1AA5ActorB2AAA8UEBAAEBVB2QDA5basicB1UA6stringB1AA2DUB2QDA4charB1UA6traitsB1AA1DB1AA3stdB2AAA1VB2QDA9allocatorB1AA1DB1AA12B2AAA3stdB2AAA2XZ = 0x00562BC0;

    // [原型] public: virtual class Vec3 const & __ptr64 __cdecl Actor::getPos(void)const __ptr64
    // [符号] ?getPos@Actor@@UEBAAEBVVec3@@XZ
    constexpr RVA MSSYM_B1QA6getPosB1AA5ActorB2AAE12UEBAAEBVVec3B2AAA2XZ = 0x00554A80;

    // [原型] public: virtual void __cdecl ServerLevel::tick(void) __ptr64
    // [符号] ?tick@ServerLevel@@UEAAXXZ
    constexpr RVA MSSYM_B1QA4tickB1AE11ServerLevelB2AAA7UEAAXXZ = 0x004EA570;

    // [原型] public: void __cdecl ServerInstance::leaveGameSync(void) __ptr64
    // [符号] ?leaveGameSync@ServerInstance@@QEAAXXZ
    constexpr RVA MSSYM_B1QE13leaveGameSyncB1AE14ServerInstanceB2AAA7QEAAXXZ = 0x004E6750;

    // [原型] public: void __cdecl ServerCommunicationInterface::sendServerStarted(void) __ptr64
    // [符号] ?sendServerStarted@ServerCommunicationInterface@@QEAAXXZ
    constexpr RVA MSSYM_B1QE17sendServerStartedB1AE28ServerCommunicationInterfaceB2AAA7QEAAXXZ = 0x004E3390;

}