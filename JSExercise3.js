

function heehaw()
{
    let user = prompt("Please choose a number");
    let user1 = parseInt(user);
    for (let x=1; x <= user1; x++)
    {
        if (x % 3 === 0 && x % 5 === 0)
        {
            document.writeln("Hee Haw!" +"<br>");
            document.write("\n");
        }
        else if(x % 3 === 0)
        {
            document.writeln("Hee!" + "<br>");
            document.write("\n");
        }
        else if(x % 5 === 0)
        {
            document.writeln("Haw!" + "<br>");

        }
        else
        {

            document.writeln(x + "<br>");

        }

    }
    if(isNaN(user1)){
        alert("Input must be a number!");
        heehaw();
    }
    else if(user1 === null || user1 === "")
    {
        alert("Please enter a number!");
        heehaw();
    }

}

heehaw();