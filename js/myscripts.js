jQuery(document).ready(function() {
    $(".drop-list li").mouseenter(function() {
        $("div.search-triggers").css({
            height: '114',
            borderRight: '1px solid #85b200'
        });
        $(".search-ico i").css({
        	borderColor:'transparent transparent #85b200',
        	top:'14px',
        });
    })
    $(".drop-list li").mouseleave(function() {
        $("div.search-triggers").css({
            height: '38',
            borderRight: '1px solid #85b200'
        });
        $(".search-ico i").css({
        	borderColor:'#85b200 transparent transparent',
        	top:'18px',
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
});
