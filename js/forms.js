export function glasses() {
    var amount = $('#amount');
    var limit = $('#limit');

    $('.minus').click(function() {
        var calc = +amount.val() - 1;
        $("#amount").val(calc);
    });

    

    amount.val().change(function() {
        if ( amount.val() <= limit.val() ) {

            console.log('amount is 8 or below');

            $('.plus').click(function() {
                var calc = +amount.val() + 1;
                $("#amount").val(calc);
            });
        } else {
            console.log('amount is above 8');
        }
    }



    // $('.plus').bind('click', {increment: 1}, incrementText);
    // $('.minus').bind('click', {increment: -1}, incrementText);


    // $('.plus, .minus').on("click", function() {
    //     console.log(valueElement.text());
    //     console.log('limiet', limit);

    //     if ( valueElement.text() >= limit ) {
    //         $('.plus').bind('click', {
    //             increment: 0
    //         }, incrementText);
    //     } else {
    //         $('.plus').bind('click', {
    //             increment: 1
    //         }, incrementText);
    //     }
    // });







        // value (forms)
    // function incrementValue(e){
    //     valueElement.val(Math.max(parseInt(valueElement.val()) + e.data.increment, 0));
    //     return false;
    // }

    // $('.plus').bind('click', {increment: 1}, incrementValue);
    // $('.minus').bind('click', {increment: -1}, incrementValue);

    
    // // just text (no form)
    // function incrementText(e){
    //     valueElement.text(Math.max(parseInt(valueElement.text()) + e.data.increment, 0));
    //     return false;
    // }
}