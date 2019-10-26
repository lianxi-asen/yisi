//携手你要的幸福的banner
(function(){
    //获取两个左右按钮
    var btn = document.getElementsByClassName("btn-box")
    //获取三个li
    var bannerLi = document.getElementsByClassName("wu-li")
    //获取底部选项卡
    var tabs = document.querySelectorAll(".icon ul li")
    //找里面的div
    var lidiv = document.querySelectorAll(".icon ul li div")
    //获取上面选项卡的li
    var topLi = document.querySelectorAll(".wu-li-ul li")
   // console.log(topLi)
    // console.log(lidiv)
    // console.log(tabs)
    //定义一个信号量
    var num= 0;
    var leng = tabs.length
    var len = bannerLi.length
    var n = 0;
    bannerLi[num].classList.add("on")
    //左按钮点击的时候
    btn[0].onclick = function(){
        //先把num的之前的对应的值 先清除类名
       bannerLi[num].classList.remove("on")
       //num--
       num--
       //如果num<0的时候 就让num = 长度-1
       if(num<0){
           num = len-1
       }
       //在给新的num 对应的值 添加上类名
       bannerLi[num].classList.add("on")
    }
    //右按钮点击的时候
    btn[1].onclick = function(){
        //先把前面的对应的num的值去除类名
        bannerLi[num].classList.remove("on")
        //num++
        num++
        //如果num>=3 就让num = 0
        if(num>=len){
            num = 0;
        }
        //在给新的num的值对应的添加class类名
        bannerLi[num].classList.add("on")
    }
    lidiv[n].classList.add("active")
    topLi[n].classList.add("active")
    for(var i = 0;i<leng;i++){
        tabs[i].index = i
        tabs[i].onmouseenter = function(){
            lidiv[n].classList.remove("active")
            topLi[n].classList.remove("active")
            //console.log(lidiv[this.index])
            n = this.index
            var title = tabs[n].getAttribute("title")
            lidiv[n].innerHTML = title
            lidiv[n].classList.add("active")
            topLi[n].classList.add("active")
        }
    }
})()