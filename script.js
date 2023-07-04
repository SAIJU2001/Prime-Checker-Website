const textinput = document.querySelector("#text");
console.log(textinput);
const result = document.getElementById("output");
const checkbtn = document.getElementById("btn");

function textfxn() 
{
    result.innerHTML = "";
    let text = document.getElementById("text").value;
    let newtext = text.replace(/[^0-9]/g, '');
    let alphatext = text.replace(/[0-9]/g, '');
    console.log(newtext, alphatext);

    if (newtext && !alphatext) 
    {
        checkbtn.addEventListener("click", check);
    }
    else 
    {
        alert("Please Enter a Positive Value");
    }
}

function check() 
{
    let text = document.getElementById("text").value;
    let newtext = text.replace(/[^0-9]/g, '');

  if (newtext === "") 
  {
        result.innerHTML = "";
        return;
    }

  let isPrime = true;
    if (newtext == 2) 
    {
        result.innerHTML = `${newtext} is an even and prime number.`;
    }
    else if (newtext % 2 == 0) 
    {
        result.innerHTML = `${newtext} is an Even number.`;
    }
    else 
    {
        for (let i = 2; i < newtext; i++) 
        {
            if (newtext % i == 0) 
            {
                isPrime = false;
                break;
            }
        }
        if (isPrime) 
        {
            result.innerHTML = `${newtext} is an odd and prime number.`;
        } else 
        {
            result.innerHTML = `${newtext} is an odd number.`;
        }
    }
}

