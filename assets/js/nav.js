$(function () {
    var $sidebar = $('.sidebar');

    // Aktif sınıfa göre üst menüler açılıyor.
    $sidebar.find('li.active').parents('ul.children').addClass('open');
    $sidebar.find('li.active').parents('li').addClass('open');

    // Aktif sınıfa göre alt menüler açılıyor.
    $sidebar.find('li.active').addClass('open').children('ul').show();

    $sidebar.find('li.has-children span').on('click', function () {
        var $element = $(this).parent('li');

        if ($element.hasClass('open')) {
            $element.removeClass('open');
            $element.find('li').removeClass('open');
            $element.find('ul').slideUp();
        } else {
            $element.addClass('open');
            $element.children('ul').slideDown();
            $element.siblings('li').children('ul').slideUp();
            $element.siblings('li').removeClass('open');
            $element.siblings('li').find('li').removeClass('open');
            $element.siblings('li').find('ul').slideUp();
        }
    });
});