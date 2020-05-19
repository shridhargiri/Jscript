function val()
{
    var user = document.getElementById("usr").value;
    var pass = document.getElementById("pass");
    var mob = document.getElementById("mob");
    var add = document.getElementById("add");
    var age = document.getElementById("age");
    if(user == "" || pass.value == "" || mob.value == "" || add.value == "" || age.value == "" )
    {
        window.alert("All fields are required!");
    }
    if( (user.toString().length) < 3) {
        window.alert("Username too short!");
        document.getElementById("ust").innerHTML="<font color=\"red\">Username is too short!</font>";
    }
    else if((user.toString().length) > 15){
        window.alert("Username too long!");
        document.getElementById("ust").innerHTML="<font color=\"red\">Username is too long!</font>";
    }
    else if( pass.value.toString().length < 8 ) {
        window.alert("Please enter correct length for Password!");
        document.getElementById("passst").innerHTML="<font color=\"red\">Length is incorrect!</font>";
    }
    else if( mob.value.toString().length != 10 ) {
        window.alert("Mobile number must be of 10 digits.");
        document.getElementById("mst").innerHTML="<font color=\"red\">Length is incorrect!</font>";
    }
    else if(age.validity.rangeOverflow){
        window.alert("Age must be lower than 100!");
        document.getElementById("agest").innerHTML="<font color=\"red\">Enter age lower than 100</font>";
    }
    else if(age.validity.rangeUnderflow){
        window.alert("Age must be greater than 18!");
        document.getElementById("agest").innerHTML="<font color=\"red\">Enter age greater than 18</font>";
    }
    else{
        window.alert("Form validated successfully.");
        document.getElementById("final").innerHTML="<strong><font color=\"green\">All information entered is in specified format!</font></strong>";
    }
}