/*Fill your code*/
var layer = 0;
var layer1  = document.getElementById('layer1');
var layer2  = document.getElementById('layer2');
var layer3  = document.getElementById('layer3');
var layer4  = document.getElementById('layer4');
var layer5  = document.getElementById('layer5');
var candle  = document.getElementById('candle');
var total = 0;
var chocoprice = 0; 
var strawberryprice = 0;
var vannilaprice = 0;
var butterscotchprice = 0;
var redvelvetprice = 0;


// setting function for Chocolate button
function addChocolate()
{
    
   chocoprice = chocoprice+300;
   
   document.getElementById("chocolate").innerHTML="chocolate---------"+chocoprice;
   layer++
   total=total+300;
   document.getElementById("total").innerHTML="Total -------------- "+total;
   console.log("button working");
if(layer==1){
    layer1.style.visibility = 'visible';
    layer1.style.background = 'rgb(250, 118, 23)';
}
if(layer==2){
    layer2.style.visibility = 'visible';
    layer2.style.background = 'rgb(250, 118, 23)';
}
if(layer==3){
    layer3.style.visibility = 'visible';
    layer3.style.background = 'rgb(250, 118, 23)';
}
if(layer==4){
    layer4.style.visibility = 'visible';
    layer4.style.background = 'rgb(250, 118, 23)';
}
if(layer==5){
    layer5.style.visibility = 'visible';
    layer5.style.background = 'rgb(250, 118, 23)';
    candle.style.visibility = 'visible';
}
if(layer>5){
    
    alert("Can't able to add anymore cake layers");
    window.location.reload();
}
}

// setting function for Strawberry button
function addStrawberry()
{
   strawberryprice=strawberryprice+100;
    document.getElementById("strawberry").innerHTML="Strawberry---------"+strawberryprice;
    layer++;
    total=total+100;
    document.getElementById("total").innerHTML="Total -------------- "+total;
    if(layer==1){
        layer1.style.visibility = 'visible';
        layer1.style.background = 'rgb(247, 102, 126)';
    }
    if(layer==2){
        layer2.style.visibility = 'visible';
        layer2.style.background = 'rgb(247, 102, 126)';
    }
    if(layer==3){
        layer3.style.visibility = 'visible';
        layer3.style.background = 'rgb(247, 102, 126)';
    }
    if(layer==4){
        layer4.style.visibility = 'visible';
        layer4.style.background = 'rgb(247, 102, 126)';
    }
    if(layer==5){
        layer5.style.visibility = 'visible';
        layer5.style.background = 'rgb(247, 102, 126)';
        candle.style.visibility = 'visible';
    }
    if(layer>5){
        alert("Can't able to add anymore cake layers");
        window.location.reload();
       
    }

}

// setting function for Butterscotch button
 function addButterscotch() 
 {
     butterscotchprice = butterscotchprice+200;
     document.getElementById("butterscotch").innerHTML="Butterscotch---------"+butterscotchprice;
     layer++;
     total=total+200;
     document.getElementById("total").innerHTML="Total -------------- "+total;
    if(layer==1){
        layer1.style.visibility = 'visible';
        layer1.style.background = 'rgb(250, 250, 136)';
    }
    if(layer==2){
        layer2.style.visibility = 'visible';
        layer2.style.background = 'rgb(250, 250, 136)';
    }
    if(layer==3){
        layer3.style.visibility = 'visible';
        layer3.style.background = 'rgb(250, 250, 136)';
    }
    if(layer==4){
        layer4.style.visibility = 'visible';
        layer4.style.background = 'rgb(250, 250, 136)';
    }
    if(layer==5){
        layer5.style.visibility = 'visible';
        layer5.style.background = 'rgb(250, 250, 136)';
        candle.style.visibility = 'visible';
    }
    if(layer>5){
        
        alert("Can't able to add anymore cake layers");
        window.location.reload(); 
    } 
 }

 // setting function for Vannila button
 function addVannila()
 {
     vannilaprice = vannilaprice+250;
     document.getElementById("vannila").innerHTML="Vannila-------------"+vannilaprice;
     layer++;
     total=total+250;
     document.getElementById("total").innerHTML="Total -------------- "+total;
    if(layer==1){
        layer1.style.visibility = 'visible';
        layer1.style.background = 'white';
    }
    if(layer==2){
        layer2.style.visibility = 'visible';
        layer2.style.background = 'white';
    }
    if(layer==3){
        layer3.style.visibility = 'visible';
        layer3.style.background = 'white';
    }
    if(layer==4){
        layer4.style.visibility = 'visible';
        layer4.style.background = 'white';
    }
    if(layer==5){
        layer5.style.visibility = 'visible';
        layer5.style.background = 'white';
        candle.style.visibility = 'visible';
    }
    if(layer>5){
        
        alert("Can't able to add anymore cake layers");
        window.location.reload();
    }
 }

 // setting function for Redvelvet button
 function addRedvelvet() 
 {
     redvelvetprice = redvelvetprice+350;
     document.getElementById("redvelvet").innerHTML="Redvelvet---------"+redvelvetprice;
     layer++;
     total=total+350;
     document.getElementById("total").innerHTML="Total -------------- "+total;
    if(layer==1){
        layer1.style.visibility = 'visible';
        layer1.style.background = 'rgb(247, 46, 46)';
    }
    if(layer==2){
        layer2.style.visibility = 'visible';
        layer2.style.background = 'rgb(247, 46, 46)';
    }
    if(layer==3){
        layer3.style.visibility = 'visible';
        layer3.style.background = 'rgb(247, 46, 46)';
    }
    if(layer==4){
        layer4.style.visibility = 'visible';
        layer4.style.background = 'rgb(247, 46, 46)';
    }
    if(layer==5){
        layer5.style.visibility = 'visible';
        layer5.style.background = 'rgb(247, 46, 46)';
        candle.style.visibility = 'visible';
    }
    if(layer>5){
        
        alert("Can't able to add anymore cake layers");   
        window.location.reload();
    }
 }

 // setting function for Buy button
 function buy()
 { 
     alert("Your total is "+total);
     alert("Pls confirm your order");
     alert("Your order is ready and will be delivered soon ");
     window.location.reload();
 }