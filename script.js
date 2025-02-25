window.getFormvalue = function(event) {
            event.preventDefault(); // Prevent page refresh

            let form = document.forms["form1"];
            let firstName = form["fname"].value.trim();
            let lastName = form["lname"].value.trim();
			if(!firstName || !lastName){
		    alert("Please enter both First Name and Last Name.");
			}
            alert(firstName + " " + lastName);

}