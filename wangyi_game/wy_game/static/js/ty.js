$(function () {
    $(".game_path").mouseover(function () { 
        // alert(1)
        $(".game-main").stop().slideDown()
    }).mouseout(function () { 
        $(".game-main").stop().slideUp()
    })
})

