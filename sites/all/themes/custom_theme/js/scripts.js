jQuery(document).ready(function($) {
    $('#navigation li').wrap( "<div class='mollie-menu-item'></div>" );

    $('.mollie-menu-item').click(function() {
        $(this).addClass('selected-li');
    });
});
