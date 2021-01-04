import React from 'react';
import styled from 'styled-components';

function Input({ name, labelText, type, placeholder, value, onInputChange }) {
    const handleChange = (event) => {
        onInputChange(event.target.value);
    }

    return (
        <InputWrapper>
            <label htmlFor={labelText}>{labelText}</label>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
            />
        </InputWrapper>
    );
}

export default Input;

const InputWrapper=styled.section`
    height: 5rem;
    label {
        display: block;
        padding: 0.3rem;
        font-weight: 800;
    }
    input {
        display: block;
        width: 50%;
        font-size: 16px;
        padding: 0.5rem;
        border: 0;
        border-bottom: 1px solid red;
        background: rgba(51, 188, 141, 0.2);
        &:focus {
            border: 1px solid #45a049;
        }
    }
`;
