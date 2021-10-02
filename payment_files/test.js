discount35()
discount50()

timerForChanging = 2000;

function discount35() {
    var startPrice = $('[data-action$="select3Month"]').find('.tariff-card-price-cost').text().replace('R$', '').replace('.', '');
    var startFullPrice = $('[data-action$="select3Month"]').find('.tariff-card-bottom-price').text().replace('R$', '').replace('.', '');

    var firstDiscount = Math.round(startPrice - (startPrice / 100 * 25));
    var secondDiscount = Math.round(startPrice - (startPrice / 100 * 50));

    setTimeout(() => {
        var discount_35_first_interval = timerForChanging / (startPrice / 100 * 25)

        var myinterval = setInterval(() => {
            if (startPrice == firstDiscount) {

                discount35Second()
                clearInterval(myinterval);
            }
            if (startPrice < 1000) {
                startPrice = startPrice - 1;
                var finalText = 'R$' + startPrice
                $('[data-action$="select3Month"]').find('.tariff-card-price-cost').text(finalText.toString().replace(/(..)$/, ".$1"))
            } else {
                startPrice = startPrice - 1;
                var finalText = 'R$' + startPrice
                $('[data-action$="select3Month"]').find('.tariff-card-price-cost').text(finalText.toString().replace(/(..)$/, ".$1"))
            }

        }, discount_35_first_interval);
    }, 500);

    function discount35Second() {
        setTimeout(() => {
            var discount_35_second_interval = timerForChanging / (startPrice / 100 * 50)

            var myinterval2 = setInterval(() => {

                startPrice = startPrice - 2;
                var finalText = 'R$' + startPrice;
                $('[data-action$="select3Month"]').find('.tariff-card-price-cost').text(finalText.toString().replace(/(..)$/, ".$1"))

                if (startPrice == secondDiscount) {

                    clearInterval(myinterval2);
                }
            }, discount_35_second_interval);
        }, 1000);
    }
}
discount35full()

function discount35full() {
    var startFullPrice = $('[data-action$="select3Month"]').find('.tariff-card-bottom-price').text().replace('R$', '').replace('.', '');

    var firstDiscount = Math.round(startFullPrice - (startFullPrice / 100 * 25));
    var secondDiscount = Math.round(startFullPrice - (startFullPrice / 100 * 50));

    setTimeout(() => {
        var discount_35_first_interval_full = timerForChanging / (startFullPrice / 100 * 25)

        var myinterval_full = setInterval(() => {

            if (startFullPrice < firstDiscount) {

                discount35Secondfull()
                clearInterval(myinterval_full);
            }
            if (startFullPrice < 1000) {
                startFullPrice = startFullPrice - 12;
                var finalText = 'R$' + startFullPrice
                $('[data-action$="select3Month"]').find('.tariff-card-bottom-price').text(finalText.toString().replace(/(..)$/, ".$1"))
            } else {
                startFullPrice = startFullPrice - 12;
                var finalText = 'R$' + startFullPrice
                $('[data-action$="select3Month"]').find('.tariff-card-bottom-price').text(finalText.toString().replace(/(..)$/, ".$1"))
            }

        }, discount_35_first_interval_full);
    }, 500);

    function discount35Secondfull() {
        setTimeout(() => {
            var discount_35_second_interval_full = timerForChanging / (startFullPrice / 100 * 50)


            var myinterval2 = setInterval(() => {

                startFullPrice = startFullPrice - 18;
                var finalText = 'R$' + startFullPrice;
                $('[data-action$="select3Month"]').find('.tariff-card-bottom-price').text(finalText.toString().replace(/(..)$/, ".$1"))

                if (startFullPrice < secondDiscount) {

                    clearInterval(myinterval2);
                }
            }, discount_35_second_interval_full);
        }, 1000);
    }
}

function discount50() {
    var startPrice = $('[data-action$="select6Month"]').find('.tariff-card-price-cost').text().replace('R$', '').replace('.', '');
    var startFullPrice = $('[data-action$="select6Month"]').find('.tariff-card-bottom-price').text().replace('R$', '').replace('.', '');

    var firstDiscount = Math.round(startPrice - (startPrice / 100 * 25));
    var secondDiscount = Math.round(startPrice - (startPrice / 100 * 50));

    setTimeout(() => {
        var discount_50_first_interval = timerForChanging / (startPrice / 100 * 25)

        var myinterval = setInterval(() => {
            if (startPrice == firstDiscount) {

                discount50Second()
                clearInterval(myinterval);
            }
            if (startPrice < 1000) {
                startPrice = startPrice - 1;
                var finalText = 'R$' + startPrice
                $('[data-action$="select6Month"]').find('.tariff-card-price-cost').text(finalText.toString().replace(/(..)$/, ".$1"))
            } else {
                startPrice = startPrice - 1;
                var finalText = 'R$' + startPrice
                $('[data-action$="select6Month"]').find('.tariff-card-price-cost').text(finalText.toString().replace(/(..)$/, ".$1"))
            }

        }, discount_50_first_interval);
    }, 500);

    function discount50Second() {
        setTimeout(() => {
            var discount_50_second_interval = timerForChanging / (startPrice / 100 * 35)

            var myinterval2 = setInterval(() => {

                startPrice = startPrice - 1;
                var finalText = 'R$' + startPrice;
                $('[data-action$="select6Month"]').find('.tariff-card-price-cost').text(finalText.toString().replace(/(..)$/, ".$1"))

                if (startPrice == secondDiscount) {

                    clearInterval(myinterval2);
                }
            }, discount_50_second_interval);
        }, 1000);
    }
}
discount50full()

function discount50full() {
    var startFullPrice = $('[data-action$="select6Month"]').find('.tariff-card-bottom-price').text().replace('R$', '').replace(',', '');

    var firstDiscount = Math.round(startFullPrice - (startFullPrice / 100 * 25));
    var secondDiscount = Math.round(startFullPrice - (startFullPrice / 100 * 50));

    setTimeout(() => {
        var discount_50_first_interval_full = timerForChanging / (startFullPrice / 100 * 25)

        var myinterval_full = setInterval(() => {

            if (startFullPrice < firstDiscount) {

                discount50Secondfull()
                clearInterval(myinterval_full);
            }
            if (startFullPrice < 1000) {
                startFullPrice = startFullPrice - 20;
                var finalText = 'R$' + startFullPrice
                $('[data-action$="select6Month"]').find('.tariff-card-bottom-price').text(finalText.toString().replace(/(..)$/, ".$1"))
            } else {
                startFullPrice = startFullPrice - 20;
                var finalText = 'R$' + startFullPrice
                $('[data-action$="select6Month"]').find('.tariff-card-bottom-price').text(finalText.toString().replace(/(..)$/, ".$1"))
            }

        }, discount_50_first_interval_full);
    }, 500);

    function discount50Secondfull() {
        setTimeout(() => {
            var discount_50_second_interval_full = timerForChanging / (startFullPrice / 100 * 35)


            var myinterval2 = setInterval(() => {

                startFullPrice = startFullPrice - 30;
                var finalText = 'R$' + startFullPrice;
                $('[data-action$="select6Month"]').find('.tariff-card-bottom-price').text(finalText.toString().replace(/(..)$/, ".$1"))

                if (startFullPrice < secondDiscount) {

                    setTimeout(() => {
                        discountPopupStart()
                    }, 500);

                    clearInterval(myinterval2);
                }
            }, discount_50_second_interval_full);
        }, 1000);
    }
}
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