var integerArray =[],indices=[];

function  addInteger(e){
	 
	integerValue=document.getElementById('numberInput').value;	
	integerArray.push(integerValue);
	document.getElementById('integerArray').innerHTML+=(integerArray.length==1?"":"," )+integerValue;
	document.getElementById("numberInput").value="";
	
}

 var reset =function(){
 	document.getElementById("indicesArray").innerHTML="";
 	document.getElementById('integerArray').innerHTML="";
 	integerArray=[];
 	indices=[];

 }
 function searchConsecutiveNumbers(){
  for(var i=0;i<integerArray.length-1;i++){
   //check next number
   var firstNumber=parseInt(integerArray[i]);
   var secondNumber= parseInt(integerArray[i+1]);
   var thirdNumber= parseInt(integerArray[i+2]);
   var fdifference= firstNumber-secondNumber;
   var sdifference= secondNumber-thirdNumber;
    if( (fdifference==1 && sdifference==1) || (fdifference==-1 && sdifference==-1) ){
     indices.push(i);
    }
   else {
	   console.log("not consecutive");
   }
  }
  for(i=0;i<indices.length;i++){
   document.getElementById("indicesArray").innerHTML+=(i==0?"":",")+indices[i];
  }
  
}


		
