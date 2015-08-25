/**
 * Created by Rida on 8/24/2015.
 */
function submit_Operation_plus() {
    var num1 = Number(document.getElementById('number1')['value']);
    var num2 = Number(document.getElementById('number2')['value']);
    var result = num1 + num2;
    alert('your ist entered digit : ' + num1 + '\n \n your 2nd entered digit :' + num2 + " \n \n your result : " + result);
}
function submit_Operation_minus() {
    var num1 = Number(document.getElementById('number1')['value']);
    var num2 = Number(document.getElementById('number2')['value']);
    var result = num1 - num2;
    alert('your ist entered digit : ' + num1 + '\n \n your 2nd entered digit :' + num2 + "\n \n your result : " + result);
}
function submit_Operation_multiply() {
    var num1 = Number(document.getElementById('number1')['value']);
    var num2 = Number(document.getElementById('number2')['value']);
    var result = num1 * num2;
    alert('your ist entered digit : ' + num1 + '\n \n your 2nd entered digit :' + num2 + "\n \n your result : " + result);
}
function submit_Operation_divide() {
    var num1 = Number(document.getElementById('number1')['value']);
    var num2 = Number(document.getElementById('number2')['value']);
    var result = num1 / num2;
    alert('your ist entered digit : ' + num1 + '\n \n your 2nd entered digit :' + num2 + "\n \n your result : " + result);
}
