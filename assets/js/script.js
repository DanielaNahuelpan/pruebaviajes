$(document).ready(function() {
    $('a.nav-link').click(function(){
        var target = $(this.hash);
        $('html, body').active({
            scrollTop: target.offset().top
        }, 800);
        return false;
    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip({
    delay: { "show": 500, "hide": 100 }
    });
});

