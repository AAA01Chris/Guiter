$(function () {
    let arr = [
        {name:'安彤',tell:18406585217,py:'antong'},
        {name:'张琰敏',tell:15513069390,py:'zhangyanmin'},
        {name:'刘勇',tell:13593199895,py:'liuyong'},
        {name:'刘奇',tell:13096572888,py:'liuqi'},
        {name:'秦伟',tell:18406584243,py:'qinwei'},
        {name:'张毅',tell:13356458790,py:'zhangyi'},
        {name:'高鑫',tell:18406584343,py:'gaoxin'},
        {name:'刘天睿',tell:18935034561,py:'liutianrui'},
        {name:'奶奶',tell:13056475432,py:'nainai'},
        {name:'姥爷',tell:15435654345,py:'laoye'},
        {name:'姥姥',tell:13233408765,py:'yeye'},
        {name:'胡斌',tell:13233405467,py:'hubin'},
        {name:'耿昊',tell:13233408765,py:'genhao'},
        {name:'李志强',tell:18546574323,py:'lizhiqiang'},
    ];
    let main = $('main');
    let aside = $('.aside');
    let input = $('input');
    let mind = $('.mind');
    console.log(mind);
    input.on('input',function () {
        let val = $(this).val();
        let newarr = arr.filter(ele=>ele.name.includes(val) ||ele.py.includes(val));
        render(newarr)
    });
    render(arr);
    function render(arr) {
        let person = {};
        main.empty();
        aside.empty();
        arr.forEach(ele => {
            let firstChar = ele.py.charAt(0).toUpperCase();
            if (!person[firstChar]) {
                person[firstChar] = [];
            }
            person[firstChar].push(ele);
        });
        let keysarr = Object.keys(person).sort();
        let html = '';
        let html1 = '';
        let html2 = '';
        for (let i = 0; i < keysarr.length; i++) {
            let ele = keysarr[i];
            let ele1 = keysarr[0];
            html2 = `<div class = 'mind'>${ele1}</div>`
            html1 += `<li>${ele}</li>`;
            html += `
                <section><h2>${ele}</h2>
            `;
            for (let j = 0; j < person[ele].length; j++) {
                let info = person[ele][j];
                html += `<div><a href="tel:${info.tell}"> ${info.name}</a></div>`
            }
            html += `</section>`
        }
        aside.html(html1);
        main.html(html);
        mind.html(html2);
    }
});