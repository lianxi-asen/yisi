//这是 感情不是渐行渐远
(function(){
    //获取他们的父级
    var tabsRight = document.getElementsByClassName("tabs-right")[0]
    //获取上面的点击按钮
    var tabsLi = tabsRight.querySelectorAll(".top-list ul li")
    //获取下面的img
    var tabsicon = tabsRight.querySelectorAll(".top-list ul li div")
    //获取下面的li
    var bottomLi = tabsRight.querySelectorAll(".top-list-list .TABs")
    //信号量
    //长度
    var len = tabsLi.length
    var num = 0;
    //初始化样式
    tabsicon[num].classList.add("active")
    tabsicon[num].classList.remove("icon")
    tabsLi[num].classList.add("on")
    bottomLi[num].classList.add("on")
    for(var i=0;i<len;i++){
        //当移入到li的上面
        tabsLi[i].index = i
        tabsLi[i].onmouseenter = function(){
            //把之前的num清楚class
            tabsicon[num].classList.remove("active");
            tabsicon[num].classList.add("icon")
            tabsLi[num].classList.remove("on")
            bottomLi[num].classList.remove("on")
            tabsLi[num].style.backgroundImage = ""
            //num = this.index
            num = this.index
            //获取li里面的自定义属性
            var dataImage = tabsLi[num].getAttribute("data-image")
            tabsLi[num].style.backgroundImage = "url("+dataImage+")"
            //再把新的num 添加或移除class
            tabsicon[num].classList.add("active")
            tabsicon[num].classList.remove("icon")
            tabsLi[num].classList.add("on")
            bottomLi[num].classList.add("on")
        }
    }
})();

//这是  中间的内容区域 刚开始的计数
(function(){
    //获取 数字的 节点 content-title-right
    var contentTitleSpan = document.getElementsByClassName("content-title-num")
    //定义一个信号量
    var num = 0;
    //遍历取到里面的内容
    for(var i=0;i<contentTitleSpan.length;i++){
        var str = contentTitleSpan[i].innerHTML
        num = str
        
    }
    setInterval(function(){
        num++
        if(num>=999999){
            contentTitleSpan[0].innerHTML = num
            contentTitleSpan[0].style.cssText = "font-size:18px;color:#000;"
        }
        contentTitleSpan[0].innerHTML = num
        
    },100)
    
    
})();
//地图
(function(){
    //获取banner
    var banner = document.querySelector(".banner")
    //获取地图li
    var mapli = document.querySelectorAll(".map-right li")
    //获取右边显示的图片 img
    var mapimg = banner.querySelectorAll(".banner .map")
    //获取右边的两个按钮
    var btn = document.querySelectorAll(".banner .arrow div")
    //获取sapn
    var span = banner.querySelectorAll("span")
    //信号量
    var num = 0;
    var len = mapli.length
    //初始化显示
    mapli[num].classList.add("on")
    mapimg[num].classList.add("on")
    //左按钮点击的时候
    btn[0].onclick = function(){
       //把初始化的num清除class
       mapli[num].classList.remove("on")
       mapimg[num].classList.remove("on")
       
       //num--
       num--
       if(num<0)num=len-1
       //获取自定义数据
       var str = mapli[num].dataset
       span[0].innerHTML = str.toptext
       span[1].innerHTML = str.bottomtext
       //给新的num添加class类名
       mapli[num].classList.add("on")
       mapimg[num].classList.add("on")
    }
    //右按钮点击的时候
    btn[1].onclick = function(){
       //把初始化的num清除class
       mapli[num].classList.remove("on")
       mapimg[num].classList.remove("on")
       //num++
       num++
       if(num>=len)num = 0;
       //获取自定义数据
       var str = mapli[num].dataset
       span[0].innerHTML = str.toptext
       span[1].innerHTML = str.bottomtext
       //给新的num添加class类名
       mapli[num].classList.add("on")
       mapimg[num].classList.add("on")
    }
    
    for(var i=0;i<len;i++){
         //给每一个i添加自定义属性
        mapli[i].index = i
        mapli[i].onmouseenter = function(){
            //清除之前num的class
            mapli[num].classList.remove("on")
            mapimg[num].classList.remove("on")
            //给num赋予新值
            num = this.index
            //获取自定义数据
            var str = mapli[num].dataset
            span[0].innerHTML = str.toptext
            span[1].innerHTML = str.bottomtext
            //给新的num添加class类名
            mapli[num].classList.add("on")
            mapimg[num].classList.add("on")
        }
        
    }
})();
//底部选项卡
(function(){
    //获取li
    var Finalli = document.querySelectorAll(".Final-TAB li")
    //获取li下面的img
    var image = document.querySelectorAll(".Final-TAB li img")
    //console.log(image)
    var len = Finalli.length
    var num = 0;
    //for循环当li移入的时候
    for(var i=0;i<len;i++){
        Finalli[i].index = i
        Finalli[i].onmouseenter = function(){
            //获取图片的原来的图片
            var originalImg = image[this.index].src
            //console.log(originalImg)
            //获取自定义的属性
            var images = Finalli[this.index].dataset
            //console.log(images)
            image[this.index].src = "../../img/index/"+images.image
        }
    }
    

})();
(function(){
    //获取li
    var li = document.querySelectorAll(".Social-top-list li")
    var LiImgs = document.querySelectorAll(".Social-top-list li img")
    var lispan = document.querySelectorAll(".Social-top-list li span")
    console.log(LiImgs)
    //信号量
    var arrImage = ["../../img/index/box8_ic1.png","../../img/index/box8_ic2.png","../../img/index/box8_ic3.png","../../img/index/box8_ic4.png"]
    var len = li.length;
    var num = 0;
    //初始化化样式
    
    lispan[num].classList.add("on")
    LiImgs[num].src = li[num].dataset.images
    //循环遍历
    for(var i=0;i<len;i++){
        li[i].index = i
        li[i].onmouseenter = function(){
            //清除默认的样式
            lispan[num].classList.remove("on")
            LiImgs[num].src = arrImage[num]
            num = this.index
            console.log(num)
            // //就获取对应num的自定义属性
            var Dataimgs = li[num].getAttribute("data-images")
            console.log(Dataimgs)
            // //在给新的num重新复制
             lispan[num].classList.add("on")
             LiImgs[num].src = Dataimgs
        }
    }
})();

