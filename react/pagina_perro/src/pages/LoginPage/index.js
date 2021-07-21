import React from 'react';
// import axios from 'axios';

const LoginPage = (props) => {
    const [ form, setForm ] = React.useState({});


    const user = 'Daniel';
    const pass = 'Daniel';
    const jwt = 'qwertyuioplkjhgfdsazxcvbnm';


    const change = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    };

    const submit = e => {
        e.preventDefault();
        
        if(form.username === user && form.password === pass) {
            window.localStorage.setItem("JWT", jwt);
            props.history.push('/');
        }

      //  axios.post('/login', form).then(res => {console.log(res)}).catch((e) => {console.log(e)});
    }

    return (
        <form className="row col-4 center" onSubmit={submit}>
            <input onChange={change} className="mt-3 text-center offset-5" placeholder="username" name="username" />
            <input onChange={change} className="mt-2 text-center offset-5" placeholder="password" type="password" name="password"/>
            <button className="d-grid gap-2 mt-2 offset-5" type="submit">Enviar</button>
        </form>
    );
};
 
export default LoginPage;