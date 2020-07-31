//Primer metodo con for loops y slices
// let text = prompt("Write a error free sentence.");
// let badRes = "I dont";

// for(let i = 0; i < text.length; i++)
// {
//     if (text.slice(i, i + badRes.length) === badRes)
//     {
//         text = text.slice(0, i) + "I don't" + text.slice(i + badRes.length);
//     }
// }

// alert("The correct response is: " + text);

//==========================================================================================

//Usando "indexOf()" metodo aunque nomas no cambia el primer substring restringido que aparece y no todo.
// let text = prompt("Write a error free sentence.");
// let badRes = "I dont";

// let firstChar = text.indexOf(badRes);


// if (firstChar !== -1)
// {
//     text = text.slice(0, firstChar) + "I don't" + text.slice(firstChar + badRes.length);
// }

// alert("The correct response is: " + text);

//===========================================================================

//Hay una tercer manera de como cambiar el substring de un string usando el metodo "replace()"

let text = prompt("Write a error free sentence.");
///I dont/g === si queremos replacar todos los instantes de este substring, tenemos que ponerle /  /g y sin ""
text = text.replace(/I dont/g,"I don't");// el metodo que usamos para remplazar la respuesta incorrecta con la que queremos.

alert("The correct response is: " + text);