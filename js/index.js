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
    console.log(btnList);
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
    let index1 = bannerImg.length;
    leftBtn.onclick = function(){
        index1--;
        if (index1 < 0){
            index1 = bannerImg.length -1;
        }
        bannerImg.forEach(function(elem){
            elem.style.zIndex = 1;
        })
        for (let j = 0; j < btnList.length; j++) {
            btnList[j].classList.remove("hot");
        }
        btnList[index1].classList.add("hot");
        bannerImg[index1].style.zIndex = 999;
    }
    let index2 = 0;
    rightBtn.onclick = function(){
        index2++;
        if (index2 == bannerImg.length){
            index2 = 0;
        }
        bannerImg.forEach(function(elem){
            elem.style.zIndex = 1;
        })
        bannerImg[index2].style.zIndex = 999;
        Array.prototype.forEach.call(btnList,function(ele){
            ele.classList.remove("hot");
            // console.log(index2);
        });
        btnList[index2].classList.add("hot");
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
            bannerImg.forEach(function(elem){
                elem.style.zIndex = 1;
            })
            bannerImg[i].style.zIndex = 999;
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


}
