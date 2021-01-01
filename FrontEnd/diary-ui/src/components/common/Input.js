import React from 'react';
import styled from 'styled-components';

function Input({ labelText, type, placeholder }) {
    return (
        <InputWrapper>
            <label for={labelText}>{labelText} </label>
            <input type={type} placeholder={placeholder}  required/>
        </InputWrapper>
    );
}

export default Input;

const InputWrapper=styled.div`
`;
