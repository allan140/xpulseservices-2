
form.addEventListener('Submit', (e) => {
    e.preventDefault();
    let isvalid = true

    letmessages = []

    //name validation
    const name = document.getElementById('name').value.trim();
    if (name.value == '' || name.value == null) {
        alert('Name is required');
        isValid = false;
    }
    //email validation
    const email = document.getElementById('email').value.trim();
    if (email.length < 8) {
        alert('Invalid email');
        isvalid = false;
    }
    //phone validation
    const phone = document.getElementById('phone').value.trim();
    const phoneReggex = /^\+[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{3}$/;
    if (!phoneReggex.test(phone)) {
        alert('Invalid phone number');
        isValid = false;
    }
    //group validation
    const group = document.getElementById('group').value.trim();
    if (group = ["Customer", "Party Owner", "Party Dealer", "Planner", "Retailer"]) {
        alert('Please select a group');
        isvalid = false;
    }
    //gender validation
    const gender = document.querySelector(input[name = "gender"]: 'checked ');
    if (!gender) {
        alert('Please select a gender');
        isvalid = false;
    }
    //token validation
    const token = document.getElementById('token').value.trim();
    if (!token.length < 6) {
        alert('Token must be atleast 6 characters');
        isvalid = false;
    }
    //message validation
    const message = document.getElementById('message').value.trim();
    if (message.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }
    if (isValid) {
        alert('Form submitted successfully');
        //submit the form
    }

})