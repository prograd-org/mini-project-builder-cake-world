let cake_l1 = document.querySelector("#cake-l1")
let cake_l2 = document.querySelector("#cake-l2")
let cake_l3 = document.querySelector("#cake-l3")
let cake_l4 = document.querySelector("#cake-l4")
let cake_l5 = document.querySelector("#cake-l5")
let candle = document.querySelector("#candle")
let layer = 0;
let total = 0;
function addChocolate(){
    var choco = document.querySelector("#p1");
    document.querySelector("#b1").innerHTML = choco.innerText;
   layer++;
   total += 300;
     if(layer == 1){
        cake_l1.style.visibility = "visible";
        cake_l1.style.background = "rgb(250, 118, 23)";
     }
     else{
        return null;
     }
 }
 document.querySelector("#Chocolate-button").addEventListener("click", chocolate);


 function addStrawberry(){
    var straw = document.querySelector("#p2");
    document.querySelector("#b2").innerHTML = straw.innerText;
  layer++;
   total += 100;
      if(layer == 2){
         cake_l2.style.visibility = "visible";
         cake_l2.style.background = "rgb(247, 102, 126)";
      }
      else{
        return null;
      }
 }
 document.querySelector("Strawberry-button").addEventListener("click", strawberry); 


  function addButterscotch(){
    var butter = document.querySelector("#p3");
    document.querySelector("#b3").innerHTML = butter.innerText;
  layer++;
   total += 200;
      if(layer == 3){
         cake_l3.style.visibility = "visible";
         cake_l3.style.background = "rgb(250, 250, 136)";
      }
      else {
        return null;
      }
 }
 document.querySelector("#Butterscotch-button").addEventListener("click", butterscotch);


 function addVannila(){
    var vannila = document.querySelector("#p4");
    document.querySelector("#b4").innerHTML = vannila.innerText;
  layer++;
   total += 250;
      if(layer == 4){
         cake_l4.style.visibility = "visible";
         cake_l4.style.background = "#FFFFFF";
      }
      else{
        return null;
      }
 }
 document.querySelector("#Vannila-button").addEventListener("click", vannila);


 function addRedvelvet(){
    var velvet = document.querySelector("#p5");
    document.querySelector("#b5").innerHTML = velvet.innerText;
  layer++;
   total += 350;
      if(layer == 5){
         cake_l5.style.visibility = "visible";
         cake_l5.style.background = "rgb(247, 46, 46)";
      }
      else{
        return null;
      }
 }


 function buy(){
    if(layer >= 5){
        candle.style.visibility = "visible";
        document.querySelector("#total").innerHTML = "Total --------" +total;
    }
 }