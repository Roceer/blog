window.onload = function(){
    //头部blog样式
    let home = document.getElementById("home");
    // let home1 = document.getElementsByClassName("logo")[0];
    // let logo = home1.getElementsByTagName("a")[0];
    // console.log(Home);
    //谁           是什么        干什么
    //事件源       事件类型       函数

    home.onmouseenter = function(){
        home.style.color = "#00c1de";
    }
    home.onmouseleave = function(){
        home.style.color = "#ffffff";
    }

    //垃圾类方法
    // logo.onmouseenter = function(){
    //     logo.style.color = "#00c1de";
    // }
    // logo.onmouseleave = function(){
    //     logo.style.color = "#ffffff";
    // }

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
    // console.log(bannerImg);
    let leftBtn = document.querySelector(".leftBtn");
    let rightBtn = document.querySelector(".rightBtn");
    /*
    let index1 = bannerImg.length;
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

    }
    */

    //animate方法轮播
    let current = 0, next = 0, itgo = true;
    let w = bannerImg[0].offsetWidth;
    leftBtn.onclick = function(){
        if (!itgo) {
            return;
        }
        itgo = false;
        next --;
        if (next < 0){
            next = bannerImg.length - 1;
        }
        bannerImg[next].style.left = -w + "px";
        animate (bannerImg[current],{left: w},1000);
        btnList[current].classList.remove("hot");
        animate (bannerImg[next],{left: 0},1000,function(){
            itgo = true;
        });
        btnList[next].classList.add("hot");
        current = next;
    }

    rightBtn.onclick = function(){
        if (!itgo) {
            return;
        }
        itgo = false;
        next ++;
        if (next == bannerImg.length){
            next = 0;
         }
        bannerImg[next].style.left = w + "px";
        animate(bannerImg[current],{left: -w},1000);
        btnList[current].classList.remove("hot");
        animate(bannerImg[next],{left: 0},1000,function(){
            itgo = true;
        });
        btnList[next].classList.add("hot");
        current = next;
    }

    //轮播图播放及鼠标暂停样式
    let bannerLeft = document.querySelector(".bannerLeft")
    let player = setInterval(rightBtn.onclick,2000);
    bannerLeft.onmouseenter = function(){
        clearInterval(player);
    }
    bannerLeft.onmouseleave = function(){
        player = setInterval(rightBtn.onclick,2000)
    }

    //轮播图圆点按钮点击
    /*for(let i = 0; i < btnList.length; i++){
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
    }*/
    for(let i = 0; i < btnList.length; i++){
        btnList[i].onclick =function () {
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
                animate(bannerImg[current],{left: w});
                animate(bannerImg[next],{left: 0},1000,function(){
                    itgo = true;
                });
            }else{
                bannerImg[next].style.left = w + "px";
                animate(bannerImg[current],{left: -w});
                animate(bannerImg[next],{left: 0},1000,function(){
                    itgo = true;
                });
            }
            btnList[current].classList.remove("hot");
            btnList[next].classList.add("hot");
            current = next;
        }
    }

    //diary导航样式
    let diarytitleList = document.getElementsByClassName("diarytitleList")[0];
    let diarytitle = diarytitleList.getElementsByTagName("li");
    for (let i = 0; i < diarytitle.length; i++) {
        diarytitle[i].onclick = function(){
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
        tabListLi[i].onmouseenter = function(){
            for (let j = 0; j < tabListLi.length; j++) {
                tabListLi[j].classList.remove("pointer");
            }
            this.classList.add("pointer");
        }
        tabListLi[i].onmouseleave = function(){
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
    /*
    * 页面滚动高度 + 窗口高度  >=  元素到文档顶部的高度
    * scroll         inner          topArr:offsetTop
    *
    * */
    let imgs = document.querySelectorAll(".lazyload");
    let topArr = [];
    imgs.forEach(function(Top){
        let parent = Top.offsetParent
        let top = Top.offsetTop + parent.offsetTop;
        topArr.push(top);
    })
    let viewH = window.innerHeight;
    onscroll = function(){
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        for (let i = 0; i < topArr.length; i++){
            if (scrollTop + viewH >= topArr[i] + 100) {
                if(!imgs[i].src){
                    console.log(imgs[i].getAttribute("csrc"));
                    imgs[i].src = imgs[i].getAttribute("csrc");
                }
            }
        }
    }

    //图片阴影
    let shadow = document.querySelectorAll(".imgShadow > a");
    console.log(shadow);
    let shadows = document.querySelectorAll(".imgShadow > a > img");
    console.log(shadows);
    shadow.forEach(function (ele) {
        ele.onmouseenter = function(){
            shadows.style.opacity = 1;
        }
    })

}
