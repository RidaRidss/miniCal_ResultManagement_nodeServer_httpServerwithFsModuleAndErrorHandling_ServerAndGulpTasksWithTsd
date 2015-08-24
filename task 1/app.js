/**
 * Created by Rida on 8/24/2015.
 */
var num1;
var num2;
var result;
function submit_Operation_plus() {
    num1 = document.getElementById('number1')['value'];
    num2 = document.getElementById('number2')['value'];
    result = num1 + num2;
    alert('your ist entered digit : ' + num1 + '\n \n your 2nd entered digit :' + num2 + " \n \n you have pressed button for operation : plus");
}
function submit_Operation_minus() {
    num1 = document.getElementById('number1')['value'];
    num2 = document.getElementById('number2')['value'];
    result = num1 - num2;
    alert('your ist entered digit : ' + num1 + '\n \n your 2nd entered digit :' + num2 + "\n \n you have pressed button for operation : minus");
}
function submit_Operation_multiply() {
    num1 = document.getElementById('number1')['value'];
    num2 = document.getElementById('number2')['value'];
    result = num1 * num2;
    alert('your ist entered digit : ' + num1 + '\n \n your 2nd entered digit :' + num2 + "\n \n you have pressed button for operation : multiply");
}
function submit_Operation_divide() {
    num1 = document.getElementById('number1')['value'];
    num2 = document.getElementById('number2')['value'];
    result = num1 / num2;
    alert('your ist entered digit : ' + num1 + '\n \n your 2nd entered digit :' + num2 + "\n \n you have pressed button for operation : divide");
}
