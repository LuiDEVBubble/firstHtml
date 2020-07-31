/*Este codigo lo escribi para aprender sobre changing case. Changing case es cuando tu le dices al usuario 
que te de su respuesta y tu se la conviertes en minusculas o mayusculas su palabra. Este nos ayuda eliminar todas
las posibilidades que el usario podria poner. Por ejemplo, si el usuario escribe "chIcAgo" y no "chicago", nuestro 
codigo le diria que esta mal. Por eso le denemos que convertir su respuesta para que todas las letras sean en 
minusculas o mayusculas para que podamos compara bien.   */

let cityToCheck = prompt("What city do you live in?"); // prompt le pregunta al usuario algo y toma su respuesta



cityToCheck = cityToCheck.toLowerCase(); // usamos el metodo "toLowerCase()" para covertir su respuesta en minusculas


let cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"]; //nuestro array con solo minusculas. Podemos hacer que todas las palabras sean mayusculas pero eso es mucho trabajo y se mira feo
cleanestCities.push("chicago"); // le agrego "chicago" a mi array con "push()"

let arryLength = cleanestCities.length; // creo un variable para guardar el tamano de mi array
let flagVar = false; // un "flag" variable para que sepamos si la respuesta del usuario paso o no

for (let i = 0; i < arryLength; i++) // for loop para compara la respuesta del usuario con nuestro array
{
    if (cityToCheck === cleanestCities[i]) // comparamos un elemento con la respuesta del usuario
    {
        flagVar = true; // si la ciudad del usuario esta en nuestro array, entonces le dejamos saber a nuestro "flag" variable que si estaba en el array por medio de nuestro boolean "true"
        alert("Your city is one of the cleanest cities"); // Nos deja saber si nuestra ciudad es una de las limpias usando "alert()"
        break; // keyword para salir del for loop si encontramos la ciudad del usuario en nuestro array. Este "break" es muy importante porque nos ahorra tiempo de ejecucion si ya encontramos la respuesta antes de llegar al fin del for loop
    }
}
if (flagVar === false) // if statement para ver si pudimos encontrar la ciudad del usuario en nuestro array
    alert("Your city is not one of the cleanest cities"); // muestra en la pantalla la siguente respuesta.


//Codigo que nos ensena como usar el metodo slice para copiar ciertas partes de un string.    
let firstChar = cityToCheck.slice(0,1); // esto copiaria el primer character del string por empezamos con "0" osea, el primer character, y copiamos asta antes del "1" character que seria el segundo charater porque un string funciona como un array.
let otherChars = cityToCheck.slice(1);// no hay un segundo numero elemento en el parentesis entonces copiariamos desde el segundo charater hasta el final del string
firstChar = firstChar.toUpperCase(); // Este code hace que la primera letra de la respuesta del usuario este en mayuscula.
otherChars = otherChars.toLowerCase(); // esto convierte el resto de los characteres en minusculas.
let cappedCity = firstChar + otherChars; // esto combina nuestra primera letra mayuscula con el resto de sus letras que ahora estan en minusculas

alert("User lives in " + cappedCity);



//Codigo que le pregunta al usuario por un mes y le regresa las primeras 3 letras del mes en mayusculas.
let month = prompt("Enter a month");
let charsInMonth = month.length;
if (charsInMonth >= 3)
{
    let monthAbbrev = month.slice(0,3);
    monthAbbrev = monthAbbrev.toUpperCase();
    alert("You entered: " + monthAbbrev);
}

//Codigo del libro que nos ensena como ver su el usuario nos dio una phrase con double spaces usando slice metodo.
let str = prompt("Enter some text");
strLength = str.length;
let catchFlag = false;
for(let i = 0; i < strLength; i++)
{
    if (str.slice(i, i + 2) === "  ")
    {
        catchFlag = true;
        alert("No double spaces!");
        break;
    }

}
if (catchFlag === false)
{
    alert("Good job, your text did not double spaces");
}

