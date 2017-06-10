var points=0;
function change(){
                
var timesRun = 0;
var one=1,two=0,three=7;

var interval = setInterval(function slot(){
          timesRun += 1;
         if(timesRun === 7){
        clearInterval(interval);
            }      
	    
        one = Math.floor((Math.random()*9)+1);
	    two= Math.floor((Math.random()*9)+1);
		three= Math.floor((Math.random()*9)+1);

		document.getElementById('box1').innerHTML = one;
        document.getElementById('box2').innerHTML = two;
		document.getElementById('box3').innerHTML = three;

        },300);
    if ( one == two && two == three && three == one) 
          points+=10;
        document.getElementById('p1').innerHTML = points;       
  
 }
    
	
	   