/*---------Highest Number----------*/
function highest()
{
    function highest_num()
    {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = document.getElementById("num3").value;
    var max = 0;
    if(a>max){max = a;}
    if(b>max){max = b;}
    if(c>max){max = c;}
    return max;
    }
    document.getElementById("maxele").innerHTML=highest_num();
}

/*---------Display name---------*/
function nameInBrowser()
{
    var name=document.getElementById("inName").value;
    document.getElementById("name").innerHTML=name;
}
function nameOnConsole()
{
    var name=document.getElementById("inName").value;
    console.log(name);
}
function nameAsAlert()
{
    var name=document.getElementById("inName").value;
    window.alert(name);
}
/*---------Name in different headings---------*/
function nameH1()
{
    document.getElementById("nameInHeads").innerHTML="<h1>Shridhar Giri</h1>";
}
function nameH2()
{
    document.getElementById("nameInHeads").innerHTML="<h2>Shridhar Giri</h2>";
}function nameH3()
{
    document.getElementById("nameInHeads").innerHTML="<h3>Shridhar Giri</h3>";
}function nameH4()
{
    document.getElementById("nameInHeads").innerHTML="<h4>Shridhar Giri</h4>";
}function nameH5()
{
    document.getElementById("nameInHeads").innerHTML="<h5>Shridhar Giri</h5>";
}