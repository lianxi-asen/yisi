(function(){
    //查找li
    var li = document.querySelectorAll(".header-top>li>a")
    console.log(li)
    var len = li.length
    
    for(let i = 0;i<len;i++){
        li[i].onmouseenter = function(){
           var parse = this.parentNode
           console.log(parse)
            this.classList.add("active")
        }
    }
})()