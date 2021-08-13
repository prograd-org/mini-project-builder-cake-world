let count = 0, //a counter to know which layer to add
  bill = 0, //to calculate the total sum
  topLayer = []; //

// checking which flavor button user pressed
let flavor = (flavor) => {
  switch (flavor) {
    case "chocolate":
      if (_("btn1").classList.contains("active")) {
        //button was deactivated
        // if chocolate and vanilla layers are activated and vanilla layer is at top but we try to deactivate the bottom chocolate layer
        if (topLayer[topLayer.length - 1] == "#fa7617") {
          //check if what user is trying to deactivate is top layer or not
          _("btn1").classList.remove("active"); //shrink button size
          count--; //decrease layer count
          removeLayer(count);
          topLayer.pop(); //change top layer
          calcTotal(-300); //remove cost from total
          let ele = _("bills");
          ele.removeChild(ele.lastChild); //remove text from bills section
        }
      } else {
        //button was activated
        _("btn1").classList.add("active"); //add class to enlarge button
        count++; //increase layer count
        addLayer(count, "choco", 300);
        let ele = document.createElement("h3");
        ele.innerHTML = "Chocolate --------------- 300";
        _("bills").appendChild(ele); //add text to bills section
      }
      break;
    case "Strawberry":
      if (_("btn2").classList.contains("active")) {
        if (topLayer[topLayer.length - 1] == "#f72e2e") {
          _("btn2").classList.remove("active");
          count--;
          removeLayer(count);
          topLayer.pop();
          calcTotal(-100);
          let ele = _("bills");
          ele.removeChild(ele.lastChild);
        }
      } else {
        _("btn2").classList.add("active");
        count++;
        addLayer(count, "straw", 100);
        let ele = document.createElement("h3");
        ele.innerHTML = "Strawberry ------------- 100";
        _("bills").appendChild(ele);
      }
      break;
    case "Butterscotch":
      if (_("btn3").classList.contains("active")) {
        if (topLayer[topLayer.length - 1] == "#ffffff") {
          _("btn3").classList.remove("active");
          count--;
          removeLayer(count);
          topLayer.pop();
          calcTotal(-200);
          let ele = _("bills");
          ele.removeChild(ele.lastChild);
        }
      } else {
        _("btn3").classList.add("active");
        count++;
        addLayer(count, "butter", 200);
        let ele = document.createElement("h3");
        ele.innerHTML = "Butterscotch --------- 200";
        _("bills").appendChild(ele);
      }
      break;
    case "Vanilla":
      if (_("btn4").classList.contains("active")) {
        if (topLayer[topLayer.length - 1] == "#fafa88") {
          _("btn4").classList.remove("active");
          count--;
          removeLayer(count);
          topLayer.pop();
          calcTotal(-250);
          let ele = _("bills");
          ele.removeChild(ele.lastChild);
        }
      } else {
        _("btn4").classList.add("active");
        count++;
        addLayer(count, "vani", 250);
        let ele = document.createElement("h3");
        ele.innerHTML = "Vanilla --------------------- 250";
        _("bills").appendChild(ele);
      }
      break;
    case "Redvelvet":
      if (_("btn5").classList.contains("active")) {
        if (topLayer[topLayer.length - 1] == "#f7667e") {
          _("btn5").classList.remove("active");
          count--;
          removeLayer(count);
          topLayer.pop();
          calcTotal(-350);
          let ele = _("bills");
          ele.removeChild(ele.lastChild);
        }
      } else {
        _("btn5").classList.add("active");
        count++;
        addLayer(count, "red", 350);
        let ele = document.createElement("h3");
        ele.innerHTML = "Redvelvet ---------------- 350";
        _("bills").appendChild(ele);
      }
      break;
  }
};

//function to add cake layer
function addLayer(count, color, cost) {
  switch (count) {
    case 1: //bottom last layer
      document.getElementById("v").style.display = "block";
      addColor(color, "v"); //add color depending on the flavor
      calcTotal(cost); //add cost to bills
      break;
    case 2:
      document.getElementById("iv").style.display = "block";
      addColor(color, "iv");
      calcTotal(cost);
      break;
    case 3:
      document.getElementById("iii").style.display = "block";
      addColor(color, "iii");
      calcTotal(cost);
      break;
    case 4:
      document.getElementById("ii").style.display = "block";
      addColor(color, "ii");
      calcTotal(cost);
      break;
    case 5:
      document.getElementById("i").style.display = "block";
      addColor(color, "i");
      calcTotal(cost);
      break;
  }
}

//method to remove cake layer
function removeLayer(count) {
  switch (count) {
    case 0: //remove top most layer
      document.getElementById("v").style.display = "none";
      break;
    case 1:
      document.getElementById("iv").style.display = "none";
      break;
    case 2:
      document.getElementById("iii").style.display = "none";
      break;
    case 3:
      document.getElementById("ii").style.display = "none";
      break;
    case 4:
      document.getElementById("i").style.display = "none";
      break;
  }
}

//method to add color to the layer
function addColor(color, layer) {
  switch (color) {
    case "choco":
      document.getElementById(layer).style.background = "#fa7617"; //add color
      topLayer.push("#fa7617"); //make it the top layer
      break;
    case "straw":
      document.getElementById(layer).style.background = "#f72e2e";
      topLayer.push("#f72e2e");
      break;
    case "butter":
      document.getElementById(layer).style.background = "#ffffff";
      topLayer.push("#ffffff");
      break;
    case "vani":
      document.getElementById(layer).style.background = "#fafa88";
      topLayer.push("#fafa88");
      break;
    case "red":
      document.getElementById(layer).style.background = "#f7667e";
      topLayer.push("#f7667e");
      break;
  }
}

//I am lazy af!! so this will act like shortcut for all my dom access!!
function _(id) {
  return document.getElementById(id);
}

//method to calculate the total cost
function calcTotal(cost) {
  bill += cost;
}

//method to show the total cost in the bills section
function buy() {
  _("total").innerHTML = `Total -------------- ${bill}`;
  _("candle").style.opacity = 1;
  _("btn1").disabled = true;
  _("btn2").disabled = true;
  _("btn3").disabled = true;
  _("btn4").disabled = true;
  _("btn5").disabled = true;
}

//basically some special effects I've Added!!
var tl = anime.timeline({
  easing: "easeOutExpo",
  duration: 750,
});
tl.add({
  targets: ".logo",
  scale: 0,
})
  .add({
    targets: ".prices",
    scale: 0,
  })
  .add({
    targets: ".bill",
    scale: 0,
  })
  .add({
    targets: ".container",
    opacity: 1,
  })
  .add({
    targets: ".main",
    opacity: 1,
  })
  .add({
    targets: ".lines",
    opacity: 1,
  })
  .add({
    targets: ".logo",
    scale: 1,
    rotate: 360,
  })
  .add({
    targets: ".prices",
    scale: 1,
  })
  .add({
    targets: ".bill",
    scale: 1,
  })
  .add({
    targets: ".flavors",
    opacity: 1,
  });
