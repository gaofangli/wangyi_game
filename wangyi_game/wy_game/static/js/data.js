// 游戏广告数据
var data = [{
    game_id: "1",
    game_title: "国韵之美 归于盛唐",
    game_url: "https://webinput.nie.netease.com/img/sd/icon.png/144",
    game_con: "神都夜行录七夕活动开启",
    game_pic: " https://nie.res.netease.com/r/pic/20190802/ba3c507b-4e21-4d52-82a5-6e37a17d2d7d.jpg"
},
{
    game_id: "2",
    game_title: "《天下》手游三周年庆典",
    game_url: "https://nie.res.netease.com/r/pic/20190802/93706dc6-4189-4e3c-822e-232fae314d59.png",
    game_con: "一袭华裳，共赴天下",
    game_pic: "https://nie.res.netease.com/r/pic/20190802/85e9db56-aacd-471c-bc46-130a6321599a.jpg"


},
{
    game_id: "3",
    game_title: "秋风起，战意燃",
    game_url: "https://nie.res.netease.com/r/pic/20190802/2dd0d789-8f15-46b5-b6c0-6027c5bc9718.png",
    game_con: "8月23日，国服突燃公测",
    game_pic: "https://nie.res.netease.com/r/pic/20190802/07960805-1486-4c96-81dc-4ec7f1a576dc.jpg"
},
{
    game_id: "4",
    game_title: "缘起千年，梦归神",
    game_url: "https://webinput.nie.netease.com/img/sd/icon.png/144",
    game_con: "神都夜行录x白蛇:缘起联动",
    game_pic: "https://nie.res.netease.com/r/pic/20190801/9fff815f-a0a2-45f7-a050-17eba864febf.jpg"
},
{
    game_id: "5",
    game_title: "真三国无双8联动",
    game_url: "https://nie.res.netease.com/r/pic/20190731/a3b3b899-66c9-4e41-8b05-40dd5ba0f06a.png",
    game_con: "流星群侠传周年资料片",
    game_pic: "https://nie.res.netease.com/r/pic/20190724/e60b5db2-2e42-4dc9-bd59-7a481d7bb167.jpg"

}
];
var game_data = [{
    game_href: "http://game.163.com/news/2019/08/02/18455_826240.html",
    game_title: "古战场之美，战意公测定档8月23日",
    game_time: "08-02"
},
{
    game_href: "http://game.163.com/news/2019/07/29/18455_825400.html",
    game_title: "夏日奇妙之旅！《影之诗》x《永远的7日之都》联动开启",
    game_time: "07-30"
},
{
    game_href: "http://game.163.com/news/2019/07/29/18455_825239.html",
    game_title: "网易游戏超级会员觉醒升级 20余款游戏权益大更新",
    game_time: "07-29"
},
{
    game_href: "http://game.163.com/news/2019/07/26/18455_825028.html",
    game_title: "一战成名天下知 《大唐无双》“群雄逐鹿”九周年特别版资料片今日上线",
    game_time: "07-26"
},
{
    game_href: "http://game.163.com/news/2019/07/18/18455_823228.html",
    game_title: "每日登陆送免费十连！《实况足球》周年庆盛典活动隆重上线！",
    game_time: "07-17"
},
{
    game_href: "http://game.163.com/news/2019/07/18/18455_823228.html",
    game_title: "辐射之下，何去何从？《明日之后》全新辐射高校今日上线！",
    game_time: "07-18"
},
{
    game_href: "http://game.163.com/news/2019/07/17/18455_823053.html",
    game_title: "逆风逐星，生为此行 《光·遇》新章节暴风眼今日开启",
    game_time: "07-17"
}
];

var Stdata = [{
    game_linka: "https://ds.163.com/",
    game_img: "https://nie.res.netease.com/r/pic/20190605/9d0c15a3-3858-428d-a5a4-d11a332535aa.png",
    game_alt: "网易大神邀你一起游戏"
},
{
    game_linka: "http://game.163.com/520/",
    game_img: "https://nie.res.netease.com/r/pic/20190513/6d10cc49-71a6-481f-b406-e99a93d2a422.png",
    game_alt: "为热爱赋新"
},
{
    game_linka: "http://game.163.com/star/",
    game_img: "https://nie.res.netease.com/r/pic/20181012/ed63c8b1-00ed-463c-b9e9-ee119eb005ea.jpg",
    game_alt: "玩红计划"
},
{
    game_linka: "http://qiyu.163.com/",
    game_img: "https://nie.res.netease.com/r/pic/20190520/988fd630-ecb8-477d-bfd4-f42ba8368117.png",
    game_alt: "会员俱乐部"
}
];
// 热门游戏数据
var hotData = [
    {
        game_link: "https://shark-tracer.netease.com/v1/log/default?project_id=100936853&amp;sign=mj9QSwRsBhCwtImlbnaNmHiYndk8BATw&amp;log_type=mmad_click",
        game_alt: "《神都夜行录》",
        game_bg: "https://nie.res.netease.com/r/pic/20190802/c0abdb80-8dc6-4cf8-a141-af2500bc8661.png",
        game_img: "https://nie.res.netease.com/r/pic/20190731/c395b9dd-bf71-4b2c-83c8-f95bac52a5cf.jpg",
        game_txt: "七夕全新妖灵SSR摩云限时概率UP！七巧玲珑飞星移，故友同游待佳期。网易《神都夜行录》浪漫开启“缘结七夕渡星桥”限时活动。唯美七夕时装、活动限时礼包、签到好礼等诸多福利等待揭秘！",
    },
    {
        game_link: "https://z.163.com/2019/yuyue/#/",
        game_alt: "《战意》",
        game_bg: "https://nie.res.netease.com/r/pic/20190802/c0abdb80-8dc6-4cf8-a141-af2500bc8661.png",
        game_img: "https://nie.res.netease.com/r/pic/20190801/993c4126-b2e8-4b2b-ac39-4d81e73e832d.jpg",
        game_txt: "8月23日，硬核古代战争网游《战意》国服突燃公测，体验古代战场之美。官网预约领取锦衣卫主题时装和限定永久黑马坐骑！",
    },

    {
        game_link: "https://shark-tracer.netease.com/v1/log/default?project_id=100936679&amp;sign=Shv3mA3VKoDWvnGAA4eQ0sxtxG511nI8&amp;log_type=mmad_click",
        game_alt: "《天下》手游",
        game_bg: "https://nie.res.netease.com/r/pic/20190802/ff386201-bed3-4804-9e11-3eddc1ea3cab.png",
        game_img: "https://nie.res.netease.com/r/pic/20190802/3d4801f0-c733-47e1-a0f8-1c044d0f7337.jpg",
        game_txt: "一袭华裳，共赴天下！《天下》手游汉服季特别版本“国韵风华”今日开启，用绝美华裳与你共赴风雅大荒！",
    },
    {
        game_link: "http://hyj.163.com/",
        game_alt: "《花与剑》",
        game_bg: "https://nie.res.netease.com/r/pic/20190731/4a293ef0-0db7-4507-ad4d-bb0c5dbdb13d.png",
        game_img: "https://nie.res.netease.com/r/pic/20190802/7b38d82b-9eb2-4062-9bb1-ba7296237087.jpg",
        game_txt: "花剑江湖，绮丽如梦，剑影亦有，风月亦有。一花一世界，一剑一江湖，君可愿同去一探这红颜江湖？《花与剑》安卓情缘秘测现已开启！",
    },
    {
        game_link: "https://shark-tracer.netease.com/v1/log/default?project_id=100936853&amp;sign=mj9QSwRsBhCwtImlbnaNmHiYndk8BATw&amp;log_type=mmad_click",
        game_alt: "《神都夜行录》",
        game_bg: "https://nie.res.netease.com/r/pic/20190801/5bdfa238-e612-423a-9f79-9395737849cb.png",
        game_img: "https://nie.res.netease.com/r/pic/20190801/993c4126-b2e8-4b2b-ac39-4d81e73e832d.jpg",
        game_txt: "解锁全新主线剧情，参与春季活动，免费兑换时装“烟雨平生”!",
    },
    {
        game_link: "https://shark-tracer.netease.com/v1/log/default?project_id=100936882&amp;sign=DxwNgXYU1UQKO6tdvCmJnVSRqfdi75HL&amp;log_type=mmad_click",
        game_alt: "《流星群侠传》",
        game_bg: "https://nie.res.netease.com/r/pic/20190724/dac06d5f-0781-4d9f-85bf-34c15b2617dc.png",
        game_img: "https://nie.res.netease.com/r/pic/20190724/285517ac-b3f2-44a0-bbe0-a1c4166a5d0c.jpg",
        game_txt: "硬核动作手游《流星群侠传》周年资料片“一剑无双”震撼来袭！真三联动全面开启！",
    },


    {
        game_link: "https://z.163.com/2019/yuyue/#/",
        game_alt: "《战意》1",
        game_bg: "https://nie.res.netease.com/r/pic/20190802/c0abdb80-8dc6-4cf8-a141-af2500bc8661.png",
        game_img: "https://nie.res.netease.com/r/pic/20190801/993c4126-b2e8-4b2b-ac39-4d81e73e832d.jpg",
        game_txt: "8月23日，硬核古代战争网游《战意》国服突燃公测，体验古代战场之美。官网预约领取锦衣卫主题时装和限定永久黑马坐骑！",
    },
    {
        game_link: "https://shark-tracer.netease.com/v1/log/default?project_id=100936853&amp;sign=mj9QSwRsBhCwtImlbnaNmHiYndk8BATw&amp;log_type=mmad_click",
        game_alt: "《神都夜行录》1",
        game_bg: "https://nie.res.netease.com/r/pic/20190802/c0abdb80-8dc6-4cf8-a141-af2500bc8661.png",
        game_img: "https://nie.res.netease.com/r/pic/20190731/c395b9dd-bf71-4b2c-83c8-f95bac52a5cf.jpg",
        game_txt: "七夕全新妖灵SSR摩云限时概率UP！七巧玲珑飞星移，故友同游待佳期。网易《神都夜行录》浪漫开启“缘结七夕渡星桥”限时活动。唯美七夕时装、活动限时礼包、签到好礼等诸多福利等待揭秘！",
    },
    {
        game_link: "http://hyj.163.com/",
        game_alt: "《花与剑》1",
        game_bg: "https://nie.res.netease.com/r/pic/20190731/4a293ef0-0db7-4507-ad4d-bb0c5dbdb13d.png",
        game_img: "https://nie.res.netease.com/r/pic/20190802/7b38d82b-9eb2-4062-9bb1-ba7296237087.jpg",
        game_txt: "花剑江湖，绮丽如梦，剑影亦有，风月亦有。一花一世界，一剑一江湖，君可愿同去一探这红颜江湖？《花与剑》安卓情缘秘测现已开启！",
    },
    {
        game_link: "https://shark-tracer.netease.com/v1/log/default?project_id=100936882&amp;sign=DxwNgXYU1UQKO6tdvCmJnVSRqfdi75HL&amp;log_type=mmad_click",
        game_alt: "《流星群侠传》1",
        game_bg: "https://nie.res.netease.com/r/pic/20190724/dac06d5f-0781-4d9f-85bf-34c15b2617dc.png",
        game_img: "https://nie.res.netease.com/r/pic/20190724/285517ac-b3f2-44a0-bbe0-a1c4166a5d0c.jpg",
        game_txt: "硬核动作手游《流星群侠传》周年资料片“一剑无双”震撼来袭！真三联动全面开启！"
    },
    {
        game_link: "https://shark-tracer.netease.com/v1/log/default?project_id=100936679&amp;sign=Shv3mA3VKoDWvnGAA4eQ0sxtxG511nI8&amp;log_type=mmad_click",
        game_alt: "《天下》手游1",
        game_bg: "https://nie.res.netease.com/r/pic/20190802/ff386201-bed3-4804-9e11-3eddc1ea3cab.png",
        game_img: "https://nie.res.netease.com/r/pic/20190802/3d4801f0-c733-47e1-a0f8-1c044d0f7337.jpg",
        game_txt: "一袭华裳，共赴天下！《天下》手游汉服季特别版本“国韵风华”今日开启，用绝美华裳与你共赴风雅大荒！"
    },
    {
        game_link: "https://shark-tracer.netease.com/v1/log/default?project_id=100936853&amp;sign=mj9QSwRsBhCwtImlbnaNmHiYndk8BATw&amp;log_type=mmad_click",
        game_alt: "《神都夜行录》1",
        game_bg: "https://nie.res.netease.com/r/pic/20190801/5bdfa238-e612-423a-9f79-9395737849cb.png",
        game_img: "https://nie.res.netease.com/r/pic/20190801/993c4126-b2e8-4b2b-ac39-4d81e73e832d.jpg",
        game_txt: "解锁全新主线剧情，参与春季活动，免费兑换时装“烟雨平生”!"
    }
];

// 新游戏测试
var ngData = [
    {
        game_href: "https://lz.163.com/",
        game_img: "https://nie.res.netease.com/r/pic/20190801/50feedae-9b42-425f-bfd7-484875627db5.png",
        game_title: "量子特攻",
        game_con: "安卓删档测试",
        game_time: "8月16日"

    },
    {
        game_href: "https://gad.netease.com/mmad/click?s=bTlI2K3XOaHgGsV8CHUVxgum16w%3D&amp;project_id=16943508&amp;monitor_type=4",
        game_img: "https://nie.res.netease.com/r/pic/20190722/c236d965-d02a-4d90-a1e0-bc0d3af95f80.png",
        game_title: "梦幻西游三维版",
        game_con: "双平台删档测试",
        game_time: "8月8日"

    },
    {
        game_href: "http://wxzc.163.com/",
        game_img: "https://nie.res.netease.com/r/pic/20190531/acfe1581-9478-4dd4-abe0-c619ccca9f50.png",
        game_title: "重装上阵",
        game_con: "国内限量删档测试",
        game_time: "7月26日"

    },
    {
        game_href: "http://ql.163.com/",
        game_img: "https://nie.res.netease.com/r/pic/20190422/410da263-5919-4f4c-805c-47f8a5e89464.png",
        game_title: "青璃",
        game_con: "全平台开放下载",
        game_time: "77月12日"

    },
    {
        game_href: "https://shark-tracer.netease.com/v1/log/default?project_id=100736920&amp;sign=3owVr6n6YaDCIa4wiQRQ8rx5LZDIW3ez&amp;log_type=mmad_click",
        game_img: "https://nie.res.netease.com/r/pic/20190604/1444f2e2-438f-413f-afcc-7d65f2ba0152.png",
        game_title: "遇见逆水寒",
        game_con: "全平台甜蜜公测",
        game_time: "6月5日"

    },
    {
        game_href: "https://shark-tracer.netease.com/v1/log/default?project_id=100250886&amp;sign=cfGQqAZsLgz5nfiCWnNJJRrr9KzUiFBP&amp;log_type=mmad_click",
        game_img: "https://nie.res.netease.com/r/pic/20190517/618ca857-2c40-47a8-8c8e-abc94eda4aab.png",
        game_title: "堡垒前线：破坏与创造",
        game_con: "全平台激然公测",
        game_time: "5月24日"

    }
];
// hot_game数据
var jxData = [
    {
        game_linka: "http://play.163.com/19/0809/15/EM577C08003198ME.html",
        game_img: "http://cms-bucket.ws.126.net/2019/08/09/1f9bd236fe634ddcae67d83b94263c2e.png",
        game_tit: "CJ 2019：《灾难救援》主创访谈 想讲述关于平凡英雄的故事",
        game_author: "林克君",
        game_num: "0"
    },
    {
        game_linka: "http://play.163.com/19/0809/11/EM4PUCH4003198GK.html",
        game_img: "http://cms-bucket.ws.126.net/2019/08/09/5ec5b7989fd54041bd5129b2c84433c9.png",
        game_tit: "丑陋的皮囊，平庸的后传——《德军总部：新血液》评测",
        game_author: "Johnfather",
        game_num: "53"
    },
    {
        game_linka: "http://play.163.com/19/0808/19/EM356L9J003198ME.html",
        game_img: "http://cms-bucket.ws.126.net/2019/08/08/7a8e11160a9e4e7eaa1e439be886c38f.png",
        game_tit: "CJ 2019：万代南梦宫对中国市场充满希望 致力于最好的服务",
        game_author: "林克君",
        game_num: "0"
    },
    {
        game_linka: "http://play.163.com/19/0808/15/EM2NHITU00318QLK.html",
        game_img: "http://cms-bucket.ws.126.net/2019/08/08/0f3a8d9b4bb644aeb2b69bdcc3ae0dd8.png",
        game_tit: "雷柏V20P Pro双模版产品评测 顺滑舒适体验好，物美价廉都是宝！",
        game_author: "林克君",
        game_num: "0"
    },
    {
        game_linka: "http://play.163.com/19/0806/10/ELT0RMTP003198GK.html",
        game_img: "http://cms-bucket.ws.126.net/2019/08/06/b2128124d305475bae66eb88e042571c.png",
        game_tit: "一次全方位的稳步提升——《迸发2》评测",
        game_author: "孤岛上眺望",
        game_num: "42"
    },
    {
        game_linka: "http://play.163.com/19/0805/21/ELRJNIMB003198ME.html",
        game_img: "http://cms-bucket.ws.126.net/2019/08/05/530b4303ffc047cdb8f683cf097188b5.png",
        game_tit: "索尼中国之星计划第二期作品试玩体验报告：8款各有千秋的本土佳作",
        game_author: "林克君",
        game_num: "0"
    }
];

// 手风琴
var sfqData = [
    {
        game_href: "http://play.163.com/19/0809/11/EM4PUCH4003198GK.html",
        game_img: "http://cms-bucket.ws.126.net/2019/08/09/428f535036de46cabe64b9d3837057bf.png",
        game_tit: "德军总部：新血液",
        game_txt: "PlayStation 4",
        game_score: "6.0",
        game_com: "/ 优缺点 /",
        game_advan: "大体是保留了系列的核心<br>影音的进步和少量细节改善",
        game_disadvant: "双人合作系统肤浅<br>RPG元素和盔甲值设定起反效果<br>剧情平庸，角色刻画很差<br>有一些恼人的错误设计",
    },
    {
        game_href: "http://play.163.com/19/0731/15/ELE51OLQ003198GK.html#",
        game_img: "http://cms-bucket.ws.126.net/2019/07/31/8f246c05fd514e409cdf971ad6b41532.jpeg",
        game_tit: "火焰纹章：风花雪月",
        game_txt: "Nintendo Switch",
        game_score: "9.0",
        game_com: "/ 优缺点 /",
        game_advan: "背景宏大细致，剧情震撼人心<br>火纹系列突破性的音画表现力<br>拥有多周目的充实游戏内容<br>与玩家比拼算力的精妙策略战<br>学院内的互动系统圆满毕业",
        game_disadvant: "最上级职业缺乏个性化特色<br>出战单位数量受限，影响气势",
    },
    {
        game_href: "http://play.163.com/19/0729/16/EL91S6AN003198GK.html#",
        game_img: "http://cms-bucket.ws.126.net/2019/07/29/10cacb3799a7411bac9bfbc1e87a85e9.jpeg",
        game_tit: "哆啦A梦：大雄的牧场物语",
        game_txt: "Nintendo Switch",
        game_score: "6.5",
        game_com: "/ 优缺点 /",
        game_advan: "背景宏大细致，剧情震撼人心<br>火纹系列突破性的音画表现力<br>拥有多周目的充实游戏内容<br>与玩家比拼算力的精妙策略战<br>学院内的互动系统圆满毕业",
        game_disadvant: "最上级职业缺乏个性化特色<br>出战单位数量受限，影响气势",
    },
    {
        game_href: "http://play.163.com/19/0727/20/EL49FPQT003198GK.html#",
        game_img: "http://cms-bucket.ws.126.net/2019/07/27/de21a758b98f4d2f816feddf2e857ca2.png",
        game_tit: "进击的巨人2：最终之战",
        game_txt: "Windows",
        game_score: "6.5",
        game_com: "/ 优缺点 /",
        game_advan: "补完了动画第三季剧情<br>还原原作的新模式与新武器<br>继承自本体的优秀战斗",
        game_disadvant: "剧情演出偷工减料<br>内容灌水重复<br>新意寥寥，表现一般<br>高昂的单独售价",
    },
    {
        game_href: "http://play.163.com/19/0724/15/EKS44LG7003198GK.html",
        game_img: "http://cms-bucket.ws.126.net/2019/07/24/aa97cbb787a245d3af7ce4bb56105dbe.jpeg",
        game_tit: "漫威终极联盟3：黑暗教团",
        game_txt: "Nintendo Switch",
        game_score: "6.5",
        game_com: "/ 优缺点 /",
        game_advan: "角色具有较高的原作还原度<br>任何人都能轻松上手并爽玩",
        game_disadvant: "没有带来值得称道的原创系统<br>半固定视角在部分关卡卡视野<br>每名角色仅一种超杀技较单一<br>手游质感，主机游戏价格",
    }
];

// 游戏前瞻
var yxqzData = [
    {
        game_href: "http://play.163.com/18/0809/16/DOPG5J8O003198GK.html",
        game_img: "http://cms-bucket.nosdn.127.net/2018/11/20/83e8dff37f644d218b5cf986642ae8f7.jpeg",
        game_tit: "任天堂明星大乱斗",
        game_txt: "Nintendo Switch",
        game_pic: "http://cms-bucket.nosdn.127.net/2018/08/16/f656a78418294dc0af68b3a462efbfde.jpeg",
        game_author: "林克君",
        game_com: "最强阵容，首次支持中文，非传统FTG的王者！"
    },
    {
        game_href: "http://play.163.com/18/0823/14/DPTBF7FF003198ME.html",
        game_img: "http://cms-bucket.nosdn.127.net/2018/10/12/93314c45df7f4ef0b5da13c1911bcf45.jpeg",
        game_tit: "鬼泣5",
        game_txt: "PlayStation 4",
        game_pic: "http://cms-bucket.nosdn.127.net/2018/08/16/f656a78418294dc0af68b3a462efbfde.jpeg",
        game_author: "林克君",
        game_com: "	“Devil May Cry”老店再开张，依旧是那凌空飞跃无限连招的感觉！"
    }
];

// 游戏推荐
var yxtjData = [
    {
        game_href: "https://up.163.com/game/detail?gameId=71219",
        game_img: "http://cms-bucket.nosdn.127.net/2018/10/11/aad7fef948464f12887fea07a843326b.jpeg",
        game_tit: "神都夜行录",
        game_txt: "iOS"
    },
    {
        game_href: "https://up.163.com/game/detail?gameId=71217",
        game_img: "http://cms-bucket.nosdn.127.net/2018/10/11/09704043bb67488f85a1518833539691.jpeg",
        game_tit: "使命召唤15：黑色行动4",
        game_txt: "windows"
    },
    {
        game_href: "https://up.163.com/game/detail?gameId=71061",
        game_img: "http://cms-bucket.nosdn.127.net/2018/10/11/b90c1b14907642be965abaa9eb57ec9c.jpeg",
        game_tit: "荒野大镖客：救赎2",
        game_txt: "PS4"
    },
    {
        game_href: "https://up.163.com/game/detail?gameId=71391",
        game_img: "http://cms-bucket.nosdn.127.net/2018/10/25/828fa7d8f8134e11aa236fbd2b360524.png",
        game_tit: "杀手2",
        game_txt: "Xboxone"
    }
];

// 盘点游戏
var panData = [
    {
        game_href:"http://play.163.com/18/1025/17/DUVS75SD00318QE9.html",
        game_img:"http://cms-bucket.nosdn.127.net/2018/10/25/11e5f9b0db764a6f9fe084a3f408ae08.png",
        game_tit:"游戏盘点",
        game_txt:"IGN评选PS4上最佳的25款游戏 MHW仅排倒数第二"
    },
    {
        game_href:"http://play.163.com/18/0918/16/DS0HG3KB00318QLH.html",
        game_img:"http://cms-bucket.nosdn.127.net/2018/10/25/7a32639938814c14a37e4031125fef23.png",
        game_tit:"新游盘点",
        game_txt:"玩家的饕餮盛宴！2018年全平台必玩游戏推荐！（下）"
    }
];

// 即将售发
var jjsfData = [
	{
		game_href: "https://up.163.com/game/detail?gameId=71559",
        game_img: "https://g.fp.ps.netease.com/iplay/file/5b33015e96dee42c136c9796BAW8aExY",
		game_tit: "时代终结：赶尽杀绝",
		game_type:"角色扮演",
		game_txt:"Windows",
		game_time:"09/17"
	},
	{
		game_href: "https://up.163.com/game/detail?gameId=71556",
        game_img: "https://g.fp.ps.netease.com/iplay/file/5b32fd06143cfa4b894375bc1jXEXD4y",
		game_tit: "INZIPID",
		game_type:"动作",
		game_txt:"Windows",
		game_time:"11/01"
	},
	{
		game_href: "https://up.163.com/game/detail?gameId=71554",
        game_img: "https://g.fp.ps.netease.com/iplay/file/5b322bd55e6027fb79845c5c13JqWI3b",
		game_tit: "村庄",
		game_type:"动作/ 模拟",
		game_txt:"Windows",
		game_time:"11/07"
	},
	{
		game_href: "https://up.163.com/game/detail?gameId=71685",
        game_img: "https://g.fp.ps.netease.com/iplay/file/5b360177a7f25222f39a6995BWuXSVat",
		game_tit: "眼中的世界",
		game_type:"角色扮演/ 策略",
		game_txt:"Windows",
		game_time:"2019"
	},
	{
		game_href: "https://up.163.com/game/detail?gameId=71955 ",
        game_img: "https://g.fp.ps.netease.com/iplay/file/5b441b758b7427b60480d885FWusF87k",
		game_tit: "封印：仲裁者马克",
		game_type:"角色扮演/ 策略",						
		game_txt:"Windows/ Linux/ Macintosh",
		game_time:"2019"
	},
	{
		game_href: "https://up.163.com/game/detail?gameId=71956",
        game_img: "https://g.fp.ps.netease.com/iplay/file/5b441fc25e60273fb5e571cfw8sAQDiB",
		game_tit: "心律失常",
		game_type:"动作/ 冒险",						
		game_txt:"Windows/ Linux/ Macintosh",
		game_time:"2019"
	},
	{
		game_href: "https://up.163.com/game/detail?gameId=72755",
        game_img: "https://g.fp.ps.netease.com/iplay/file/5b6aa3828b74271d025a59d5pABZHmw4",
		game_tit: "地球黑夜",
		game_type:"动作",						
		game_txt:"Windows/ PlayStation 4/ PS Vita",
		game_time:"2019"
	},
	{
		game_href: "https://up.163.com/game/detail?gameId=73024",
        game_img: "https://g.fp.ps.netease.com/iplay/file/5b8276e56f0494f1cb9335ecmZop1Uhu",
		game_tit: "亡国的骑士与星之巫女",
		game_type:"策略/ 角色扮演/ 模拟",						
		game_txt:"Windows/ PlayStation 4/ PS Vita",
		game_time:"2019"
	},
	{
		game_href: "https://up.163.com/game/detail?gameId=73028",
        game_img: "https://g.fp.ps.netease.com/iplay/file/5b827bee6f049402a62861355UOPukSq",
		game_tit: "穹顶",
		game_type:"动作/ 冒险 ",
		game_txt:" Windows/ PlayStation 4/ Xbox One ",
		game_time:"2019"
	}
]
