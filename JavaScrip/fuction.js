let variableGlobal= 5;
function mifuncion1(){
    let variableLocal="El valor es: ";
    alert(variableLocal + variableGlobal)
}
mifuncion1();
function mifuncion2(){
    let variableLocal=7;
    alert("Nuevo valor; " + (variableLocal-variableGlobal));
}
mifuncion2();