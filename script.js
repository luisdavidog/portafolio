$(function () {
    $('li a').click(function () {
        // Remove 'active' class from all options
        $('li a').removeClass('active');
        // Add 'active' class to the clicked option
        $(this).addClass('active');
    });
});

    document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('.card');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target); // Deja de observar el elemento
                }
            });
        }, { threshold: 0.1 }); // El elemento es visible en un 10%

        cards.forEach(card => observer.observe(card));
    });
