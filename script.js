//operators
var operator;
function chkop(obj){
    operator=obj.value;
}
function calc(){
    if(operator=='+'){
        addition();
    }
    else if(operator=='-'){
        subtraction();
    }
    else if(operator=='*'){
        multiply();
    }
    else if(operator=='/'){
        divide();
    }
    else{
        alert("error");
    }
    
}

//take value









//calcutions
function addition(){
    let v1=document.getElementById("val1").value;
    let v2=document.getElementById("val2").value;
    let sum=parseInt(v1)+parseInt(v2);
    document.getElementById("valres").value=sum;
}
function subtraction(){
    let v1=document.getElementById("val1").value;
    let v2=document.getElementById("val2").value;
    let sub=parseInt(v1)-parseInt(v2);
    document.getElementById("valres").value=sub;
}
function multiply(){
    let v1=document.getElementById("val1").value;
    let v2=document.getElementById("val2").value;
    let mul=parseInt(v1)*parseInt(v2);
    document.getElementById("valres").value=mul;
}
function divide(){
    let v1=document.getElementById("val1").value;
    let v2=document.getElementById("val2").value;
    let div=parseInt(v1)/parseInt(v2);
    document.getElementById("valres").value=div;
}
