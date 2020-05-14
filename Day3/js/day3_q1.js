function fact()
{
var num = document.getElementById("infact").value;
var cfact;
cfact = num => { return factorial(num);}
document.getElementById("dispFact").innerHTML=cfact(num);
function factorial(num)
{
    if(num<=1){return num;}
    else{
        
        return num*factorial(num-1);
    }
    
}
}
