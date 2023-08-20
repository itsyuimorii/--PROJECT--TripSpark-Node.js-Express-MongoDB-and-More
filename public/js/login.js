
const login = (email, password) => {
    alert(email, password)
};

document.querySelector('.form').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    login(email, password);
});