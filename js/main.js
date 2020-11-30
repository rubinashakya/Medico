$(document).ready(function() {
    $('.multiple-select').select2();
    $('#signup-carousel').slick({
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    });

    $('.password-strength-input').keyup(function(){
        let len = this.value.length;
        
        if (len === 0) {
        $('.password-strength_bar').each(function() {
            $(this).removeClass('active')
        });
        } else if (len > 0 && len <= 4) {
            $('.password-strength__bar--1').addClass('active');
            $('.password-strength__bar--2').removeClass('active');
            $('.password-strength__bar--3').removeClass('active');
            $('.password-strength__bar--4').removeClass('active');
            $('.password-strength__bar--5').removeClass('active');
        } else if (len > 4 && len <= 6) {
            $('.password-strength__bar--2').addClass('active');
            $('.password-strength__bar--3').removeClass('active');
            $('.password-strength__bar--4').removeClass('active');
            $('.password-strength__bar--4').removeClass('active');
        } else if (len > 6 && len <= 8) {
            $('.password-strength__bar--3').addClass('active');
            $('.password-strength__bar--4').removeClass('active');
            $('.password-strength__bar--5').removeClass('active');
        } else if (len > 8 && len <= 10) {
            $('.password-strength__bar--4').addClass('active');
            $('.password-strength__bar--5').removeClass('active');
        } else {
            $('.password-strength__bar').each(function() {
                $(this).addClass('active');
            });
        } 
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});