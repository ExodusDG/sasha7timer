$('.slider-carousel').slick({
    autoplay: true,
});

$('.tariff-card').click(function() {
    $('.tariff-card').removeClass('tariff-card-active');
    $('.tariff-card-mounth-count').removeClass('tariff-card-mounth-count-active');
    $('.tariff-card-mounth').removeClass('tariff-card-mounth-active');
    $('.tariff-card-adv').removeClass('tariff-card-adv-active');
    $('.tariff-card-discount').removeClass('card-gradient-discount-active');
    $('.tariff-card-price-cost').removeClass('tariff-card-price-cost-active');
    $('.gradient__line').removeClass('gradient__line_noactive');

    $(this).addClass('tariff-card-active');
    $(this)
        .find('.tariff-card-mounth-count')
        .addClass('tariff-card-mounth-count-active');
    $(this).find('.tariff-card-mounth').addClass('tariff-card-mounth-active');
    $(this).find('.tariff-card-adv').addClass('tariff-card-adv-active');
    $(this)
        .find('.tariff-card-discount')
        .addClass('card-gradient-discount-active');
    $(this)
        .find('.tariff-card-price-cost')
        .addClass('tariff-card-price-cost-active');
    $(this)
        .find('.gradient__line')
        .addClass('gradient__line_noactive');
})

/* PRICE TIMER */

var discountStartTime = 2000;

var animationTime = 2000;

var discount6Price = $('[data-action$="select6Month"]').find('.tariff-card-price-cost').text().replace('R$', '').replace(',', '');
var discount3Price = $('[data-action$="select3Month"]').find('.tariff-card-price-cost').text().replace('R$', '').replace(',', '');
var discount1Price = $('[data-action$="select1Month"]').find('.tariff-card-price-cost').text().replace('R$', '').replace(',', '');

var discount6Full = $('[data-action$="select6Month"]').find('.tariff-card-bottom-price').text().replace('R$', '').replace(',', '');
var discount3Full = $('[data-action$="select3Month"]').find('.tariff-card-bottom-price').text().replace('R$', '').replace(',', '');
var discount1Full = $('[data-action$="select1Month"]').find('.tariff-card-bottom-price').text().replace('R$', '').replace(',', '');

console.log(discount6Price + ' || ' + discount3Price + ' || ' + discount1Price)
console.log(discount6Full + ' || ' + discount3Full + ' || ' + discount1Full)

setTimeout(() => {

    /* 1 CARD SALE PRICE */

    var discount6First = discount6Price * 0.25;
    var discount6FirstTime = animationTime / discount6First;
    var discount6FirstStop = discount6Price - discount6First;


    var discount6Second = discount6Price * 0.5;
    var discount6SecondStop = discount6Price - discount6Second;


    var discount6First = setInterval(() => {
        discount6Price = discount6Price - 1;
        var finalText = 'R$' + discount6Price

        if (discount6Price < discount6FirstStop) {
            console.log('FIRST DONE');

            setTimeout(() => {
                var discount6Second = setInterval(() => {
                    discount6Price = discount6Price - 1;
                    var finalText = 'R$' + discount6Price
                    $('[data-action$="select6Month"]').find('.tariff-card-price-cost').text(finalText)
                    if (discount6Price < discount6SecondStop) {
                        console.log('SECOND DONE')
                        var discount6FullSecond = Math.round(discount6Full * 0.5);

                        $('[data-action$="select6Month"]').find('.tariff-card-bottom-price').text('R$' + discount6FullSecond)

                        setTimeout(() => {
                            discountPopupStart()
                        }, 800);

                        clearInterval(discount6Second);
                    }

                }, discount6FirstTime);
            }, 1000);

            clearInterval(discount6First);
        }
        $('[data-action$="select6Month"]').find('.tariff-card-price-cost').text(finalText)

    }, discount6FirstTime);

    /* 2 CARD SALE PRICE */

    var discount3First = discount3Price * 0.25;
    var discount3FirstTime = animationTime / discount3First;
    var discount3FirstStop = discount3Price - discount3First;


    var discount3Second = discount3Price * 0.5;
    var discount3SecondStop = discount3Price - discount3Second;


    var discount3First = setInterval(() => {
        discount3Price = discount3Price - 1;
        var finalText = 'R$' + discount3Price

        if (discount3Price < discount3FirstStop) {
            console.log('FIRST DONE');

            setTimeout(() => {
                var discount3Second = setInterval(() => {
                    discount3Price = discount3Price - 1;
                    var finalText = 'R$' + discount3Price
                    $('[data-action$="select3Month"]').find('.tariff-card-price-cost').text(finalText)
                    if (discount3Price < discount3SecondStop) {
                        console.log('SECOND DONE')
                        var discount3FullSecond = Math.round(discount3Full * 0.5);

                        $('[data-action$="select3Month"]').find('.tariff-card-bottom-price').text('R$' + discount3FullSecond)


                        clearInterval(discount3Second);
                    }

                }, discount3FirstTime);
            }, 1000);

            clearInterval(discount3First);
        }
        $('[data-action$="select3Month"]').find('.tariff-card-price-cost').text(finalText)

    }, discount3FirstTime);

    /* 3 CARD SALE PRICE */

    var discount1First = discount1Price * 0.25;
    var discount1FirstTime = animationTime / discount1First;
    var discount1FirstStop = discount1Price - discount1First;


    var discount1Second = discount1Price * 0.5;
    var discount1SecondStop = discount1Price - discount1Second;


    var discount1First = setInterval(() => {
        discount1Price = discount1Price - 2;
        var finalText = 'R$' + Math.round(discount1Price, 1)

        if (discount1Price < discount1FirstStop) {
            console.log('FIRST DONE');

            setTimeout(() => {
                var discount1Second = setInterval(() => {
                    discount1Price = discount1Price - 1.5;
                    var finalText = 'R$' + Math.round(discount1Price, 1)
                    $('[data-action$="select1Month"]').find('.tariff-card-price-cost').text(finalText)
                    if (discount1Price < discount1SecondStop) {
                        console.log('SECOND DONE')
                        var discount1FullSecond = Math.round(discount1Full * 0.5);

                        $('[data-action$="select1Month"]').find('.tariff-card-bottom-price').text('R$' + discount1FullSecond)

                        clearInterval(discount1Second);
                    }

                }, discount1FirstTime);
            }, 1300);

            clearInterval(discount1First);
        }
        $('[data-action$="select1Month"]').find('.tariff-card-price-cost').text(finalText)

    }, discount1FirstTime);
}, discountStartTime);



var bodyWidth = $('body').width()

function discountPopupStart() {
    var popupWidth = $('.discount__timer').width();

    $('.discount__timer').css('right', '20px')

    if (bodyWidth < 600) {
        $('.discount__timer').css('right', '2.5vw')
    }

    setTimeout(() => {
        $('.discount__timer').css('right', '-' + popupWidth)
        discountTimerStart()

        function discountTimerStart() {
            setTimeout(() => {

                $('.discount__timer_counter').css('right', '20px')

                if (bodyWidth < 600) {
                    $('.discount__timer_counter').css('right', '2.5vw')
                }

                var timerMTime = $('.discount__minutes').find('.discount__number').text();
                var timerSTime = $('.discount__seconds').find('.discount__number').text();


                var timerTime = timerMTime + timerSTime;

                if (timerTime == 0) {
                    $('.discount__timer_counter').css('right', '-400px')
                }

                setInterval(() => {

                    timerTime = timerTime - 1;
                    var separateM = (timerTime / 100).toString().split('.')[0]
                    $('#min1').text(separateM.toString().substr(0, 1))
                    $('#min2').text(separateM.toString().substr(1, 2))

                    var separateS = (timerTime / 100).toString().split('.')[1]
                    $('#sec1').text(separateS.toString().substr(0, 1))
                    $('#sec2').text(separateS.toString().substr(1, 2))

                    console.log(separateS)

                    if (separateS.toString().substr(1, 2) == '') {
                        $('#sec2').text(0);
                    }

                }, 1000);
            }, 1000);
        }

    }, 1500);
}
/**/