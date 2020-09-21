function insert(num) {
    document.form.display.value = document.form.display.value+num 
}
function insertOp(num) {
    document.form.display.value = document.form.display.value+num
}
function equal(){
    var exp = document.form.display.value;
    if(exp){
        document.form.display.value = eval(exp)
    }
}
function cleam(){
    document.form.display.value ="";
}