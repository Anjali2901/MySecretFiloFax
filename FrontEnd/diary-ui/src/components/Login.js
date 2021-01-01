import React from 'react'
import Form from './common/Form';

function Login() {
    const inputDatas = [
        {
            label: "Username",
            type: "text",
            placeholder: "Enter username or email",
        },
        {
            label: "Password",
            type: "password",
            placeholder: "Enter password",
        },
    ];
    return (
        <Form  headingText="Login" submitText="Login" inputDatas={inputDatas} />
    );
}

export default Login;
