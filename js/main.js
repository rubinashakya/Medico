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

    $(function () {/*from   w ww .  ja va2 s  . c o  m*/
        var ctx = document.getElementById("doughnutChart").getContext('2d');
        var data = {
            datasets: [{
                data: [30, 30, 20],
                backgroundColor: [
                    '#3056F5',
                    '#29BF12',
                    '#F43460',
                ],
            }],
            labels: [
                'New',
                'Returning',
                'One Time'
            ]
        };
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                responsive: false,
                maintainAspectRatio: false,
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 12
                    }
                }
            }
        });
        var ctx_2 = document.getElementById("barChart").getContext('2d');
        var data_2 = {
            datasets: [{
                backgroundColor: 'rgba(41, 191, 18, 1)',
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 6,
                minBarLength: 6,
                data: [10, 20, 30, 40, 50, 60, 70]
            }],
            labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight'],
        };
        var myBarChart = new Chart(ctx_2, {
            type: 'bar',
            data: data_2,
            options: {
                responsive: false,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    });

});