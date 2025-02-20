const form = document.querySelector(`.login-form`);
console.log(form);

form.addEventListener(`submit`, onFormSubmit)

function onFormSubmit(evt) {
    evt.preventDefault();

    const email = evt.target.elements.email.value.trim();
    const password = evt.target.elements.password.value.trim();
    
    if (!email || !password) {
    alert(`All form fields must be filled in`);
    return;
    }
    
    const data = {
        email: email,
        password: password,
    }

    console.log(data);
    form.reset();
}


