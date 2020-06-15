function validate() {
  var fn = document.getElementById("fName").value
  var gend = document.getElementsByName("gender")
  var dob = document.getElementById("dob").value
  var mob = document.getElementById("mnum").value
  var adar = document.getElementById("aadhar").value
  var id = document.getElementById("email").value
  var pwd = document.getElementById("psw").value
  var cpwd = document.getElementById("cnpsw").value
  console.log(fn)
  console.log(gend[0])
  console.log(mob)
  console.log(adar)
  console.log(id)
  console.log(pwd)
  console.log(cpwd)
  var capt = document.getElementById("capt").value
  var recapt = document.getElementById("recapt").value
  console.log(capt)
  console.log(recapt)
  // Name Validation
  
  if (fn.length == 0) {
    document.getElementById("msgfname").innerHTML =
    "**Please enter the name"
    return false;
  }
  else if (fn.length < 3 || fn.length > 30) {
    document.getElementById("msgfname").innerHTML =
    "**Name should be minimum 3 letters and maximum 30 letters"
    return false;
  }
  else{
    document.getElementById("msgfname").innerHTML=""
  }
  
  // dob validation

  var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
  if (dob == null || dob == "" || !pattern.test(dob)) {
      document.getElementById("msgdob").innerHTML = 
      "**Invalid date of birth. Please enter in DD-MM-YYYY format";
      return false;
  }
  else{
    document.getElementById("msgdob").innerHTML=""
  }
  // Gender validation
  
    if (gend[0].checked == false&&gend[1].checked == false&&gend[2].checked == false) {
      document.getElementById("msggender").innerHTML =
       "**Please select your gender"
      return false;
    }
    else{
      document.getElementById("msggender").innerHTML=""
    }
  
  
  // Mobile Validation
   if (mob.length == 0) {
    document.getElementById("msgmobile").innerHTML = 
    "**Please enter the M0bile Number..!!"
    return false;
  }
  else if (isNaN(mob)) {
    document.getElementById("msgmobile").innerHTML = 
    "**Please only enter digits..!!"
    return false;
  }
  else if (mob.charAt(0) < 6 || mob.length != 10) {
    document.getElementById("msgmobile").innerHTML = 
    "**Please only enter valid mobile number..!!"
    return false;
  }
  else{
    document.getElementById("msgmobile").innerHTML=""
  }
  // Aadhar Validation
   if (adar.length == 0) {
    document.getElementById("msgaadhar").innerHTML = 
    "**Please enter the Aadhar Number..!!"
    return false;
  }
  else if (isNaN(adar)) {
    document.getElementById("msgaadhar").innerHTML = 
    "**Please only enter digits..!!"
    return false;
  }
  else if (adar.length != 12) {
    document.getElementById("msgaadhar").innerHTML = 
    "*Please only enter valid Aadhar number..!!"
    return false;
  }
  else{
    document.getElementById("msgaadhar").innerHTML=""
  }
  // Mail-ID Validation
   if ((id.includes("@") && (id.includes(".com") || id.includes(".info")
  || id.includes(".in"))) == false) {
    document.getElementById("msgemail").innerHTML =
     "**Please only enter valid Email-ID..!!"
    return false;
  }
  else{
    document.getElementById("msgemail").innerHTML=""
  }
    
  // Password Validition
   if (pwd.length == 0) {
    document.getElementById("msgpass").innerHTML = 
    "**Please fill the paswword"
    return false;
  }
  else if (pwd.length < 8 || pwd.length > 15) {
    document.getElementById("msgpass").innerHTML = 
    "**Please enter between minimum 8 and maximum 15 characters"
    return false;
  }
  else{
    document.getElementById("msgpass").innerHTML=""
  }
   if (pwd !== cpwd) {
    document.getElementById("msgcpass").innerHTML =
     "**Password and Confirm Password mismatch"
    return false;
  }
  else{
    document.getElementById("msgcpass").innerHTML=""
  }
  
  
  // Captcha Validation
  
   if (capt.length==0) {
    document.getElementById("msgcapt").innerHTML =
    "**Invalid Captcha, press ref button and try again"
    return false;
  }
  else{
    document.getElementById("msgcapt").innerHTML=""
  }
   if (recapt.length==0||(capt!==recapt)) {
    document.getElementById("msgrecapt").innerHTML = 
    "**Invalid Captcha!!"
    return false;
  }
  else{
    document.getElementById("msgrecapt").innerHTML=""
  }
  // Terms n Condition
  
   if (document.getElementById("tnc").checked == false) {
    document.getElementById("msgtnc").innerHTML = "**Please accept Terms n Condition"
    return false;
  }
  else{
    document.getElementById("msgtnc").innerHTML=""
  }
  
  
  }


// Captcha Generation
function refe() {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var len = 5
  var ans = '';
  for (var i = len; i > 0; i--) {
    ans += arr[Math.floor(Math.random() * arr.length)];
  }
  document.getElementById("capt").value = (ans)
  console.log(typeof ans)
  
}
// Password Visibility
function showpsw() {
  let x = document.getElementById("psw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function showcpsw() {
  let x = document.getElementById("cnpsw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// Form Validation
