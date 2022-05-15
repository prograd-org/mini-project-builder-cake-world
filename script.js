var layer=0;
var layer1=document.getElementById("layer1");
var layer2=document.getElementById("layer2");
var layer3=document.getElementById("layer3");
var layer4=document.getElementById("layer4");
var layer5=document.getElementById("layer5");
var bill=0;
var item1=0;
var item5=0;
var item4=0;
var item3=0;
var item2=0;
var candle=document.getElementById("candle");
var c1=document.getElementById("item1");
var c2=document.getElementById("item2");
var c3=document.getElementById("item3");
var c4=document.getElementById("item4");
var c5=document.getElementById("item5");
function Chocolate(){
    bill+=300;
    item1+=300;
    c1.innerHTML="chocolate-----"+item1;
    layer++;
    switch(layer){
        case 1:
            layer1.style.visibility="visible";
            layer1.style.background="coral";
            break;
        case 2:
            layer2.style.visibility="visible";
            layer2.style.background="brown";
            break;
        case 3:
            layer3.style.visibility="visible";
            layer3.style.background="yellow";
            break;
        case 4:
            layer4.style.visibility="visible";
            layer4.style.background="blue";
            break;
        case 5:
            layer5.style.visibility="visible";
            layer5.style.background="white";
            candle.style.visibility="visible";
            break;
        default:
            bill-=300;
            alert("sorry... max 5 layers are allowed");


    }
    console.log(bill);
}
function Strawberry(){
    bill+=100;
    item2+=100;
    c2.innerHTML="Strawberry-----"+item2;
    layer++;
    switch(layer){
        case 1:
            layer1.style.visibility="visible";
            layer1.style.background="coral";
            break;
        case 2:
            layer2.style.visibility="visible";
            layer2.style.background="brown";
            break;
        case 3:
            layer3.style.visibility="visible";
            layer3.style.background="yellow";
            break;
        case 4:
            layer4.style.visibility="visible";
            layer4.style.background="blue";
            break;
        case 5:
            layer5.style.visibility="visible";
            layer5.style.background="white";
            candle.style.visibility="visible";
            break;
        default:
            bill-=100;
            alert("sorry... max 5 layers are allowed");


    }
    console.log(bill);
    
}

function Vannila(){
    bill+=250;
    item4+=250;
    c4.innerHTML="vannila-----"+item4;
    layer++;
    switch(layer){
        case 1:
            layer1.style.visibility="visible";
            layer1.style.background="coral";
            break;
        case 2:
            layer2.style.visibility="visible";
            layer2.style.background="brown";
            break;
        case 3:
            layer3.style.visibility="visible";
            layer3.style.background="yellow";
            break;
        case 4:
            layer4.style.visibility="visible";
            layer4.style.background="blue";
            break;
        case 5:
            layer5.style.visibility="visible";
            layer5.style.background="white";
            candle.style.visibility="visible";
            break;
        default:
            bill-=250;
            alert("sorry... max 5 layers are allowed");


    }
    console.log(bill);
    
}
function Redvelvet(){
    bill+=350;
    item5+=350;
    c5.innerHTML="Redvelvet-----"+item5;
    layer++;
    switch(layer){
        case 1:
            layer1.style.visibility="visible";
            layer1.style.background="coral";
            break;
        case 2:
            layer2.style.visibility="visible";
            layer2.style.background="brown";
            break;
        case 3:
            layer3.style.visibility="visible";
            layer3.style.background="yellow";
            break;
        case 4:
            layer4.style.visibility="visible";
            layer4.style.background="blue";
            break;
        case 5:
            layer5.style.visibility="visible";
            layer5.style.background="white";
            candle.style.visibility="visible";
            break;
        default:
            bill-=200;
            alert("sorry... max 5 layers are allowed");


    }
    console.log(bill);
    
}

function Butterscotch(){
    bill+=200;
    item3+=200;
    c3.innerHTML="Chocolate-----"+item3;
    layer++;
    switch(layer){
        case 1:
            layer1.style.visibility="visible";
            layer1.style.background="coral";
            break;
        case 2:
            layer2.style.visibility="visible";
            layer2.style.background="brown";
            break;
        case 3:
            layer3.style.visibility="visible";
            layer3.style.background="yellow";
            break;
        case 4:
            layer4.style.visibility="visible";
            layer4.style.background="blue";
            break;
        case 5:
            layer5.style.visibility="visible";
            layer5.style.background="white";
            candle.style.visibility="visible";
            break;
        default:
            bill-=200;
            alert("sorry... max 5 layers are allowed");


    }
    console.log(bill);
    
}
function  Buy(){
    candle.style.visibility="visible";
    if(layer==1){
        candle.style.top="78%";
    }
    else if(layer==2){
        candle.style.top="45%";
    }
    else if(layer==3){
        candle.style.top="15%";
    }
    else if(layer==4){
        candle.style.top="-15%"
    }
    else{
        candle.style.visibility="visible";
    }
    var total=document.getElementById('total');
    total.innerHTML="Total-------"+bill
}
