window.addEventListener('load',function () {
    let main = document.getElementById('main');
    let main1 = document.getElementById('main1');
    // let main = document.querySelectorAll('.echarts');
    let Bar = echarts.init(main);
    // 指定图表的配置项和数据
    let Baroption = {
        title: {
            text: 'Wuif1905全栈男女比例',
            show:true,
            textStyle:{
                color: 'orange',
                opacity:'0.6',
                bottom: 20
            },
        },
        tooltip: {},
        legend: {
            data:['人数']
        },
        xAxis: {
            data: ["男","女"]
        },
        yAxis: {},
        series: [{
            name: '人数',
            type: 'bar',
            barWidth: '30%',
            data: [20, 31]
        }]
    };
    Bar.setOption(Baroption);
    let line = echarts.init(main1);
    let lineoption = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
        }]
    };
    line.setOption(lineoption);
    // 使用刚指定的配置项和数据显示图表。


},false);