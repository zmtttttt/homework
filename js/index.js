$(function(){
    var imgs =  $(".main-banner img");
    var btns = $(".main-banner li");
    btns.click(function(){
        $(this).addClass("current").siblings().removeClass("current");
        imgs.eq($(this).index()).fadeIn().siblings().fadeOut();
    })
})
$(function () {
    var index = 0;
    var next = $(".next");
    var prve = $(".prev");
    var imgs = $(".main-images img");
    var btns = $(".main-banner li");
 //    点击右边的按钮，index的值每次都加一，当值大于四的时候，index重置
 //    重复代码利用函数去进行封装 无论前后端
    next.click(function(){
        index++;
        if(index > 4){
            index = 0;
        }
        bannerAnimate(index);
    })
    prve.click(function(){
        index--;
        if(index < 0){
            index = 4;
        }
        bannerAnimate(index);
    })
    function bannerAnimate(index){
        imgs.eq(index).fadeIn().siblings().fadeOut();
        btns.eq(index).addClass("current").siblings().removeClass("current");
        console.log(index)
    }
 })