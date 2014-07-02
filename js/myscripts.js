$(document).ready(function() {
    //顶部种类下拉菜单
    $(".drop-list li").mouseenter(function() {
        $("div.search-triggers").css({
            height: '114',
            borderRight: '1px solid #85b200'
        });
        $(".search-ico i").css({
            borderColor: 'transparent transparent #85b200',
            top: '14px',
        });
    })
    $(".drop-list li").mouseleave(function() {
        $("div.search-triggers").css({
            height: '38',
            borderRight: '1px solid #85b200'
        });
        $(".search-ico i").css({
            borderColor: '#85b200 transparent transparent',
            top: '18px',
        });
    })
    $(".drop-list li").click(function() {
        var $a = $(this).detach();
        $(".drop-list li").first().before($a);
        $("div.search-triggers").css({
            height: '38',
        });
    })
    $("#search-button").mouseenter(function() {
        $(this).css("background", "#6dd900");
    })
    $("#search-button").mouseleave(function() {
        $(this).css("background", "#85b200");
    })


    // 最新上线切换
    if (window.innerWidth < 768) { //判断浏览器分辨率是否小于等于768px
        var a = $("#latest-row").width(); //获取latest-row的宽度
        $(".latest-content").width(a); //将.latest-content的宽度设为latest-row
        $(".latest-wrap").width(3 * a); //将.latest-wrap的宽度设为latest-row的三倍
    }
    $(window).resize(function() { //监听浏浏览器窗口大小调整事件
        if (window.innerWidth < 768) { //判断浏览器分辨率是否小于等于768px
            var a = $("#latest-row").width(); //获取latest-row的宽度
            $(".latest-content").width(a); //将.latest-content的宽度设为latest-row
            $(".latest-wrap").width(3 * a); //将.latest-wrap的宽度设为latest-row的三倍
        } else { //当浏览器从小于768像素放大时，清空width的设置
            $(".latest-content").width("");
            $(".latest-wrap").width("");
        }
        var b = $(".title-change-active").index(); //获取含有类.title-change-active的li的索引值
        var c = $(".latest-content").width(); //获取浏览器窗口改变后.latest-content的宽度
        //设置.latest-wrap的宽度
        var d = b * c;
        $(".latest-wrap").css({
            left: d
        });
    })
    $(".title-change ul li").click(function() {
        $(".title-change ul li a").removeClass("title-change-active");
        $(this).find("a").addClass("title-change-active");
        var a = $(this).index(); //获取点击的li的索引
        var b = $(".latest-content").width(); //获取内容所占据的宽度
        var c = a * (-b); //设置将要移动的距离
        $(".latest-wrap").animate({
            left: c
        }, 500);
        var title = $(this).find("a").text(); //获取点击的li的内容
        $(".title h1").text(title); //将标题的内容设置为获取的li的内容
    })


    //最新上线div翻转
    $("div.back").hide().css('left', 0);

    function mySideChange(front) {
        if (front) {
            $(this).parent().find('div.front').show();
            $(this).parent().find('div.back').hide();

        } else {
            $(this).parent().find('div.front').hide();
            $(this).parent().find('div.back').show();
        }
    }

    $(".new-classes li").hover(
        function() {
            $(this).find('div').stop().rotate3Di('flip', 300, {
                direction: 'clockwise',
                sideChange: mySideChange
            });
        },
        function() {
            $(this).find('div').stop().rotate3Di('unflip', 300, {
                sideChange: mySideChange
            });
        }
    );
});
