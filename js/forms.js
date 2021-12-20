export function glasses() {
    var valueElement = $('#amount');
    function incrementValue(e){
        valueElement.val(Math.max(parseInt(valueElement.val()) + e.data.increment, 0));
        return false;
    }

    $('.plus').bind('click', {increment: 1}, incrementValue);

    $('.minus').bind('click', {increment: -1}, incrementValue);
}