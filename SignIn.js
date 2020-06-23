var user = "Admin"
var pass = "Admin1234"
function bankAccess() 
{
    var uid = document.getElementById("uid").value
    var upass = document.getElementById("upass").value
    if((uid!=user)&&(upass!==pass))
    {
        document.getElementById("emsg").innerHTML =
        "**User ID and Password mismatch"
        return false
    }
}