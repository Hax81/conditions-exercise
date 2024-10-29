function passwordfunc()
{
const passwordlength=prompt("Ange ett lösenord med minst åtta tecken varav en siffra");

if(passwordlength.length>=8 && /\d/.test(passwordlength))
{
alert("Lösenordet accepteras");

}

else
{
alert("Lösenordet accepteras ej");

}


}