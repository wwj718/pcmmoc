    //定义下拉菜单的函数

    function dropList(a) {
        $(a).mouseenter(function() {
            $(this).parent().parent().css({
                height: '114',
                borderRight: '1px solid #85b200'
            });
            $(this).parent().parent().find(".search-ico i").css({
                borderColor: 'transparent transparent #85b200',
                top: '14px',
            });
        })
        $(a).mouseleave(function() {
            $(this).parent().parent().css({
                height: '38',
                borderRight: '1px solid #85b200'
            });
            $(this).parent().parent().find(".search-ico i").css({
                borderColor: '#85b200 transparent transparent',
                top: '18px',
            });
        })
        $(a).click(function() {
            var $a = $(this).detach();
            $(a).first().before($a);
            $(this).parent().parent().css({
                height: '38',
            });
        })
    };

    $(document).ready(function() { //搜索按钮变色
        $("#search-button").mouseenter(function() {
            $(this).css("background", "#6dd900");
        })
        $("#search-button").mouseleave(function() {
            $(this).css("background", "#85b200");
        })
        // 学堂在线部分
        $(".red .classify-second li a,.blue .classify-second li a").mouseenter(function() {
            var s = $(this).parent().index(); //获取该a的父元素li的索引值
            var ss = $(this).parent().parent().parent().index(); //获取该a元素该行的li的索引值
            var gd = $(this).parent().parent().parent().next(".classify-second-hover").height(); //获取详细内容的高度
            var jl = -gd + 1 + 41 * (ss / 2) + "px";
            $(this).parent().css({ //显示该a的父元素li的背景三角形
                background: 'url(imgs/sjx.png) no-repeat 50% 0%'
            });
            $(this).parent().parent().parent().next(".classify-second-hover").css({
                display: 'inline-block', //显示该a对应的详细内容
                top: jl //改变详细内容的位置
            });
            $(".red .classify-second-hover,.blue .classify-second-hover").mouseenter(function() { //鼠标移动到该a对应的详细内容上时的动作
                $(".red .classify-second li,.blue .classify-second li").css({
                    background: 'none'
                });
                $(this).prev().find("ul.classify-second li").eq(s).css({ //显示该详细信息对应的li的背景三角形
                    background: 'url(imgs/sjx.png) no-repeat 50% 0%'
                });
                $(this).css({ //显示该详细内容
                    display: 'inline-block',
                    left: '0'
                });
                $(this).mouseleave(function() { //鼠标移开详细内容时的动作
                    $(this).css({
                        display: 'none'
                    });
                    $(".red .classify-second li,.blue .classify-second li").css({
                        background: 'none'
                    });
                })
            })
        })
        $(".red .classify-second li,.blue .classify-second li").mouseleave(function() { //鼠标移开a对应的li时的动作
            $(this).css({
                background: 'none'
            });
            $(this).parent().parent().next(".classify-second-hover").css({
                display: 'none'
            });
        })

        // 学堂在线中间部分
        $(".green .classify-first li.green-classes").each(function() {
            $(this).children("a").eq(0).mouseenter(function() {
                var s = $(this).parent().index(); //获取该a的父元素li的索引值
                var gd = $(this).parent().next(".classify-second-hover").height(); //获取详细内容的高度
                var jl = -gd + 1 + 41 * (s / 2) + "px";
                // alert(s);
                $(this).css({ //显示该a的背景三角形
                    background: '#6c9100 url(imgs/sjx.png) no-repeat 50% 0%'
                });
                $(this).parent().next(".classify-second-hover").css({
                    display: 'inline-block', //显示该a对应的详细内容
                    top: jl //改变详细内容的位置
                });
                $(".green .classify-second-hover").mouseenter(function() { //鼠标移动到该a对应的详细内容上时的动作
                    $(".green .classify-first li").eq(0).find("a").css({
                        background: '#6c9100'
                    });
                    $(".green .classify-first li").eq(2).find("a").css({
                        background: '#6c9100'
                    });
                    $(".green .classify-first li").eq(4).find("a").css({
                        background: '#6c9100'
                    });
                    $(".green .classify-first li").eq(6).find("a").css({
                        background: '#6c9100'
                    });
                    $(".green .classify-first li").eq(8).find("a").css({
                        background: '#6c9100'
                    });
                    $(this).parent().find("li").eq(s).find("a").eq(0).css({ //显示该详细信息对应的li的背景三角形
                        background: '#6c9100 url(imgs/sjx.png) no-repeat 50% 0%'
                    });
                    $(this).css({ //显示该详细内容
                        display: 'inline-block',
                        left: '0',
                    });
                    $(this).mouseleave(function() { //鼠标移开详细内容时的动作
                        $(this).css({
                            display: 'none'
                        });
                        $(this).prev("li").find("a").css({
                            background: '#6c9100'
                        });
                    })
                })
            })

            $(this).children("a").mouseleave(function() {
                $(this).css({
                    background: '#6c9100'
                });
                $(this).parent().next(".classify-second-hover").css({
                    display: 'none'
                });
            });

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
