function Solve(val) {
    var v = document.getElementById('display');
    v.value += val;
 }

 function Clear(){
    var c=document.getElementById('display');
    c.value = '';
 }

 
    function Result() {
        var num1 = document.getElementById('display').value;
        var num2 = eval(num1);
        document.getElementById('display').value = num2;
 }

 function Back() {
    var ev = document.getElementById('display');
    ev.value = ev.value.slice(0,-1);
 }