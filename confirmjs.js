// retrive the data from local storage
document.getElementById("s2").innerHTML = localStorage.getItem("firstname");
document.getElementById("s1").innerHTML = localStorage.getItem("emailvalue");
var val = Math.floor(1000 + Math.random() * 9000);

console.log(val);
var varCount = 0;

function myfunc() {
  var b = document.getElementById("b1").value;

  if (b == val) {
    document.getElementById("myform").innerHTML = "Validation Successful!";
    location.href = "http://pixel6.co/";
  } else {
    if (b != "") {
      varCount++;
    }
    console.log(varCount);
  }
  if (varCount == 3) {
    document.getElementById("myform").innerHTML = "Validation Failed!";
    location.href = "http://pixel6.co123/";
  }
}

// function to validate the OTP 
function char() {
  var inp = document.getElementById("b1").value;
  var pat = /^[a-zA-Z]+$/;
  var pat1 = pat.test(inp);
  if (pat1 == true || inp.length != 4) {
    document.getElementById("p1").innerHTML =
      "It is character/number is not equal to 4 digit </br> Please Enter the number";
    return false;
  } else {
    document.getElementById("p1").innerHTML = "";
  }
}
