
class Account
{
    constructor(name,bal)
    {
       
        this.accountbal=bal;
        this.accountname=name;
    }
    getbal()
    {
        return this.accountbal;
    }
    setbal(amnt)
    {
        this.accountbal=amnt;
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
class currAcc extends Account
{
    constructor(name,bal)
    {
        super(name,bal);
        this.currAccbal=bal;
    }
    withdraw(amt)
    {
        
        var currAccbal=this.getbal();
        currAccbal-=amt;
        this.setbal(currAccbal);
        window.alert("Rs."+amt+" withdrawn "+" from "+this.accountname+"'s account.");
    }
    disp()
    {
        this.display();
    }
}
var per1 = new currAcc("Sunil",1000);
var per2 = new currAcc("Yash",1500);
per1.deposit(1000);
per2.deposit(5000);
per1.withdraw(500);
per2.withdraw(500);
per1.display();
per2.display();

