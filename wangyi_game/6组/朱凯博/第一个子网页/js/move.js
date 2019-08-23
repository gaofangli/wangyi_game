function move(ele, dir, end) {
        clearInterval(ele.timer);
        if (dir === "left") {
            // 向左走
            ele.timer = setInterval(function () {
                ele.style.left = ele.offsetLeft - 5 + "px";
                if (ele.offsetLeft <= end) {
                    clearInterval(ele.timer);
                    ele.style.left = end + "px";
                }
            })
        } else if (dir === "right") {
            // 向右走
            ele.timer = setInterval(function () {
                ele.style.left = ele.offsetLeft + 5 + "px";
                if (ele.offsetLeft >= end) {
                    clearInterval(ele.timer);
                    ele.style.left = end + "px";
                }
            })
        }
    }