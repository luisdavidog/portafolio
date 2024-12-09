$(function () {
    $('li a').click(function () {
        // Remove 'active' class from all options
        $('li a').removeClass('active');
        // Add 'active' class to the clicked option
        $(this).addClass('active');
    });
    $('#experience').on('click', function () {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
    $('#projects').on('click', function () {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});
