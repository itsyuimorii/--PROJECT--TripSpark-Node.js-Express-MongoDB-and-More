

const login = async (email, password) => {
    // console.log(email, password)
    // alert(email + ' ' + password);
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:3000/api/v1/users/login',
            data: {
                email,
                password
            }
        });
        console.log(res);
    } catch (error) {
        console.error('Error:', error.response.data.message);
    }
};

document.querySelector('.form').addEventListener('submit', async e => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    await login(email, password);
});
