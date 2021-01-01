import React from 'react'
import Form from './common/Form';

function Signup() {
    const inputDatas = [
        {
            label: "Username",
            type: "text",
            placeholder: "Enter username",
        },
        {
            label: "Email Id",
            type: "email",
            placeholder: "Enter email",
        },
        {
            label: "Password",
            type: "password",
            placeholder: "Enter password",
        },
    ];
    return (
        <Form
            headingText="Sign Up"
            legendText="Create Account"
            submitText="Sign up"
            inputDatas={inputDatas}
        />
    );
}

export default Signup;