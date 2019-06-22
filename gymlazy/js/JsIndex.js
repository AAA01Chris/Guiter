$(function () {
    let current = 0, next = 0;
    let rightBrn = $('.rightBtn');
    let leftBrn = $('.leftBtn');
    let bannerImg = $('.bannerImg > li');
    let Btm = $('.Btm > li');
    let bannerLeft = $('.bannerLeft');
    let flag = true;
    let flag1= true;
    // let BtmBotton = Btm[0].getElementsByTagName('li');
    let imgWidth = bannerImg.width();
    // let w = bannerImg[0].offsetWidth;
    Btm.eq(0).addClass('hot');
    let t =setInterval(function () {
        rightBrn.click()
    },2500);
    //鼠标移入移出
    bannerLeft.on('mouseover',function () {
        clearInterval(t);
        if(!flag1){
            return
        }else{
            flag1 = false;
            leftBrn.animate({left: 14, opacity: 1});
            rightBrn.animate({right:14,opacity:1});
        }
    });
    bannerLeft.on('mouseout',function () {
        t =setInterval(function () {
            rightBrn.click()
        },2500);
        if(!flag1) {
            return;
        }else{
            flag1 = false;
            leftBrn.animate({left:43,opacity:0});
            rightBrn.animate({right:43,opacity:0});
        }
    });
    rightBrn.click(function () {
        if (!flag) {
            return;
        } else {
            flag = true;
        }
        next++;
        if (next === bannerImg.length) {
            next = 0;
        }
        $(bannerImg[next]).css('left', imgWidth);
        bannerImg.eq(current).animate({left: -imgWidth});
        /*bannerImg.eq(next).animate({left: 0});*/
        bannerImg.eq(next).animate({left: 0}, function () {
            flag = true
        });
        Btm.eq(current).removeClass('hot');
        Btm.eq(next).addClass('hot');
        current = next;
    });
    leftBrn.click(function () {
        if(!flag){
            return;
        }else{
            flag = false;
        }
        next--;
        if(next < 0){
            next = bannerImg.length - 1;
        }
        $(bannerImg[next]).css('left',-imgWidth);
        bannerImg.eq(current).animate({left: imgWidth});
        bannerImg.eq(next).animate({left:0},function () {
            flag = true
        });
        Btm.eq(current).removeClass('hot');
        Btm.eq(next).addClass('hot');
        current = next;
    });
    $("img.lazy").lazyload({effect: "fadeIn"});
});



