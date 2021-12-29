export function localAccount() {
    // get the text
    var continueWithoutAccount = $('.js-continue-without-account');
    var forMyself = $('.js-for-myself');
    var forAnother = $('.js-for-another');

    continueWithoutAccount.click(function() {
        // set the item in localStorage
        localStorage.setItem('continueWithoutAccount', true);

        // alert the value to check if we got it
        console.log(localStorage.getItem('continueWithoutAccount'));
    });


    forMyself.click(function() {
        // set the item in localStorage
        localStorage.setItem('forWho', 'myself');

        // alert the value to check if we got it
        console.log('for who?', localStorage.getItem('forWho'));
    });

    forAnother.click(function() {
        // set the item in localStorage
        localStorage.setItem('forWho', 'another');

        // alert the value to check if we got it
        console.log('for who?', localStorage.getItem('forWho'));
    });



    $('#name').on('change', function() {
        localStorage.setItem('name', $(this).val());
        console.log($(this).val());
    });

    $('#nickname').on('change', function() {
        localStorage.setItem('nickname', $(this).val());
        console.log($(this).val());
    });

    $('#age').on('change', function() {
        localStorage.setItem('age', $(this).val());
        console.log($(this).val());
    });
    
    $('#amount').on('change', function() {
        localStorage.setItem('amount', $(this).val());
        console.log($(this).val());
    });



    
    if ( localStorage.getItem('continueWithoutAccount') != null ) {
        console.log('continue without account', localStorage.getItem('continueWithoutAccount'));
    }

    if ( localStorage.getItem('forWho') != null ) {
        console.log('for who?', localStorage.getItem('forWho'));
    }

    if ( localStorage.getItem('name') != null ) {
        console.log('name', localStorage.getItem('name'));
        $('#name').val(localStorage.getItem('name'));
    }

    if ( localStorage.getItem('nickname') != null ) {
        console.log('nickname', localStorage.getItem('nickname'));
        $('#nickname').val(localStorage.getItem('nickname'));
    }

    if ( localStorage.getItem('age') != null ) {
        console.log('age', localStorage.getItem('age'));
        $('#age').val(localStorage.getItem('age'));
    }

    if ( localStorage.getItem('amount') != null ) {
        console.log('amount', localStorage.getItem('amount'));
        $('#amount').val(localStorage.getItem('amount'));
    }

    


}