var eSection = [];
var i;
var x = 0;
var eDays = [];
var eHours = [];
var text = "";
var o = document.getElementById("demo");
var op = document.getElementById("demo1");
var opl = document.getElementById("demo2");
var hour = document.getElementById("hour");
var days = document.getElementById("days");

function hourDays(){
  h = hour.value;
  d = days.value;
  var ans = h / d;
  o.innerHTML = "you are dividing " + h + " by " + d + " which is " + ans;/*will need to change how it's output */
}

function myFunAdd() {
    eSection.push("<div class='another'><br> Hours: <input type='text' name='hours' id='hour_"+x+"'><br><br> \
Times: <input type='text' name='days' id='day_"+x+"'></div><br>" );
    document.getElementById("another").innerHTML = eSection.join("");
 x++;
}

function myFunDel() {
  x--;
  eSection.pop();
    document.getElementById("another").innerHTML = eSection.join("");
}


var eTOHours = [];//Gets the total hours of each new section


function myFunMath(){
  h = hour.value;
  d = days.value;

  for (i = 0; i <= eSection.length; i++){//sends info to the arrays

 
  eDays.splice(i,1,+document.getElementById("day_"+i).value);
  eHours.splice(i,1,+document.getElementById("hour_"+i).value);
  eTOHours.splice(i,1,eDays.map(add)[i]);  

  tEDays = eDays.reduce(getSum);//total extra hours
  tEHours = eHours.reduce(getSum);//total extra days
  tOHours = eTOHours.reduce(getSum);//total overall hours
  remainingH = h - tOHours;//remaining hours
  remainingD = d - tEDays;//remaining days
  hoursOver = tEHours - eHours;//hours you went over
  daysOver = tEDays - d;//days you went over
  rOption = remainingH / remainingD;//recommendation if there are extra hours and days.
  //testing purposes to see output
  op.innerHTML = "start days: "+d+"<br> start hours: "+h+"<br> days: "+eDays+".<br> hours: "+eHours;
  opl.innerHTML = "<br> total hours input: " +tEHours+ "<br> total Days input: " + tEDays + "<br> total hours h*d's: " + tOHours+"<br> remaining Hours " 
  + remainingH+ "<br> remaining Days "+remainingD+"<br> hours you went over "+hoursOver+"<br> days over "+daysOver+"<br> recommended option in each day "+rOption;

  
  }
  

 /* tA.push(eDays.map(add)[i]);  //pushes total hours
  text += eDays.map(add)[i] + "<br>";
  //t = eHours[i]
    
	
	ttH = tA.reduce(getSum);//shows hours added up
    ttD = eDays.reduce(getSum);//change the output shows days added up
    lh =  h - ttH;//remainder of hours
    ld = d - ttD;//remainder of days
    option = lh / ld;//recommendation 
    hOv = ttH - h;//hours over  
    dOv = ttD - d;//days over
    //document.getElementById("demo1").innerHTML = text;
    //document.getElementById("demo2").innerHTML = "total days " + eDays.reduce(getSum);
    //document.getElementById("demo3").innerHTML = "total hours " + tA.reduce(getSum);
    var mOut;
    var mOut2;
    
    if (ttH > h){
        mOut = "you are " + hOv + " hours over the initial " + h + " hours and " + dOv + " days over the initial " + d + " days";
    } else{//need to fix
      mOut = "You are allocating " + eHours[i] + " hours into " + eDays[i] + " days. Total hours are " + eDays.map(add)[i] +  "<br>";       
      mOut2 = " You have " + lh + " of " + h + " hours you can allocate into " + ld + " days. maybe try " + option + " hours into each day";      
    }    document.getElementById("demo4").innerHTML = mOut;
         document.getElementById("demo5").innerHTML = mOut2; */
    
  //}//end of for loop
  
}

function add(n, index){//adds the arrays by index
    return n * eHours[index];
}

function getSum(total, num) {//adds everything in the array
    return total + num;
}


function start(){
  hourDays();
  myFunMath();
}



