
class Account
{
    constructor(name,bal)
    {
       
        this.accountbal=bal;
        this.accountname=name;
    }
    deposit(amt)
    {
        this.accountbal+=amt;
        window.alert("Rs."+amt+" added "+" to "+this.accountname+"'s account.");
    }
    display()
    {
        window.alert("Account holder's name: " + this.accountname + " Account balance: " + this.accountbal);
    }
}

var per1 = new Account("Sunil",1000);
var per2 = new Account("Yash",1500);
per1.deposit(1000);
per2.deposit(5000);
per1.display();
per2.display();

