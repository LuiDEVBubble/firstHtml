//primer metodo de como encontrar el primer caracter de un string
let firstName = prompt("What's your first name?");

let firstChar = firstName.slice(0,1);

//segundo metodo

let first_Char = firstName.charAt(0); // esto nos da el primer caracter del string.
first_Char = "A";



let lastChar = firstName.charAt(firstName.length - 1); // esto nos da el ultimo caracter del string


//

for (let i = 0; i < firstName.length; i++)
{
    if (firstName.charAt(i) === '!')
    {
        alert("An exclamation point was found!");
        break;
    }
}