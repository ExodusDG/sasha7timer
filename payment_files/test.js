discount35()

function discount35() {
    var startPrice = $('[data-action$="select3Month"]').find('.tariff-card-price-cost').text().replace('R$', '').replace('.', '');
    var startFullPrice = $('[data-action$="select3Month"]').find('.tariff-card-bottom-price').text().replace('R$', '').replace('.', '');

    var firstDiscount = Math.round(startPrice - (startPrice / 100 * 17.5));
    var secondDiscount = Math.round(startPrice - (startPrice / 100 * 35));

    setTimeout(() => {

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



        }, 5);
    }, 500);

    function discount35Second() {
        setTimeout(() => {
            var myinterval2 = setInterval(() => {
                console.log(startPrice + ' = ' + secondDiscount)

                startPrice = startPrice - 1;
                var finalText = 'R$' + startPrice;
                $('[data-action$="select3Month"]').find('.tariff-card-price-cost').text(finalText.toString().replace(/(..)$/, ".$1"))

                if (startPrice == secondDiscount) {
                    console.log('SECOND DONE')
                    clearInterval(myinterval2);
                }
            }, 7);
        }, 1000);
    }
}