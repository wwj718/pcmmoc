function clickList(a) {
    var count = 0;
    $(a).click(function() {
        if (count == 0) {
            $(this).css({
                height: '114',
            });
            count++;
        } else if (count == 1) {
            $(this).css({
                height: '38',
            });
            count--;
        }
    });
};
