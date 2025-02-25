function getFormValue(event){
    event.preventDefault();
    let form = document.forms["form1"];
    let firstName = document.querySelector('[name="fname"]').value.trim()
    console.log(firstName);
    let lastName = form["lname"].value.trim();
    console.log(lastName);
    if(!firstName || !lastName){
        alert("Please enter both First Name and Last Name.");
    }
    // alert(firstName + " " + lastName);
    alert(`${firstName} ${lastName}`);

    
}