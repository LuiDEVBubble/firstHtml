calcTot = (merchTot) => 
{
    let orderTot;

    if (merchTot >= 100)
    {
        orderTot = merchTot;
    }
    else if (merchTot < 50.01)
    {
        orderTot = merchTot + 5;
    }
    else 
    {
        orderTot = merchTot + 5 + (0.03 * (merchTot - 50));
    }

    return orderTot;
}

mesgToCus = (tot) =>
{
    return "Hello your total is: " + calcTot(tot);
}

let totalToCharge = mesgToCus(65.50);

alert(totalToCharge);

//testing the use of switch statements

var a = 11;

switch (a) {
    case 20:
        alert("The a value is 20 ");
        break;
    case 40:
        alert("The value is 40");
        break;
    default:
        alert("The value is 11");
}
