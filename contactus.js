function validate()
{
    var firstname = document.getElementById("fname");
    var lastname = document.getElementById("lname");
    var firstname = document.getElementById("Number");

    if(firstname.value.trim() ==""|| lastname.value.trim()==""|| Number.value.trim()=="")
    {
        alert("No Blank Value Accepted");
        return false;
    }
    else
    {
        true;

    }
}