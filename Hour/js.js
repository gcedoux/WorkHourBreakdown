var again = [];
var i;
var x = 0;
var hDays = [];
var hHours = [];
var text = "";
var o = document.getElementById("demo");
var hour = document.getElementById("hour");
var days = document.getElementById("days");

function hourDays(){
  h = hour.value;
  d = days.value;
  var ans = h / d;
  o.innerHTML = "you are dividing " + h + " by " + d + " which is " + ans;/*will need to change how it's output */
}

function myFunAdd() {
    again.push("<div class='another'><br> Hours: <input type='text' name='hours' id='hour_"+x+"'><br><br> \
Times: <input type='text' name='days' id='day_"+x+"'></div><br>" );
    document.getElementById("another").innerHTML = again.join("");
 x++;
}

function myFunDel() {
  x--;
  again.pop();
    document.getElementById("another").innerHTML = again.join("");
}
var tA = [];//holds total hours added
function myFunMath(){
  h = hour.value;
  d = days.value;
  
  for (i = 0; i <= again.length; i++){
  hDays.push(+document.getElementById("day_"+i).value);
  hHours.push(+document.getElementById("hour_"+i).value);
  tA.push(hDays.map(add)[i]);  //pushes total hours
  text += hDays.map(add)[i] + "<br>";
  t = hHours[i]
    ttH = tA.reduce(getSum);//shows hours added up
    ttD = hDays.reduce(getSum);//change the output shows days added up
    lh =  h - ttH;//remainder of hours
    ld = d - ttD;//remainder of days
    option = lh / ld;//recommendation 
    hOv = ttH - h;//hours over  
    dOv = ttD - d;//days over
    /*document.getElementById("demo1").innerHTML = text;
    document.getElementById("demo2").innerHTML = "total days " + hDays.reduce(getSum);
    document.getElementById("demo3").innerHTML = "total hours " + tA.reduce(getSum);*/
    var mOut;
    var mOut2;
    
    if (ttH > h){
        mOut = "you are " + hOv + " hours over the initial " + h + " hours and " + dOv + " days over the initial " + d + " days";
    } else{//need to fix
      mOut = "You are allocating " + hHours[i] + " hours into " + hDays[i] + " days. Total hours are " + hDays.map(add)[i] +  "<br>";       
      mOut2 = " You have " + lh + " of " + h + " hours you can allocate into " + ld + " days. maybe try " + option + " hours into each day";      
    }    document.getElementById("demo4").innerHTML += mOut;
         document.getElementById("demo5").innerHTML = mOut2; 
    
  }//end of for loop
  
}

function add(n, index){//adds the arrays by index
    return n * hHours[index];
}

function getSum(total, num) {
    return total + num;
}


function start(){
  hourDays();
  myFunMath();
  test();
}



