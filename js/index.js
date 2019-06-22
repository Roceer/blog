window.addEventListener("load",function() {
    //头部blog样式
    let home = document.getElementById("home");
    // let home1 = document.getElementsByClassName("logo")[0];
    // let logo = home1.getElementsByTagName("a")[0];
    // console.log(Home);
    //谁           是什么        干什么
    //事件源       事件类型       函数

    home.onmouseenter = function () {
        home.style.color = "#00c1de";
    }
    home.onmouseleave = function () {
        home.style.color = "#ffffff";
    }

    //垃圾类方法
    // logo.onmouseenter = function(){
    //     logo.style.color = "#00c1de";
    // }
    // logo.onmouseleave = function(){
    //     logo.style.color = "#ffffff";
    // }
/*

    //轮播图button列表
    let btnCircle = document.getElementsByClassName("btnCircle");
    let btnList = btnCircle[0].getElementsByTagName("li");
    //鼠标放置变色
    // for (let i = 0; i < btnList.length; i++) {
    //     btnList[i].onmouseenter = function(){
    //         btnList[i].style.background = "#00c1de";
    //         // this.style.background = "#00c1de";
    //     }
    //     btnList[i].onmouseleave = function(){
    //         btnList[i].style.background = "#ffffff";
    //         // this.style.background = "#ffffff";
    //     }
    // }
    //轮播图左右按钮样式

    let bannerImg = document.querySelectorAll(".bannerLeft > .imgLink");
    let leftBtn = document.querySelector(".leftBtn");
    let rightBtn = document.querySelector(".rightBtn");

    /!*let index1 = bannerImg.length;
    leftBtn.onclick = function(){
        index1--;
        if (index1 < 0){
            index1 = bannerImg.length -1;
        }
        bannerImg.forEach(function(elem){
            elem.style.opacity = 0;
        })
        for (let j = 0; j < btnList.length; j++) {
            btnList[j].classList.remove("hot");
        }
        btnList[index1].classList.add("hot");
        bannerImg[index1].style.opacity = 1;
    }
    let index2 = 0;
    rightBtn.onclick = function(){
        index2++;
        if (index2 == bannerImg.length){
            index2 = 0;
        }
        bannerImg.forEach(function(elem){
            elem.style.opacity = 0;
        })
        bannerImg[index2].style.opacity = 1;
        Array.prototype.forEach.call(btnList,function(ele){
            ele.classList.remove("hot");
            // console.log(index2);
        });
        let t = setTimeout(function(){
            clearInterval(t);
            btnList[index2].classList.add("hot");
        },1000)

    }*!/

    //animate方法轮播
    let current = 0, next = 0, itgo = true;
    let w = bannerImg[0].offsetWidth;
    leftBtn.onclick = function () {
        if (!itgo) {
            return;
        }
        itgo = false;
        next--;
        if (next < 0) {
            next = bannerImg.length - 1;
        }
        bannerImg[next].style.left = -w + "px";
        animate(bannerImg[current], {left: w}, 1000);
        btnList[current].classList.remove("hot");
        animate(bannerImg[next], {left: 0}, 1000, function () {
            itgo = true;
        });
        btnList[next].classList.add("hot");
        current = next;
    }

    rightBtn.onclick = function () {
        if (!itgo) {
            return;
        }
        itgo = false;
        next++;
        if (next == bannerImg.length) {
            next = 0;
        }
        bannerImg[next].style.left = w + "px";
        animate(bannerImg[current], {left: -w}, 1000);
        btnList[current].classList.remove("hot");
        animate(bannerImg[next], {left: 0}, 1000, function () {
            itgo = true;
        });
        btnList[next].classList.add("hot");
        current = next;
    }

    //轮播图播放及鼠标暂停样式
    let bannerLeft = document.querySelector(".bannerLeft")
    let player = setInterval(rightBtn.onclick, 2000);
    bannerLeft.onmouseenter = function () {
        clearInterval(player);
    }
    bannerLeft.onmouseleave = function () {
        player = setInterval(rightBtn.onclick, 2000)
    }

    //轮播图圆点按钮点击
    for(let i = 0; i < btnList.length; i++){
        btnList[i].onclick = function(){
            index2 = i;
            Array.prototype.forEach.call(btnList,function(ele){
                ele.classList.remove("hot");
            });
            // for(let j = 0; j < btnList.length; j++){
            //     btnList[j].classList.remove("hot");
            // }
            btnList[i].classList.add("hot");
        }
    }
    for (let i = 0; i < btnList.length; i++) {
        btnList[i].onclick = function () {
            if (!itgo) {
                return;
            }
            itgo = false;
            if (next == i) {
                return;
            }
            next = i;
            if (next < current) {
                bannerImg[next].style.left = -w + "px";
                animate(bannerImg[current], {left: w});
                animate(bannerImg[next], {left: 0}, 1000, function () {
                    itgo = true;
                });
            } else {
                bannerImg[next].style.left = w + "px";
                animate(bannerImg[current], {left: -w});
                animate(bannerImg[next], {left: 0}, 1000, function () {
                    itgo = true;
                });
            }
            btnList[current].classList.remove("hot");
            btnList[next].classList.add("hot");
            current = next;
        }
    }
*/
    //diary导航样式
    let diarytitleList = document.getElementsByClassName("diarytitleList")[0];
    let diarytitle = diarytitleList.getElementsByTagName("li");
    for (let i = 0; i < diarytitle.length; i++) {
        diarytitle[i].onclick = function () {
            for (let j = 0; j < diarytitle.length; j++) {
                diarytitle[j].style.borderBottom = "none";
            }
            this.style.borderBottom = "2px solid #000000";
        }
    }

    //diary列表样式
    let tabList = document.getElementsByClassName("tabList")[0];
    // let tacList = document.querySelector(".tabList");
    let tabListLi = tabList.getElementsByTagName("li");
    // let tacLists = tacList.querySelectorAll(".tabList > li")
    for (let i = 0; i < tabListLi.length; i++) {
        tabListLi[i].onmouseenter = function () {
            for (let j = 0; j < tabListLi.length; j++) {
                tabListLi[j].classList.remove("pointer");
            }
            this.classList.add("pointer");
        }
        tabListLi[i].onmouseleave = function () {
            tabListLi[i].classList.remove("pointer");
            tabListLi[0].classList.add("pointer");
        }
    }
    // tacLists.forEach(function(value,index){
    //     value.onmouseenter = function(){
    //         for (let i = 0; i < tacLists.length; i++) {
    //             tacLists[i].classList.remove("pointer");
    //         }
    //         this.classList.add("pointer");
    //     }
    //     value.onmouseleave = function(){
    //         this.classList.remove("pointer");
    //         tacLists[0].classList.add("pointer");
    //     }
    // })

    //按需加载
    //关闭前面图片属性 自定义一个，并且在判断元素到文档顶部的高度为自定义的值后，若图片没有src属性，那么将自动以定义的属性赋给图片src
    /*
    * 页面滚动高度 + 窗口高度  >=  元素到文档顶部的高度
    * scroll         inner          topArr:offsetTop
    *
    * */

    /*let imgs = document.querySelectorAll(".lazy");
    let topArr = [];
    imgs.forEach(function (Top) {
        let parent = Top.offsetParent
        let top = Top.offsetTop + parent.offsetTop;
        topArr.push(top);
    })
    let viewH = window.innerHeight;
    onscroll = function () {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        for (let i = 0; i < topArr.length; i++) {
            if (scrollTop + viewH >= topArr[i] + 100) {
                if (!imgs[i].src) {
                    imgs[i].src = imgs[i].getAttribute("csrc");
                }
            }
        }
    }*/

    //图片阴影
    let shadow = document.querySelectorAll(".imgShadow > a > div");
    // console.log(shadow);
    let shadows = document.querySelectorAll(".imgShadow > a > img");
    // console.log(shadows);
    for (let i = 0; i < shadow.length; i++) {
        for (let j = 0; j < shadows.length; j++) {
            if (i == j) {
                shadows[j].onmouseenter = function () {
                    this.style.opacity = 1;
                }
                shadows[j].onmouseleave = function () {
                    this.style.opacity = 0.7;
                }
                shadow[j].onmouseenter = function () {
                    shadows[j].style.opacity = 1;
                }
                shadow[j].onmouseleave = function () {
                    shadows[j].style.opacity = 0.7;
                }
            }
        }
    }

    // nav导航栏下拉框
    $(function(){
        let slides = $("li:has(.slideDown)");
        let slidesDowns = $(".slideDown");
        /*slides.on("mouseenter",function(){
            let index = $(this).index("li:has(.slideDown)");
            $(slidesDowns[index]).slideDown();
        })
        slides.on("mouseleave",function(){
            let index = $(this).index("li:has(.slideDown)");
            // $(slidesDowns[index]).slideUp();
            slidesDowns.eq(index).slideUp();
        })
        slides.on("mouseenter mouseleave", function () {
            let index = $(this).index("li:has(.slideDown)");
            $(slidesDowns[index]).toggle("display:block");
        })*/

        //放置更改下拉上去
        /*$(slides).on("mouseenter",function(){
            $(this).children(".slideDown").slideDown();
        })
        $(slides).on("mouseleave",function(){
            $(this).children(".slideDown").slideUp();
        })*/

        //放置通过toggle切换上下
        $(slides).on("mouseenter mouseleave",function(){
            $(this).children(".slideDown").slideToggle();
        })

        //轮播图button列表
        let bannerLeft = $(".bannerLeft");
        let bannerImg = $(".bannerLeft > .imgLink");
        let btnCircle = $(".btnCircle") , btnList = $(".btnCircle > li");
        let leftBtn = $(".leftBtn") , rightBtn = $(".rightBtn");
        let current = 0, next = 0, itgo = true;
        let w = bannerImg.width();
        bannerLeft.on("click",".leftBtn",function(){
            if (!itgo) {
                return;
            }
            itgo = false;
            next--;
            if (next < 0) {
                next = bannerImg.length - 1;
            }
            $(bannerImg[next]).css({left:-w});
            $(bannerImg[current]).animate({left: w}, 1000);
            $(bannerImg[next]).animate({left: 0}, 1000, function () {
                itgo = true;
            });
            $(btnList[next]).addClass("hot").siblings("li").removeClass("hot");
            current = next;
        })
        rightBtn.click(function(){
            if (!itgo) {
                return;
            }
            itgo = false;
            next++;
            if (next == bannerImg.length) {
                next = 0;
            }
            $(bannerImg[next]).css({left:w});
            // $(bannerImg[current]).animate({left: -w}, 1000);
            bannerImg.eq(current).animate({left: -w}, 1000);
            $(bannerImg[next]).animate({left: 0}, 1000, function () {
                itgo = true;
            });
            $(btnList[next]).addClass("hot").siblings("li").removeClass("hot");
            current = next;
        })

        let player = setInterval(function(){
            rightBtn.triggerHandler("click");
        }, 2000);
        bannerLeft.mouseenter (function () {
            clearInterval(player);
        })
        bannerLeft.mouseleave (function () {
            player = setInterval(function(){
                rightBtn.triggerHandler("click");
            }, 2000)
        })

        // 圆点点击事件
        for (let i = 0; i < btnList.length; i++) {
            $(btnList[i]).click (function () {
                console.log(1);
                if (!itgo) {
                    return;
                }
                itgo = false;
                if (next == i) {
                    return;
                }
                next = i;
                if (next < current) {
                    $(bannerImg[next]).css({left:-w});
                    bannerImg.eq(current).animate({left: w}, 1000);
                    bannerImg.eq(next).animate({left:0},1000,function(){
                        itgo = true;
                    });
                } else {
                    $(bannerImg[next]).css({left:w});
                    bannerImg.eq(current).animate({left: -w}, 1000);
                    bannerImg.eq(next).animate({left:0},1000,function(){
                        itgo = true;
                    });
                }
                btnList.eq(current).removeClass("hot").end()
                        .eq(next).addClass("hot");
                current = next;
            })
        }

        $(".lazy").lazyload({effect: "fadeIn",threshold: -100});
    })
})