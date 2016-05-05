jQuery(document).ready(function($) {
    $('#navigation li').wrap( "<div class='mollie-menu-item'></div>" );

    $('#navigation li').each(function() {
        if ( $(this).hasClass('active')) {
            $(this).closest('.mollie-menu-item').addClass('selected-li');
        } else {
            $(this).closest('mollie-menu-item').removeClass('selected-li');
        }
    });

    // $('.mollie-menu-item').click(function() {
    //     $(this).addClass('selected-li');
    // });
});
