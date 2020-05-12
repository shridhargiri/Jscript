function maxNum()
{
    var arr=[22,11,33,56,22,77,22,55,86,23];
    arr.sort(function(a,b){return b-a});
    var max=arr[0];
    window.alert(max);
}
function nameInP()
{
    var name= document.getElementById("dispName").value;
    document.getElementById("name").innerHTML=name;
}
function showCont()
{    
    document.getElementById("showName").hidden=false;
}
function changeSize()
{
    document.getElementById("contFont").style.fontSize=28;
}
function copyTxt()
{
    var txt=document.getElementById("box1").value;
    document.getElementById("box2").value = txt;
}
function numAsc()
{
    var arr = [11,33,657,234,21,78,57];
    var srt = arr.sort(function(a,b){return a-b});
    document.getElementById("numArr").innerHTML = srt;
}
function nameDesc()
{
    var arr = ["John","Smith","William","Rahul","Yogesh"];
    var srt = arr.reverse();
    document.getElementById("nameArr").innerHTML = srt;
}
function valEmail()
{
    var str = document.getElementById("inEmail").value;
    if(str.search("@") < 0)
    {
        window.alert("Please enter valid E-mail, \"@\" not found");
    }
    else
    {
        window.alert("Email is valid!");
    }
}
function valPH()
{
    var ph = document.getElementById("inPH").value;
    if(ph.toString().length == 10)
    {
        window.alert("Phone number is valid!");
    }
    else
    {
        window.alert("Phone number is not valid, please check the length!");
    }
}
function randomNum()
{
    var num = Math.floor(Math.random() * 100);
    window.alert(num);
}

