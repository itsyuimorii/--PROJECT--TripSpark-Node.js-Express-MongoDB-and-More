const login = async (email, password) => {
    alert(email + ' ' + password);
};

document.querySelector('.form').addEventListener('submit', async e => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    await login(email, password);
});
