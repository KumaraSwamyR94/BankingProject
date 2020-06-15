// For transaction activities 
function transact() {
  var mainbal = document.getElementById('bal').value
    var mode = document.getElementById('inmode').value
    var amount = document.getElementById('amt').value
    var descp = document.getElementById('desc').value
    if (mode ==='')
    {
      document.getElementById('emsg').innerHTML = "**Please Select mode"
    }
    else if (amount=="") {
      document.getElementById('emsg').innerHTML = "**Please enter amount"
    }
    else if (amount>mainbal) {
      document.getElementById('emsg').innerHTML = "Withdrawl Amount Exceeding balance amount"
    }
    else if(mode==='Withdraw'&&amount<=mainbal&&amount!="")
    {
    let table =document.getElementById('wtable');
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML =  mode;
    cell2.innerHTML =  amount;
    cell3.innerHTML =  descp;
    document.getElementById('bal').value = mainbal-amount;
    document.getElementById('wtotalo').value =
     Number(document.getElementById('wtotalo').value)+Number(document.getElementById('amt').value)
     document.getElementById('emsg').innerHTML = ""

    }
    else if (mode==='Deposit')
    {
    let table =document.getElementById('dtable');
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML =  mode;
    cell2.innerHTML =  amount;
    cell3.innerHTML =  descp;
    document.getElementById('bal').value = Number(mainbal)+Number(amount);
    document.getElementById('dtotalo').value =
     Number(document.getElementById('dtotalo').value)+Number(document.getElementById('amt').value)
     document.getElementById('emsg').innerHTML = ""
    }
}
// For clearing fields
function fReset()
 {
  document.getElementById('inmode').value ="";
    document.getElementById('amt').value ="";
  document.getElementById('desc').value = "";
  document.getElementById('emsg').innerHTML = ""
}