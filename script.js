/*Fill your code */
var layer = 0;
var total = 0;
var choctotal=0;
var strawtotal=0;
var buttertotal=0;
var vannilatotal=0;
var redveltotal=0;
var layer1  = document.getElementById('layer1');
var layer2  = document.getElementById('layer2');
var layer3  = document.getElementById('layer3');
var layer4  = document.getElementById('layer4');
var layer5  = document.getElementById('layer5');
var candle  = document.getElementById('candle');
var chocbtn = document.getElementById('Chocolatebtn');
var strawbtn = document.getElementById('Strawberrybtn');
var butterbtn = document.getElementById('Butterscotchbtn');
var vannilabtn = document.getElementById('Vannilabtn');
var redvelbtn = document.getElementById('Redvelvetbtn');
var buybttn = document.getElementById('buybtn');

function addChocolate(){  
    layer++;
    total += 300;
    choctotal+=300;
    switch(layer){
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = 'rgb(65,14,14)';
            candle.style.visibility = 'hidden';
            candle.style.top="-80px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            chocbtn.style.top="40px";
            chocbtn.style.height="45px";
            chocbtn.style.color='rgb(65,14,14)'; 
        break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = 'rgb(65,14,14)';
            candle.style.visibility = 'hidden';
            candle.style.top="-120px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            chocbtn.style.top="40px";
            chocbtn.style.height="45px";
            chocbtn.style.color='rgb(65,14,14)'; 
        break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = 'rgb(65,14,14)';
            candle.style.visibility = 'hidden';
            candle.style.top="-160px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            chocbtn.style.top="40px";
            chocbtn.style.height="45px";
            chocbtn.style.color='rgb(65,14,14)'; 
        break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = 'rgb(65,14,14)';
            candle.style.visibility = 'hidden';
            candle.style.top="-200px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            chocbtn.style.top="40px";
            chocbtn.style.height="45px";
            chocbtn.style.color='rgb(65,14,14)'; 
        break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = 'rgb(65,14,14)';
            candle.style.visibility = 'hidden';
            candle.style.top="-240px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            chocbtn.style.top="40px";
            chocbtn.style.height="45px";
            chocbtn.style.color='rgb(65,14,14)'; 
        break;
        default:
            total -= 300;
            choctotal-=300;  
            alert("Sorry....Maximum only 5 layers can be added!")  
    }
    if(layer<=5)
    document.getElementById('chocolateBill').innerHTML = 'Chocolate -----------'+choctotal;
}

function addStrawberry(){
    layer++;
    total += 100;
    strawtotal+=100;
    switch(layer){
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = 'rgb(240,75,103)';
            candle.style.visibility = 'hidden';
            candle.style.top="-80px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            strawbtn.style.top="40px";
            strawbtn.style.height="45px";
            strawbtn.style.color='rgb(240,75,103)';
        break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = 'rgb(240,75,103)';
            candle.style.visibility = 'hidden';
            candle.style.top="-120px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            strawbtn.style.top="40px";
            strawbtn.style.height="45px";
            strawbtn.style.color='rgb(240,75,103)';
        break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = 'rgb(240,75,103)';
            candle.style.visibility = 'hidden';
            candle.style.top="-160px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            strawbtn.style.top="40px";
            strawbtn.style.height="45px";
            strawbtn.style.color='rgb(240,75,103)';
        break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = 'rgb(240,75,103)';
            candle.style.visibility = 'hidden';
            candle.style.top="-200px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            strawbtn.style.top="40px";
            strawbtn.style.height="45px";
            strawbtn.style.color='rgb(240,75,103)';
        break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = 'rgb(240,75,103)';
            candle.style.visibility = 'hidden';
            candle.style.top="-240px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            strawbtn.style.top="40px";
            strawbtn.style.height="45px";
            strawbtn.style.color='rgb(240,75,103)';
        break;
        default:
            total -= 100;
            strawtotal-=100;
            alert("Sorry....Maximum only 5 layers can be added!")
    }
    if(layer<=5)
    document.getElementById('strawberryBill').innerHTML = 'Strawberry -------- '+strawtotal;
}

function addButterscotch(){
    layer++;
    total += 200;
    buttertotal+=200;
    switch(layer){
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = 'rgb(255, 242, 128)';
            candle.style.top="-80px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            butterbtn.style.top="40px";
            butterbtn.style.height="45px";
            butterbtn.style.color='rgb(255, 242, 128)'
        break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = 'rgb(255, 242, 128)';
            candle.style.top="-120px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            butterbtn.style.top="40px";
            butterbtn.style.height="45px";
            butterbtn.style.color='rgb(255, 242, 128)'
        break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = 'rgb(255, 242, 128)';
            candle.style.visibility = 'hidden';
            candle.style.top="-160px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            butterbtn.style.top="40px";
            butterbtn.style.height="45px";
            butterbtn.style.color='rgb(255, 242, 128)'
        break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = 'rgb(255, 242, 128)';
            candle.style.visibility = 'hidden';
            candle.style.top="-200px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            butterbtn.style.top="40px";
            butterbtn.style.height="45px";
            butterbtn.style.color='rgb(255, 242, 128)'
        break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = 'rgb(255, 242, 128)';
            candle.style.visibility = 'hidden';
            candle.style.top="-240px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            butterbtn.style.top="40px";
            butterbtn.style.height="45px";
            butterbtn.style.color='rgb(255, 242, 128)'
        break;
        default:
            total -= 200;
            buttertotal-=200;
            alert("Sorry....Maximum only 5 layers can be added!")
    }
    if(layer<=5)
    document.getElementById('butterscotchBill').innerHTML = 'Butterscotch ----- '+buttertotal;
}

function addVannila(){
    layer++;
    total += 250;
    vannilatotal+=250;
    switch(layer){
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = 'white';
            candle.style.visibility = 'hidden';
            candle.style.top="-80px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            vannilabtn.style.top="40px";
            vannilabtn.style.height="45px";
            vannilabtn.style.color='white';
        break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = 'white';
            candle.style.visibility = 'hidden';
            candle.style.top="-120px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            vannilabtn.style.top="40px";
            vannilabtn.style.height="45px";
            vannilabtn.style.color='white';
        break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = 'white';
            candle.style.visibility = 'hidden';
            candle.style.top="-160px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            vannilabtn.style.top="40px";
            vannilabtn.style.height="45px";
            vannilabtn.style.color='white';
        break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = 'white';
            candle.style.visibility = 'hidden';
            candle.style.top="-200px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            vannilabtn.style.top="40px";
            vannilabtn.style.height="45px";
            vannilabtn.style.color='white';
        break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = 'white';
            candle.style.visibility = 'hidden';
            candle.style.top="-240px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            vannilabtn.style.top="40px";
            vannilabtn.style.height="45px";
            vannilabtn.style.color='white';
        break;
        default:
            total -= 250;
            vannilatotal-=250;
            alert("Sorry....Maximum only 5 layers can be added!")
    }
    if(layer<=5)
    document.getElementById('vannilaBill').innerHTML = 'Vannila ---------------- '+vannilatotal;
}

function addRedvelvet(){
    layer++;
    total += 350;
    redveltotal+=350;
    switch(layer){
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = 'rgb(243, 55, 55)';
            candle.style.visibility = 'hidden';
            candle.style.top="-80px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            redvelbtn.style.top="40px";
            redvelbtn.style.height="45px";
            redvelbtn.style.color='rgb(243, 55, 55)';
        break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = 'rgb(243, 55, 55)';
            candle.style.visibility = 'hidden';
            candle.style.top="-120px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            redvelbtn.style.top="40px";
            redvelbtn.style.height="45px";
            redvelbtn.style.color='rgb(243, 55, 55)';
        break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = 'rgb(243, 55, 55)';
            candle.style.visibility = 'hidden';
            candle.style.top="-160px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            redvelbtn.style.top="40px";
            redvelbtn.style.height="45px";
            redvelbtn.style.color='rgb(243, 55, 55)';
        break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = 'rgb(243, 55, 55)';
            candle.style.visibility = 'hidden';
            candle.style.top="-200px";
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            redvelbtn.style.top="40px";
            redvelbtn.style.height="45px";
            redvelbtn.style.color='rgb(243, 55, 55)';
        break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = 'rgb(243, 55, 55)';
            candle.style.visibility = 'hidden';
            candle.style.top="-240px";+total
            document.getElementById('total').innerHTML = ' ';
            buybttn.value='Buy';
            redvelbtn.style.top="40px";
            redvelbtn.style.height="45px";
            redvelbtn.style.color='rgb(243, 55, 55)';
        break;
        default:
            total -= 350;
            redveltotal-=350;
            alert("Sorry....Maximum only 5 layers can be added!")
    }
    if(layer<=5)
    document.getElementById('redvelvetBill').innerHTML = 'Redvelvet ----------- '+redveltotal;
}

function buy(){
    candle.style.visibility = 'visible';
    document.getElementById('total').innerHTML = 'Total ----------- '+total;
    buybttn.value='PAY: '+total;
}



