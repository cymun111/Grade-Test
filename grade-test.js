$(document).ready(function(){

/* Output Grade Letter or Invalid if no valid number was entered & Your average Grade*/
var A = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
var B = [80, 81, 82, 83, 84, 85, 86, 87, 88, 89];
var C = [70, 71, 72, 73, 74, 75, 76, 77, 78, 79];
var D = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69];
var F = [];
for (let i = 0; i <= 59; i++) {
    F.push(i);
    if(i < 0){
      return;
    }
}
var invalid = [];
for (let i = 0; i <= 101; i++) {
    invalid.push(i);}

$("#myInput").on( "keydown", function( event ){
var x = event.keyCode;
  if (x == 32) {$("#gradeTest").click(function() {
  var valueInput = $("#myInput").val();
  var valueSplit = valueInput.split(" ", 4);
  firstGrade = parseInt(valueSplit[0]), secondGrade = parseInt(valueSplit[1]), thirdGrade = parseInt(valueSplit[2]), fourthGrade = parseInt(valueSplit[3]);
  let avg = (firstGrade + secondGrade + thirdGrade + fourthGrade) / valueSplit.length;
  console.log(avg);

  if (A.indexOf(avg) >= 0){
  document.getElementById('answer').innerHTML = "A";}
    if (A.indexOf(avg) >= 0){
    document.getElementById('average').innerHTML = "Your average Grade is" + ' ' + avg;}
     else if(B.indexOf(avg) >= 0 | B.indexOf(avg) <= 9){
      document.getElementById('answer').innerHTML = "B";}
        if (B.indexOf(avg) >= 0 | B.indexOf(avg) <= 9){
        document.getElementById('average').innerHTML = "Your average Grade is" + ' ' + avg;}
         else if (C.indexOf(avg) >= 0 | C.indexOf(avg) <= 9){
          document.getElementById('answer').innerHTML = "C";}
          if (C.indexOf(avg) >= 0 | C.indexOf(avg) <= 9){
           document.getElementById('average').innerHTML = "Your average Grade is" + ' ' + avg;}
            else if (D.indexOf(avg) >= 0 | D.indexOf(avg) <= 9){
             document.getElementById('answer').innerHTML = "D";}
             if (D.indexOf(avg) >= 0 | D.indexOf(avg) <= 9){
             document.getElementById('average').innerHTML = "Your average Grade is" + ' ' + avg;}
              else if (F.indexOf(avg) <= 9){
               document.getElementById('answer').innerHTML = "F";}
               if (F.indexOf(avg) <= 9){
               document.getElementById('average').innerHTML = "Your average Grade is" + ' ' + avg;}
});}else{
$("#gradeTest").click(function(){
    let valueInput = parseInt(document.getElementById("myInput").value);
      if (A.indexOf(valueInput) >= 0){
        document.getElementById('answer').innerHTML = "A";}
          else if(B.indexOf(valueInput) >= 0){
            document.getElementById('answer').innerHTML = "B";}
            else if (C.indexOf(valueInput) >= 0){
              document.getElementById("answer").innerHTML = "C";}
              else if (D.indexOf(valueInput) >= 0){
                document.getElementById("answer").innerHTML = "D";}
                else if (F.indexOf(valueInput) >= 0){
                  document.getElementById("answer").innerHTML = "F";}
                  else if(valueInput > 100 || valueInput < 0){
                  document.getElementById("answer").innerHTML = "Invalid Number";}
                });}
});
    /*var valueInput2 = document.getElementById("myInput");
    var array = valueInput2.split(' ', 4),
      firstGrade = array[0], secondGrade = array[1], thirdGrade = array[2], fourthGrade = array[3];
    if (valueInput2 === array){
      console.log(array);
    }
    });

/* Restrict Character Use to Integers */

  $('#myInput').keypress(function(key) {
      if(key.charCode < 48 && key.charCode < 32 || key.charCode > 57) return false;
  });

});
