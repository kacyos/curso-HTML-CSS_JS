function scrollSuave(seletor) {
    //event.preventDefault();
    $(seletor).click(function (evento) {
        
        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1800);
    });
}

scrollSuave('a[href*=portifolio]');
scrollSuave('a[href*=about]');
scrollSuave('a[href*=contact]');