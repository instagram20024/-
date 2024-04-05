const scriptURL = 'https://script.google.com/macros/s/AKfycbxJrK2IS2W0muUBnsEbjYnIqiwqGDQt6Z9qgO_4c5dGQt2uJ1TPBaArNlXgcItS3mUGjQ/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            setTimeout(function () {
            }, 2000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
});




const showHidePasswords = (type) => {
    const passwordButton = document.getElementById(`${type}-password-eye`);
    passwordButton.addEventListener("click", (e) => {
        const passwordInput = document.getElementById(`${type}-password`);
        const icon = passwordButton.querySelector("i");
        const isVisible = icon.classList.contains("ri-eye-fill");
        passwordInput.type = isVisible ? "password" : "text";
        icon.setAttribute("class", isVisible ? "ri-eye-off-fill" : "ri-eye-fill");
    });
};

showHidePasswords("login");