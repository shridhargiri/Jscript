class math
{
    constructor(num)
    {
        this.mathnum=num;
    }
    static square(x)
    {
        return (x.mathnum*x.mathnum);
    }
    static cube(x)
    {
        return (x.mathnum*x.mathnum*x.mathnum);
    }
}
var a= new math(5);
var b= new math(7);
window.alert(math.square(a));
window.alert(math.cube(a));
window.alert(math.square(b));
window.alert(math.cube(b));

