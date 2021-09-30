/*Fill your code */
var total=0;
document.getElementById("cakechoco").style.display="none";
document.getElementById("cakestraw").style.display="none";
document.getElementById("cakescotch").style.display="none";
document.getElementById("cakevanilla").style.display="none";
document.getElementById("cakered").style.display="none";
document.getElementById("candle").style.display="none";

document.getElementById("chocolate").addEventListener("click", chocolate);
document.getElementById("strawberry").addEventListener("click", strawberry);
document.getElementById("butterscotch").addEventListener("click", butterscotch);
document.getElementById("vanilla").addEventListener("click", vanilla);
document.getElementById("redvelvet").addEventListener("click", redvelvet);
document.getElementById("buy").addEventListener("click", total1);

function chocolate() {
  if(document.getElementById("cakechoco").style.display=="none")
  {
    total +=300;
    document.getElementById("cakechoco").style.display="block";
    document.getElementById("1").innerHTML = "Chocolate----------300";
  }
  else
  {
    total -=300;
    document.getElementById("cakechoco").style.display="none";
    document.getElementById("1").innerHTML = "";
    if(document.getElementById("candle").style.display=="block")
    {
      document.getElementById("candle").style.display="none";
      document.getElementById("total").style.display="none";
    }
  }
    
}
function strawberry() {
  if(document.getElementById("cakestraw").style.display=="none")
  {
    total +=100;
    document.getElementById("cakestraw").style.display="block";
    document.getElementById("2").innerHTML = "Strawberry---------100";
  }
  else
  {
    total -=100;
    document.getElementById("cakestraw").style.display="none";
    document.getElementById("2").innerHTML = "";
    if(document.getElementById("candle").style.display=="block")
    {
      document.getElementById("candle").style.display="none";
      document.getElementById("total").style.display="none";
    }
  }
  }
  function butterscotch() {
    if(document.getElementById("cakescotch").style.display=="none")
    {
      total +=200;
      document.getElementById("cakescotch").style.display="block";
      document.getElementById("3").innerHTML = "Butterscotch-------200";
    }
    else
    {
      total -=200;
      document.getElementById("cakescotch").style.display="none";
      document.getElementById("3").innerHTML = "";
      if(document.getElementById("candle").style.display=="block")
      {
        document.getElementById("candle").style.display="none";
        document.getElementById("total").style.display="none";
      }
    }
    
  }
  function vanilla() {
    if(document.getElementById("cakevanilla").style.display=="none")
    {
      total +=250;
      document.getElementById("cakevanilla").style.display="block";
      document.getElementById("4").innerHTML = "Vanilla-------------250";
    }
    else
    {
      total -=250;
      document.getElementById("cakevanilla").style.display="none";
      document.getElementById("4").innerHTML = "";
      if(document.getElementById("candle").style.display=="block")
      {
        document.getElementById("candle").style.display="none";
        document.getElementById("total").style.display="none";
      }
    }
  }
  function redvelvet() {
    if(document.getElementById("cakered").style.display=="none")
    {
      total +=350;
      document.getElementById("cakered").style.display="block";
      document.getElementById("5").innerHTML = "RedVelvet---------350";
    }
    else
    {
      total -=350;
      document.getElementById("cakered").style.display="none";
      document.getElementById("5").innerHTML = "";
      if(document.getElementById("candle").style.display=="block")
      {
        document.getElementById("candle").style.display="none";
        document.getElementById("total").style.display="none";
      }
    }
    
  }
  function total1() {
      document.getElementById("candle").style.display="block";
      document.getElementById("total").style.display="block";
      document.getElementById("total").style.fontWeight="bold";
      document.getElementById("total").style.color="black";
      document.getElementById("total").style.fontSize="20px"
      document.getElementById("total").style.padding="15px"
      document.getElementById("total").innerHTML = "Total--------- " +total;
  }
