// 轮播图
let swiper = new Swiper(".swiper-container", {
    autoplay: 3000,
    initialSlide: 1,
    speed: 100,
    grabCursor: true,
    pagination: ".swiper-pagination",
    loop: true
});

$(function () {
    // 导航小图标翻转
    $('.nav_game>li').mouseover(function () {
        $(this).find(".s1").rotate({ animateTo: 360, duration: 500 });
        $(this).find("a").css("color", "white")
    });
    $('.nav_game>li').mouseout(function () {
        $(this).find(".s1").rotate({ animateTo: 0, duration: 500 });
        $(this).find("a").css("color", "#b9b9b9")
    });

    // 登录注册
    $(".linka").mouseover(function () {
        if ($(this).index() == 0) {
            $(".log").show()
        } else {
            $(".register").show()
        }
    }).mouseout(function () {
        if ($(this).index() == 0) {
            $(".log").hide()
        } else {
            $(".register").hide()
        }
    });
    $(".focus>p>a").mouseover(function () {
        $(this).css("top", "30")
    });

    //爱玩精选
    var jxstr = ""
    for (var i = 0; i < jxData.length; i++) {
        jxstr += `
        <div class="jingxuan-item">
        <a href="${jxData[i].game_linka}" target="_blank" alt="${jxData[i].game_tit}">
            <img class="img" src="${jxData[i].game_img}"
                alt="${jxData[i].game_tit}">
            <div class="s">
                <div class="text">
                    <div class="t">${jxData[i].game_tit}</div>
                </div>
            </div>
            <div class="mark_box">
                <div class="mask">
                    <div class="center">
                        <div class="author">${jxData[i].game_author}</div>
                        <div class="line"></div>
                        <div class="com">
                            <span class="mess">&#xe619;</span><span class="com">${jxData[i].game_num}</span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
        `
    }

    $(".sect_good_txt").append(jxstr)

    $(".jingxuan-item").mouseover(function () {
        $(this).find("img").css("transform", "scale(1.3)")
        $(this).find(".mark_box").show()
    });
    $(".jingxuan-item").mouseout(function () {
        $(this).find("img").css("transform", "scale(1)")
        $(this).find(".mark_box").hide()
    })
})

// 游戏新鲜事
var steps11 = steps({
    el: "#steps11",
    data: [
        { title: "14:18", description: "《魔兽世界》经典怀旧服8月13日开放角色预创建" },
        { title: "14:16", description: "只要兄弟在 哪都是江湖 大话西游《老玩家第二季》第二集来了" },
        { title: "14:16", description: "目不暇接 《新倩女幽魂》嘉年华游园手册大盘点" },
        { title: "11:01", description: "网易CC直播X荒野行动“ 飓风杯”总决赛落幕 谜一队勇夺桂冠" },
        { title: "昨 天", description: "18岁少年热血：CN炉石最年轻冠军 比利君与炉石的不解之缘" },
        { title: "昨 天", description: "龙吟东方再焕新 2019大话西游手游年度发布会亮点一览" },

    ],
    direction: "vertical",
    dataOrder: ["title", "line", "description"],
    dataWidth: ["0 0 100px", "none", "auto"],
    iconType: "bullets"
});

// 手风琴
$(function () {
    var sfqstr = ""
    for (let i = 0; i < sfqData.length; i++) {
        sfqstr += `
        <li>
        <a href="${sfqData[i].game_href}" target="_blank" class="link">
            <div class="m-cover1 fl">
                <div class="img"> 
                    <img src="${sfqData[i].game_img}">
                </div>
                <div class="s">
                    <div class="text">
                        <div class="t">${sfqData[i].game_tit}</div>
                        <div class="t1">${sfqData[i].game_txt}</div>
                    </div>
                </div>
                <div class="score J_score score3" data-score="6.0"><span>${sfqData[i].game_score}</span></div>
            </div>
            <div class="comment fr">
                <div class="tit">${sfqData[i].game_com}</div>
                <div class="c">
                    <div class="advantage"><span>&#xe6cf;</span>${sfqData[i].game_advan}</div>
                    <div class="line"></div>
                    <div class="disadvantage">
                        <span>&#xe61e;</span>${sfqData[i].game_disadvant}
                    </div>
                </div>
            </div>
        </a>
    </li> 
    `
    }
    $(".con>ul").append(sfqstr)
})

$(function () {
    $(".m-cover1>.img").mouseover(function () {
        $(this).children().css("transform", "scale(1.3)")
    });
    $(".m-cover1>.img").mouseout(function () {
        $(this).children().css("transform", "scale(1)")
    });

})

$(function () {
    $('.con li').hover(function () {
        $(this).stop().animate({ 'width': '472px' }, 500).siblings().stop().animate({ 'width': '197px' }, 500);
        $(this).css("z-index", "10")
    })
})


// 前瞻游戏
$(function () {
    var yxqzstr = ""
    for (let i = 0; i < yxqzData.length; i++) {
        yxqzstr += `
                <div class="appr-item">
                    <div class="ceng"></div>                
                    <a href="${yxqzData[i].game_href}" target="_blank" >
                        <div class="m-cover fl">
                            <div  class="img" ><img src="${yxqzData[i].game_img}"></div>
                            <div class="s">
                                <div class="text">
                                    <div class="t">${yxqzData[i].game_tit}</div>
                                    <div class="t1">${yxqzData[i].game_txt}</div>
                                </div>
                            </div>
                        </div>
                        <div class="c fr">
                            <div class="h">
                                <img src="${yxqzData[i].game_pic}" class="pic">  ${yxqzData[i].game_author}
                            </div>
                            <div class="digest">
                            ${yxqzData[i].game_com}
                            </div>
                        </div>
                    </a>
                </div>
             `
    }
    $(".appr-wrap").append(yxqzstr)

    $(".ceng").mouseover(function () {
        $(this).parent().find(".img>img").css("transform", "scale(1.3)")
    })

    $(".ceng").mouseout(function () {
        $(this).parent().find(".img>img").css("transform", "scale(1)")
    })
})


$(function () {
    var yxtjstr = ""
    for (let i = 0; i < yxtjData.length; i++) {
        yxtjstr += `
        <li class="m-cover2 fl">
        <a href="${yxtjData[i].game_href}" target="_blank" >
            <img class="img" src="${yxtjData[i].game_img}">
            <div class="s">
                <div class="text">
                    <div class="t">${yxtjData[i].game_tit}</div>
                    <div class="t1">${yxtjData[i].game_txt}</div>
                </div>
            </div>
        </a>
    </li>
        `
    }
    $(".collection ").append(yxtjstr)
})

$(function () {
    var panstr = ""
    for (let i = 0; i < panData.length; i++) {
        panstr += `
                <li class="m-cover3">
                    <a href="${panData[i].game_href}" target="_blank">
                        <img class="img"  src="${panData[i].game_img}">
                        <div class="s">
                            <div class="text">
                                <div class="label">${panData[i].game_tit}</div>
                                <div class="t">${panData[i].game_txt}</div>
                            </div>
                        </div>
                    </a>
                    <div class="ceng1"></div>
                </li>
            `
    }
    $(".col").append(panstr)

   
    $(".ceng1").mouseover(function () {
        $(this).parent().find("img").css("transform", "scale(1.3)")
    })

    $(".ceng1").mouseout(function () {
        $(this).parent().find("img").css("transform", "scale(1)")
    })
})


// 即将售发        
$(function () {
    jjsfstr = ""
    for (let i = 0; i < jjsfData.length; i++) {
        jjsfstr += `
        <li class="">
            <a href="${jjsfData[i].game_href}" target="_blank">
                <div class="cover fl">
                    <img src="${jjsfData[i].game_img}">
                </div>
                <div class="c fl">
                    <div class="name">${jjsfData[i].game_tit}</div>
                    <div class="type ellipsis">
                        ${jjsfData[i].game_type}
                    </div>
                    <div class="platform ellipsis">
                        ${jjsfData[i].game_txt}
                    </div>
                    <div class="J_tm"> ${jjsfData[i].game_time}</div>
                </div>
            </a>
        </li>
        `
    }
    $(".g-jjsf").append(jjsfstr)
    $(".g-jjsf").children("li").eq(0).css('height','95px')
    $(".g-jjsf").children("li").eq(0).find(".type").css('display','block')

})
$(function () {
    $('.g-jjsf li').mouseover(function () {
        $(this).stop().animate({ 'height': '95px' }, 500).siblings().stop().animate({ 'height': '57px' }, 500);
        $(this).find(".type").css('display','block')
        $(this).siblings().find(".type").css('display','none')
    });
    // $('.g-jjsf li').mouseout(function () {
    //     $(this).find(".type").css('display','none')

    // })
})

// 新媒体矩阵
$(function () {
    $(".in-meiti li").mouseover(function (e) {
        $(this).find("p").css("color", "#ffdc00")
        if ($(".a>span").hasClass('ds')) {
            setTimeout(function () {
                $(this).find(".j1").css("display", "block")
            }.bind(this))
        }

        if ($(".a>span").hasClass('weibo', "steam")) {
            setTimeout(function () {
                $(this).find(".j2").css("display", "block")
            }.bind(this), 100)
        }

        if ($(".a>span").hasClass('zhi')) {
            setTimeout(function () {
                $(this).find(".j3").css("display", "block")
            }.bind(this), 200)
        }

        if ($(".a>span").hasClass('weixin')) {
            setTimeout(function () {
                $(this).find(".j4").css("display", "block")
            }.bind(this), 300)
        }
    })
    $(".in-meiti li").mouseout(function () {
        $(this).find("p").css("color", "#666666")
        $(this).children(".a").css("display", "none")
    })
})




