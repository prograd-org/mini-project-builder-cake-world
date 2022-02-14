var chocolate = document.getElementById("choc");
var strawbery = document.getElementById("straw");
var butter = document.getElementById("butt");
var vanilla = document.getElementById("vani");
var rev = document.getElementById("redv");
var buy = document.getElementById("buy");

var count = 1;

var ul = document.getElementById('bill-total');
var total = 0;

chocolate.addEventListener("click", ()=> {
    let countLayer = "layer"+count;
    let a = document.getElementById(countLayer);
    a.style.visibility = "visible";
    a.style.background = "brown";
    var li = document.createElement('li');
    var text = document.createTextNode('Chocolate-----------300');
    li.appendChild(text);
    ul.appendChild(li);

    if(count==5)
    document.getElementById("candle").style.visibility = "visible";

    total+=300;

    count++;
})

strawbery.addEventListener("click", function () {
    let countLayer = "layer"+count;
    let a = document.getElementById(countLayer);
    a.style.visibility = "visible";
    a.style.background = "#fc5a8d";
    var li = document.createElement('li');
    var text = document.createTextNode('Strawbery----------100');
    li.appendChild(text);
    ul.appendChild(li);

    if(count==5)
    document.getElementById("candle").style.visibility = "visible";

    total+=100;

    count++;

  
   
})
butter.addEventListener("click", function () {
    let countLayer = "layer"+count;
    let a = document.getElementById(countLayer);
    a.style.visibility = "visible";
    a.style.background = "#FF5733";
    var li = document.createElement('li');
    var text = document.createTextNode('Butter Scotch------200');
    li.appendChild(text);
    ul.appendChild(li);
    
    if(count==5)
    document.getElementById("candle").style.visibility = "visible";

    total+=200;

    count++;
})

vanilla.addEventListener("click", function () {
    let countLayer = "layer"+count;
    let a = document.getElementById(countLayer);
    a.style.visibility = "visible";
    a.style.background = "#F3E5BB";
    var li = document.createElement('li');
    var text = document.createTextNode('Vanilla---------------200');
    li.appendChild(text);
    ul.appendChild(li);
    
    if(count==5)
    document.getElementById("candle").style.visibility = "visible";

    total+=200;

    count++;
})
rev.addEventListener("click", function () {
    let countLayer = "layer"+count;
    let a = document.getElementById(countLayer);
    a.style.visibility = "visible";
    a.style.background = "#7F2A3C";
    var li = document.createElement('li');
    var text = document.createTextNode('Redvelvet-----------500');
    li.appendChild(text);
    ul.appendChild(li);

    if(count==5)
    document.getElementById("candle").style.visibility = "visible";

    total+=500;

    count++;
})

buy.addEventListener('click', () =>{
    if(count==6){
    let liOne = document.createElement('li');
    let textOne = document.createTextNode('--------------------');
    liOne.appendChild(textOne);
    let liTwo = document.createElement('li');
    let textTwo = document.createTextNode('Total ----------'+total);
    liTwo.appendChild(textTwo);
    ul.appendChild(liOne);
    ul.appendChild(liTwo);
    count++;
    }
})
