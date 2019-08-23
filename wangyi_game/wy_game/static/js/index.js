// 轮播图
let swiper1 = new Swiper(".swiper-container", {
    autoplay: 3000,
    initialSlide: 1,
    speed: 100,
    grabCursor: true,
    pagination: ".swiper-pagination",
    loop: true
})
// 导航栏
$(function() {
    $(".linka").mouseover(function() {
        $(".linka").css("color", "#818181")

        $(this).css("color", "#cf1132")
    })
})

$(function() {
    // 悬浮在轮播图左边
    var str = ""
    var str1 = ""

    for (var i = 0; i < data.length; i++) {
        str += `
        <div title="${data[i].game_title}" class="pic-news-item">
            <div><img src="${data[i].game_url}" width="40" height="40"alt=""></div>
            <div class="pic-news-con">
                <div class="game_main">
                    <p  style="color:#c3c3c3">${data[i].game_title}</p>
                    <p  style="color:#5c6266"class="i-triangle">${data[i].game_con}</p>
                    <span></span>
                </div>
            </div>
        </div>`
        str1 += `
        <div class="pic-news">
            <a title="${data[i].game_title}" class="pic-news-box pic-news-box${data[i].game_id}" href="#" target="_blank">
                <img src="${data[i].game_pic}">
            </a>
        </div>    
        `
    }
    $(".game_float").append(str)
    $(".game_float").append(str1)

        // 鼠标划过
    $(".pic-news-item").mouseover(function() {
            $(".pic-news-item").css({
                "background": "#272a2c",
            })
            $(".pic-news-item").find("span").removeClass("sanjiao")
            $(this).css({
                "border-left": "3px solid #cf1132",
                "background": "#080909",
               
            });
        $(this).siblings(".pic-news-item").css("border-left","3px solid #272a2c")
            $(this).find("span").addClass("sanjiao")
        })
        // 鼠标点击
    $(".pic-news-item").click(function() {
        var index =  $(this).index()
        $(".pic-news:eq(" + index +")").show()
        $(".pic-news:eq(" + index +")").siblings(".pic-news").hide()

        $(".pic-news-item").find(".pic-news-box").hide()
        $(this).find(".pic-news-box").show()
    })

    var strData = ""
    for (var j = 0; j < game_data.length; j++) {
        strData +=
            ` 
        <li><a class="fl" href="${game_data[j].game_href}" title="${game_data[j].game_title}" target="_blank"><strong>◇</strong>${game_data[j].game_title}</a><span class="fr time">${game_data[j].game_time}</span></li>
        `
    }
    $(".newsBoxlist").append(strData)
    //活动
    var strstData = ""
    for (var a = 0; a < Stdata.length; a++) {
        strstData +=
            `
        <li>
            <a href="${Stdata[a].game_linka}" target="_blank">
                <img src="${Stdata[a].game_img}" alt="${Stdata[a].game_alt}" width="300" height="130">
            </a>
            <p class="jindutiao"></p>
        </li>
        `
    }
    $(".activity-list").append(strstData)

    // 进度条
    var lis = document.querySelectorAll(".activity-list>li")
    var ps = document.querySelectorAll(".activity-list>li>p")

    for(let b = 0; b < lis.length; b++){
        lis[b].onmouseover = function(){
            var wid = ps[b].offsetWidth
            var time = setInterval(() => {
                wid+=1
                ps[b].style.width = wid + "px"
                if(wid >= 70){
                    ps[b].style.width ="70px" 
                    clearInterval(time)
                }
                }, );
        }
        lis[b].onmouseleave = function() {
            ps[b].style.width = "20px"
        }
    } 
})

// 热门游戏
$(function() {
    strHotData = ""
    for(var c = 0; c < hotData.length; c++){
        strHotData += `
        <div class="hot-box">
            <a class="hot-link" href="${hotData[c].game_link}" target="_blank">
                <img alt="${hotData[c].game_alt}" class="hot-bg-img" src="${hotData[c].game_img}">
                <div class="hot-font"><img src=" ${hotData[c].game_bg}"></div>
            </a>
            <p class="hot-title">${hotData[c].game_alt}</p>
            <div class="hot-txt-box"><p class="hot-txt">${hotData[c].game_txt}</p></div>
            <a href="${hotData[c].game_link}" class="gw-link fr" target="_blank">进入官网 →</a>
        </div>  `
    }
    $(".cur-hot-box-fl-con").append(strHotData)
    var flag = true;
    $(".hot2").click(function(){
        if(flag){
            $(".hot-box:lt(6)").show()
            $(".hot-box:gt(5)").hide()
        }
        else{
            $(".hot-box:lt(6)").hide()
            $(".hot-box:gt(5)").show()
        }
        flag = !flag
    })
    $(".hot-box").mouseover(function() {
        $(this).siblings().find(".hot-font").stop().slideUp()
        $(this).children(".hot-link").children(".hot-font").stop().slideDown()
    }).mouseout(function (){
        $(this).find(".hot-font").stop().slideUp()
    })

    // 新游戏测试
    var strngData = ""
    for(var d = 0; d < ngData.length; d++){
        strngData += 
        `
        <li>
        <a href="${ngData[d].game_href}">
            <p class="img"><img src="${ngData[d].game_img}" width="68" height="68" alt="${ngData[d].game_title}"></p>
            <p class="nx_dat">
                <span  class="game-tit">${ngData[d].game_title}</span>
                <span class="game-desc">${ngData[d].game_con}</span>
                <span class="game-time"><strong>&#xe787;</strong>${ngData[d].game_time}</span>
                <strong class="game-arrow">&#xe62b;</strong>
            </p>
        </a>
    </li>
        `
    }
    $(".g-game-list").append(strngData)
    // 顶部弹出窗口
    $(".close").click(function() {
        $(".game-main").slideUp()
    })
   
    var isCheck = true;
    $(".wrapper_menu ").click(function() {
        if(isCheck){
            $(".game-main").slideDown()
            $(".icon").hide()
            $(".icon1").hide()
            $(".icon2").show()
            $(".wrapper_menu ").css("background","#272a2c")
        }
        else{
            $(".game-main").slideUp()
            $(".icon").show()
            $(".icon1").show()
            $(".icon2").hide()
            $(".wrapper_menu ").css("background","#cf1132")
        }
        isCheck = !isCheck

    })
   
})
