$(function () {
   let poke = [];
   let colorArr = ['s','h','d','c'];
   let flag ={};
   let box = $('.box');
   while(poke.length<52){
       let index = Math.floor(Math.random()*colorArr.length);
       let color = colorArr[index];
       let number = Math.round(Math.random()*12+1);
       // console.log(flag[color + '_' + number]);
       if(!flag[color +'_'+number]){
           poke.push({color,number});
           flag[color+'_'+number]  = true;
       }
   }
   let index = -1;
   for (let i=0; i<7; i++){
       for(let j =0;j<=i;j++){
            index++;
            let obj = poke[index];
            let lefts = 350 -50*i + 100*j , tops = 60*i;
            $('<div>').addClass('poke')
                .css({backgroundImage:`url(./imgs/${obj.number}${obj.color}.jpg)`})
                .attr('id',i + '_'+ j)
                .data('number',obj.number)
                .appendTo('.box')
                .delay(index*60)
                .animate({left:lefts,top:tops})
       }
   }
   for(;index<52;index++){
       let obj = poke[index];
       $('<div>')
           .addClass('poke left')
           .css({backgroundImage: `url(./imgs/${obj.number}${obj.color}.jpg`})
           .attr('id',-2 + '_'+ -2)
           .data('number',obj.number)
           .appendTo('.box')
           // .delay(index*70)
           .animate({left:10,top:520});
   }
    let first = null;
    box.on('click','.poke',function () {
       let _this = $(this);
       let [i,j] = _this.attr('id').split('_');
       let id1 = i*1 + 1 + '_' + j , id2 = i*1 + 1 + '_' + (j*1+1);
       if($('#'+id1).length || $('#'+id2).length){
           return;
       }
       if (_this.hasClass('active')){
           $(this).removeClass('active').animate({top:'+=30px'})
       } else{
           $(this).addClass('active').animate({top:'-=30px'})
       }
       if (!first){
           first = _this;
       }else{
           let number1 = first.data('number') , number2 = _this.data('number');
           if(number1 + number2 ===14){
               $('.active').animate({top:7,left:697,opacity:0},function () {
                   $(this).remove();
               });
           }else{
               $('.active').animate({top: '+=30px'}, function () {
                   $(this).removeClass('active')
               })
           }
           first = null;
       }
   });
    let n = 0;
    $('.rightBtn').on('click',function () {
        $('.left').last().css('zIndex',n++).animate({left:697},function () {
            $(this).removeClass('left').addClass('right')
        })

    });
    $('.leftBtn').on('click', function () {
        $('.right').first().css('zIndex', n++).animate({left: 10}, function () {
            $(this).removeClass('right').addClass('left')
        })

    })

});
