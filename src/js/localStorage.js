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




    
    if ( localStorage.getItem('continueWithoutAccount') != null ) {
        console.log('continue without account', localStorage.getItem('continueWithoutAccount'));
    }

    if ( localStorage.getItem('forWho') != null ) {
        console.log('for who?', localStorage.getItem('forWho'));
    }

    


}