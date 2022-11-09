const clear= document.querySelector(".btn-c");
const del= document.querySelector(".btn-la");
const divide= document.querySelector(".divide");
const multiply= document.querySelector(".multiply");
const add= document.querySelector(".add");
const sub= document.querySelector(".sub");
const zero= document.querySelector(".zero");
const one= document.querySelector(".one");
const two= document.querySelector(".two");
const three= document.querySelector(".three");
const four= document.querySelector(".four");
const five= document.querySelector(".five");
const six= document.querySelector(".six");
const seven= document.querySelector(".seven");
const eight= document.querySelector(".eight");
const nine= document.querySelector(".nine");
const equal= document.querySelector(".equal");

const screen= document.querySelector(".input-text");
let op;
let first=0;
let result=0;
del.addEventListener("click", function(){
    result = parseInt(result/10);
    screen.innerText= result;
});

clear.addEventListener("click", function(){
    result = (result*10)*0;
    screen.innerText= result;
});

zero.addEventListener("click", function(){
    result = (result*10)+0;
    screen.innerText= result;
});

one.addEventListener("click", function(){
    result = (result*10)+1;
    screen.innerText= result;
});
two.addEventListener("click", function(){
    result = (result*10)+2;
    screen.innerText= result;
});
three.addEventListener("click", function(){
    result = (result*10)+3;
    screen.innerText= result;
});
four.addEventListener("click", function(){
    result = (result*10)+4;
    screen.innerText= result;
});
five.addEventListener("click", function(){
    result = (result*10)+5;
    screen.innerText= result;
});
six.addEventListener("click", function(){
    result = (result*10)+6;
    screen.innerText= result;
});
seven.addEventListener("click", function(){
    result = (result*10)+7;
    screen.innerText= result;
});
eight.addEventListener("click", function(){
    result = (result*10)+8;
    screen.innerText= result;
});
nine.addEventListener("click", function(){
    result = (result*10)+9;
    screen.innerText= result;
});

divide.addEventListener("click", function(){
    op="/";
    first=result;
    result = result*0;
    screen.innerText= result;
});
multiply.addEventListener("click", function(){
    op="X";
    first=result;
    result = result*0;
    screen.innerText= result;
});
add.addEventListener("click", function(){
    op="+";
    first=result;
    result = result*0;
    screen.innerText= result;
});
sub.addEventListener("click", function(){
    op="-";
    first=result;
    result = result*0;
    screen.innerText= result;
});
equal.addEventListener("click", function(){
    let end= result;
    if(op=="/"){
        result=first/end;        
    }
    else if(op=="X"){
        result=first*end;        
    }
    else if(op=="+"){
        result=first+end;        
    }
    if(op=="-"){
        result=first-end;        
    }
    op="";
    screen.innerText= result;
});

















