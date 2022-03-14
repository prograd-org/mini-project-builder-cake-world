/*Fill your code */
let chocolate = document.querySelector(".Choclate");
console.log("hello world");
let strawbery = document.querySelector(".Strawberry");
let butter = document.querySelector(".Butterscotch");
let vanilla = document.querySelector(".Vanilla");
let rev = document.querySelector(".RedVelvet");
let buy = document.querySelector(".Buy");

let ul=document.getElementById("bill");
let count=1,total=0;
chocolate.addEventListener("click",()=>{
    let layerName="layer"+count;
    let layer = document.getElementById(layerName);
    layer.style.visibility = "visible";
    layer.style.background = "brown";

    var li = document.createElement('li');
    var text = document.createTextNode('Chocolate-----------300');
    li.appendChild(text);
    ul.appendChild(li);

    total+=300;
    count++;
})
strawbery.addEventListener("click",()=>{
    let layerName="layer"+count;
    let layer = document.getElementById(layerName);
    layer.style.visibility = "visible";
    layer.style.background = "#fc5a8d";

    var li = document.createElement('li');
    var text = document.createTextNode('Strawbery----------100');
    li.appendChild(text);
    ul.appendChild(li);

    total+=100;
    count++;
})
butter.addEventListener("click",()=>{
    let layerName="layer"+count;
    let layer = document.getElementById(layerName);
    layer.style.visibility = "visible";
    layer.style.background = "#FF5733";

    var li = document.createElement('li');
    var text = document.createTextNode('Butter Scotch------200');
    li.appendChild(text);
    ul.appendChild(li);

    total+=200;
    count++;
})
vanilla.addEventListener("click",()=>{
    let layerName="layer"+count;
    let layer = document.getElementById(layerName);
    layer.style.visibility = "visible";
    layer.style.background = "#F3E5BB";

    var li = document.createElement('li');
    var text = document.createTextNode('Vanilla---------------200');
    li.appendChild(text);
    ul.appendChild(li);

    total+=200;
    count++;
})
rev.addEventListener("click",()=>{
    let layerName="layer"+count;
    let layer = document.getElementById(layerName);
    layer.style.visibility = "visible";
    layer.style.background = "#7F2A3C";

    var li = document.createElement('li');
    var text = document.createTextNode('Redvelvet-----------500');
    li.appendChild(text);
    ul.appendChild(li);

    total+=500;
    count++;
})

buy.addEventListener("click",()=>{
    if(count!=6)return;
    document.getElementById("candle").style.visibility = "visible";
    var li = document.createElement('li');
    var text = document.createTextNode('Total ----------'+total);
    li.appendChild(text);
    ul.appendChild(li);

})