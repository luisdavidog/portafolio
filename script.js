$(function () {
    $('li a').click(function () {
        // Remove 'active' class from all options
        $('li a').removeClass('active');
        // Add 'active' class to the clicked option
        $(this).addClass('active');
    });
});
