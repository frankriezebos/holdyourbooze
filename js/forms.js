export function glasses() {
    var amount = $('#amount');
    var limit = $('#limit');
    
    // if amount is lower than limit, accept plus
    $('.plus').click(function() {
        if ( amount.val() < limit.val() ) {
            console.log('amount is below 8');

            
            var calc = +amount.val() + 1;
            amount.val(calc);

            console.log(amount.val());
        }
    });

    // if amount is 0 or higher, accept minus
    $('.minus').click(function() {
        if ( amount.val() > 0 ) {
            var calc = +amount.val() - 1;
            amount.val(calc);
            console.log(amount.val());
        }
    });


    // if limit has been reached, show check icon
    $('.plus').click(function() {
        if ( amount.val() == limit.val() ) {
            $('.plus, .minus').addClass('hide');
            $('.finished').addClass('show');
        }
    });

}