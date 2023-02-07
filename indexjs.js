function validateForm() {
  // for Full Name validation
  var text = document.loanForm.fname.value;
  var text1 = text.trim().split(/\s+/);
  var index1 = text1[0].length;
  var index2 = text1[1].length;
  var index3 = index1 && index2;
  // pattern to validate
  var letters = /^[a-zA-Z\s]+$/;
  var pattern = /[a-zA-Z]+.\s/;
  var result = text.match(pattern);
  localStorage.setItem("firstname", result);
  var Name = letters.test(text);

  if (Name != true || text1.length >= 3 || index3 < 4) {
    return false;
  }

  // for email validation
  var a = document.loanForm.email.value;
  localStorage.setItem("emailvalue", a);

  // for pan number pattern validation
  let pan = document.loanForm.panno.value;
  var reg = /[A-Z][A-Z][A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9][A-Z]/;
  let rege = pan.match(reg);
  if (pan != rege) {
    return false;
  }
  // enter only numbers in loan amount
  let loan = document.loanForm.loan.value;
  if (isNaN(loan)) {
    return false;
  }
}
// function for converting amount numbers into word in loan ammount
let c = [
  "",
  "one ",
  "two ",
  "three ",
  "four ",
  "five ",
  "six ",
  "seven ",
  "eight ",
  "nine ",
  "ten ",
  "eleven ",
  "twelve ",
  "thirteen ",
  "fourteen ",
  "fifteen ",
  "sixteen ",
  "seventeen ",
  "eighteen ",
  "nineteen ",
];
let d = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

function convert() {
  let value = document.getElementById("a4").value;

  if ((value = value.toString()).length > 9) return "overflow";
  n = ("000000000" + value)
    .substr(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return;
  var str = "";
  str +=
    n[1] != 0
      ? (c[Number(n[1])] || d[n[1][0]] + " " + c[n[1][1]]) + "crore "
      : "";
  str +=
    n[2] != 0
      ? (c[Number(n[2])] || d[n[2][0]] + " " + c[n[2][1]]) + "lakh "
      : "";
  str +=
    n[3] != 0
      ? (c[Number(n[3])] || d[n[3][0]] + " " + c[n[3][1]]) + "thousand "
      : "";
  str +=
    n[4] != 0
      ? (c[Number(n[4])] || d[n[4][0]] + " " + +c[n[4][1]]) + "hundred "
      : "";
  str +=
    n[5] != 0
      ? (str != "" ? "and " : "") +
        (c[Number(n[5])] || d[n[5][0]] + " " + c[n[5][1]]) +
        "Rs"
      : "";

  document.getElementById("amounterror").innerHTML = str;
}

// function to validate the name
function error() {
  var text2 = document.loanForm.fname.value;
  var text1 = text2.trim().split(/\s+/);
  var index1 = text1[0].length;
  var index2 = text1[1].length;
  var index3 = index1 && index2;
  var letters = /^[a-zA-Z\s]+$/;
  var Name = letters.test(text2);
  var regexp = new RegExp("^[0-9]+$");

  if (Name != true || text1.length >= 3 || index3 < 4 || text2.match(regexp)) {
    document.getElementById("p2").innerHTML = "Please enter a valid Name";
    return false;
  } else {
    document.getElementById("p2").innerHTML = "";
  }
}
// function to validate the email
function email1() {
  let email2 = document.loanForm.email.value;

  if (email2.endsWith("@gmail.com")) {
    document.getElementById("p3").innerHTML = "";
  } else {
    document.getElementById("p3").innerHTML = "Please enter a valid email";
    return false;
  }
}

// function to validate the pan number
function Pan1() {
  let pan2 = document.loanForm.panno.value;
  let reg = /[A-Z][A-Z][A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9][A-Z]/;
  let rege = pan2.match(reg);
  if (pan2 != rege) {
    document.getElementById("p4").innerHTML =
      "Please enter a valid pan number ";
    return false;
  } else {
    document.getElementById("p4").innerHTML = "";
  }
}
