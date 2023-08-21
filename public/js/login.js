
//----------------**LOGIN**----------------
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

        if (res.data.status === 'success') {
            alert('Logged in successfully!');
            window.setTimeout(() => {
                location.assign('/');
            }, 1500);
        }


        console.log(res);
    } catch (error) {
        console.error('Error:', error.response.data.message);
    }
};

//----------------**LOGOUT**----------------
export const logout = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: 'http://127.0.0.1:3000/api/v1/users/logout'
        });
        if (res.data.status === 'success') location.reload(true);
    }
    catch (error) {
        console.error('Error:', error.response);
    }
};

document.querySelector('.form').addEventListener('submit', async e => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    await login(email, password);
});
