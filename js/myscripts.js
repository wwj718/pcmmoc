    //单击按钮后添加active类
    function changeBackground(element, classes) {
        $(element).click(function() {
            $(this).parent().parent().find("a").removeClass();
            $(this).addClass(classes);
        })
    };

    //顶部下拉菜单的函数
    function dropList(a, b, c, ico) {
        var aHeight = $(a).find("li").height();
        var bHeight = aHeight * 3;
        $(a).mouseenter(function() {
            $(this).css({
                height: bHeight,
                // borderRight: border,
            });
            $(this).find(ico).css({
                borderColor: 'transparent transparent #85b200',
                top: b,
            });
        })
        $(a).mouseleave(function() {
            $(this).css({
                height: aHeight,
                // borderRight: border,
            });
            $(this).find(ico).css({
                borderColor: '#85b200 transparent transparent',
                top: c,
            });
        })
        $(a).find("li").click(function() {
            //调整选择的搜索类型的位置
            var b = $(this).parent();
            var $a = $(this).detach();
            $(b).children().first().before($a);
            $(b).parent().css({
                height: aHeight,
            });
        })
    };
    //使移动端顶部的下拉列表功能

    function clickList(obj, b, c, ico) {
        //定义单击出li的高度及总的ul高度
        var liHeight = $(obj).find("li").height();
        var ulHeight = 3 * liHeight;
        //平台、设备和操作系统     
        var system = {
            win: false,
            mac: false,
            xll: false
        };
        //检测平台     
        var p = navigator.platform;
        system.win = p.indexOf("Win") == 0;
        system.mac = p.indexOf("Mac") == 0;
        system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
        //跳转语句     
        if (system.win || system.mac || system.xll) {} else {
            var count = 0;
            $(obj).click(function() {
                if (count == 1) {
                    $(this).css({
                        height: liHeight,
                    });
                    count--;
                    $(this).find(ico).css({
                        borderColor: '#85b200 transparent transparent',
                        top: b,
                    });
                    $(this).find("a").css("background", "#fff");
                } else if (count == 0) {
                    $(this).css({
                        height: ulHeight,
                    });
                    count++;
                    $(this).find(ico).css({
                        borderColor: 'transparent transparent #85b200',
                        top: c,
                    });
                }
            });
        }
    };

    // 更改input[type="hidden"]的值

    function changeType(a, b) {
        $(a).click(function() {
            // 更改input#searchType的值
            var typeText = $(this).children("a").text();
            var typeId = $(this).attr("id");
            if (typeText == "课程") {
                $(b).val(typeId)
            } else if (typeText == "教师") {
                $(b).val(typeId)
            } else if (typeText == "机构") {
                $(b).val(typeId)
            } else {};
        })
    }

    //学堂在线部分
    function showDetails(obj) {
        $(obj).mouseenter(function() {
            var oLi = $(this).parent().parent(); //获取该元素所在行的li
            var oLiHover = oLi.next();
            var s = $(this).index(); //获取该元素的索引值
            var iLiIndex = oLi.index(); //获取该元素所在行的li的索引值
            var iLiHeight = oLi.height();
            var iDetailsHeight = oLi.next().height(); //获取详细内容的高度
            var iBorder = parseInt(oLi.css("border-top-width")); //获取该行li的上边框宽度
            var sTop = -iDetailsHeight + (iBorder + iLiHeight) * (iLiIndex / 2) + "px";
            $(this).css({ //显示该元素的背景三角形
                background: 'url(imgs/sjx.png) no-repeat 50% 0%'
            });
            oLiHover.css({
                display: 'block', //显示该a对应的详细内容
                top: sTop //改变详细内容的位置
            });
            oLiHover.mouseenter(function() { //鼠标移动到该a对应的详细内容上时的动作
                $(obj).css({
                    background: 'none'
                });
                $(this).prev().find("ul.classify-second li").eq(s).css({ //显示该详细信息对应的li的背景三角形
                    background: 'url(imgs/sjx.png) no-repeat 50% 0%'
                });
                $(this).css({ //显示该详细内容
                    display: 'block',
                    left: '0'
                });
                $(this).mouseleave(function() { //鼠标移开详细内容时的动作
                    $(this).css({
                        display: 'none'
                    });
                    $(obj).css({
                        background: 'none'
                    });
                })
            })
        })
        $(obj).mouseleave(function() { //鼠标移开a对应的li时的动作
            var oLi = $(this).parent().parent(); //获取该元素所在行的li
            var oLiHover = oLi.next();
            $(this).css({
                background: 'none'
            });
            oLiHover.css({
                display: 'none'
            });
        })
    }


    // 学堂在线中间部分
    function showDetailsCenter(obj) {
        $(obj).each(function() {
            $(this).children("a").eq(0).mouseenter(function() {
                var oLi = $(this).parent(); //获取该a的父元素li
                var oLiHover = oLi.next();
                var iIndex = oLi.index(); //获取该a的父元素li的索引值
                var iLiHeight = oLi.height();
                var iDetailsHeight = oLiHover.height(); //获取详细内容的高度
                var iBorder = parseInt(oLi.css("border-top-width")); //获取该行li的上边框宽度
                var sTop = -iDetailsHeight + 1 + (iLiHeight + iBorder) * (iIndex / 2) + "px";
                //显示该a的背景三角形
                $(this).css("background", "#6c9100 url(imgs/sjx.png) no-repeat 50% 0%");
                oLiHover.css({
                    display: 'block', //显示该a对应的详细内容
                    top: sTop //改变详细内容的位置
                });
                oLiHover.mouseenter(function() { //鼠标移动到该a对应的详细内容上时的动作
                    $(obj).children("a").css("background", "#6c9100");
                    //显示该详细信息对应的li的背景三角形
                    $(this).prev().find("a").eq(0).css("background", "#6c9100 url(imgs/sjx.png) no-repeat 50% 0%");
                    $(this).css({ //显示该详细内容
                        display: 'block',
                        left: '0',
                    });
                    $(this).mouseleave(function() { //鼠标移开详细内容时的动作
                        $(this).css("display", "none");
                        $(this).prev().find("a").css("background", "#6c9100");
                    })
                })
            })
            $(this).children("a").mouseleave(function() {
                var oLi = $(this).parent(); //获取该a的父元素li
                var oLiHover = oLi.next();
                $(this).css({
                    background: '#6c9100'
                });
                oLiHover.css({
                    display: 'none'
                });
            });

        })
    }

    $(document).ready(function() { //搜索按钮变色
        $("#searchButton").mouseenter(function() {
            $(this).css("background", "#6dd900");
        })
        $("#searchButton").mouseleave(function() {
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
