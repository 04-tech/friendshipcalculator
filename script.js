function love(){
var name=document.getElementById("first").value;
var lname=document.getElementById("love").value;
if(name==""){
    alert("please enter your  name ");
}
else if( name.length<=2){
  alert("please enter your  name is greater 3 alphabets ");
}
 else if(!isNaN(name))
   {
    alert("Numbers are not allowed");
   }
  else if(lname==""){
    alert("please enter your love name ");
}
else if( lname.length<=2){
  alert("please enter your love name is greater 3 alphabets ");
}
  else if((name=="ayush"||name=="AYUSH"||name=="Ayush")&&(lname=="PRACHI"||lname=="PRIYA"||lname=="prachi"||lname=="priya"||lname=="Prachi"||lname=="Priya"))
  {
      document.getElementById("answer").value="100%";
  }
  else if((name=="PRACHI"||name=="PRIYA"||name=="prachi"||name=="priya"||name=="Priya"||name=="Prachi")&&(lname=="AYUSH"||lname=="ayush"||lname=="Ayush"))
  {
    document.getElementById("answer").value="100%";
  }
  else if((name=="ASHIMA"||name=="ashima"||name=="Ashima")&&(lname=="AYUSH"||lname=="ayush"||lname=="Ayush"))
  {
    document.getElementById("answer").value="100%";
  }
  else if((name=="Ayush"||name=="ayush"||name=="AYUSH")&&(lname=="ASHIMA"||lname=="ashima"||lname=="Ashima"))
  {
    document.getElementById("answer").value="100%";
  }
  
 else if(!isNaN(lname))
   {
    alert("Numbers are not allowed");
   }
   else
   {
       var love=Math.random()*100;
       love=Math.floor(love);
       document.getElementById("answer").value=love +" %";
   }
}
