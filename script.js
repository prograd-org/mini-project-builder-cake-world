/*Fill your code */
var cakeLayer = {
Chocolate:300,
Strawberry:100,
Butterscotch:200,
Vannila:250,
Redvelvet:350
};

var state ={Chocolate:false, Strawberry:false, Butterscotch:false, Vannila:false, Redvelvet:false};
function renderAll() {
    renderChocolate();
    renderStrawberry();
    renderButterscotch();
    renderVannila();
    renderRedvelvet();
    renderPrice();
    renderCakeLayerBoard();
    renderCandle();
    renderButtons();
  }
 function renderChocolate(){
  var choco = document.querySelector("#layer1");
  if (state.Chocolate) {
    choco.style.visibility= "inherit";
  } else {
    choco.style.visibility = "hidden";
  }

  }
  function renderStrawberry(){
  var strawberry = document.querySelector("#layer2");
  if (state.Strawberry) {
    strawberry.style.visibility = "inherit";
  } else {
    strawberry.style.visibility = "hidden";
  }

}
function renderButterscotch() {
  var butterscotch = document.querySelector("#layer3");
  if (state.Butterscotch) {
    butterscotch.style.visibility = "inherit";
  } else {
    butterscotch.style.visibility = "hidden";
  }
}
function renderVannila() {
  var vannila = document.querySelector("#layer4");
  if (state.Vannila) {
    vannila.style.visibility = "inherit";
  } else {
    vannila.style.visibility = "hidden";
  }
}
function renderRedvelvet() {
  var redvelvet = document.querySelector("#layer5");
  if (state.Redvelvet) {
    redvelvet.style.visibility = "inherit";
  } else {
    redvelvet.style.visibility = "hidden";
  }
}
document.querySelector(".btn-choco").onclick = function () {
  state.Chocolate = !state.Chocolate;
  renderAll();
};
document.querySelector(" .btn-strawberry").onclick = function () {
  state.Strawberry= !state.Strawberry;
  renderAll();
};
document.querySelector(".btn-butterscotch").onclick = function () {
  state.Butterscotch = !state.Butterscotch;
  renderAll();
};
document.querySelector(".btn-vannila").onclick = function () {
  state.Vannila = !state.Vannila;
  renderAll();
};
document.querySelector(".btn-redvelvet").onclick = function () {
  state.Redvelvet= !state.Redvelvet;
  renderAll();
};
function renderButtons(){
  var btnChoco = document.querySelector('.btn-choco');
  var btnStrawberry = document.querySelector('.btn-strawberry');
  var btnButterscotch = document.querySelector('.btn-butterscotch');
  var btnVannila = document.querySelector('.btn-vannila');
  var btnRedvelvet = document.querySelector('.btn-redvelvet');
  if(state.Chocolate)btnChoco.classList.add("active")
  else  btnChoco.classList.remove("active")
if(state.Strawberry) btnStrawberry.classList.add("active")
else  btnStrawberry.classList.remove("active")
if(state.Butterscotch) btnButterscotch.classList.add("active")
else btnButterscotch.classList.remove("active")
if( state.Vannila) btnVannila.classList.add("active")
else btnVannila.classList.remove("active")
if(state.Redvelvet) btnRedvelvet.classList.add("active")
else btnRedvelvet.classList.remove("active")
}
function renderCakeLayerBoard(){
if (state.Chocolate)
document.getElementsByClassName('items')[0].style.visibility = 'visible';
else document.getElementsByClassName('items')[0].style.visibility='hidden';

if (state.Strawberry)
document.getElementsByClassName('item')[1].style.visibility = 'visible';
else document.getElementsByClassName('item')[1].style.visibility='hidden';

if (state.Butterscotch)
document.getElementsByClassName('item')[2].style.visibility = 'visible';
else document.getElementsByClassName('item')[2].style.visibility='hidden';

if (state.Vannila)
document.getElementsByClassName('item')[3].style.visibility = 'visible';
else document.getElementsByClassName('item')[3].style.visibility='hidden';

if (state.Redvelvet)
document.getElementsByClassName('item')[4].style.visibility = 'visible';
else document.getElementsByClassName('item')[4].style.visibility='hidden';
}
function renderPrice(){
  var total = 0;
if(state.Chocolate) total = total+ cakeLayer.Chocolate;
if(state.Strawberry) total = total+ cakeLayer.Strawberry;
if(state.Butterscotch) total = total+ cakeLayer.Butterscotch;
if(state.Vannila) total = total+ cakeLayer.Vannila;
if(state.Redvelvet) total = total+ cakeLayer.Redvelvet;
document.getElementById('total').innerHTML = `Total----- ${total}`;
}
function renderCandle(){
  var candle = document.getElementById('candle');
  document.querySelector(".btn-buy").onclick = function () {
  
  if( state.Chocolate && state.Strawberry && state.Butterscotch && state.Vannila && state.Redvelvet)
    {
      candle.style.visibility = "inherit";
    }else{
      candle.style.visibility = "none";
    }
  
}
};