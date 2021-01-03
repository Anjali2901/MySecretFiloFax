import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';

function Form({ headingText, legendText, submitText, inputDatas }) {
    const [formData, setFormData] = useState({});

    const handleChange = (name, value) => {
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = () => {
        console.log("Form", formData);
    };

    return (
        <Wrapper>
            <h2>{headingText}</h2>
            <fieldset>
                {legendText && <legend>{legendText}</legend>}
                {inputDatas.map((inputData) =>
                    <Input
                        key={inputData.label}
                        name={inputData.label}
                        labelText={inputData.label}
                        type={inputData.type}
                        placeholder={inputData.placeholder}
                        value={formData.labelText}
                        onInputChange={value => handleChange(inputData.label, value)}
                    />
                )}
                <SubmitButton onClick={handleSubmit}>{submitText}</SubmitButton>
            </fieldset>
        </Wrapper>
    );
}

export default Form;

const Wrapper = styled.div`
    margin: auto;
    width: 25%;
    h2 {
        text-align: center;
    }
    legend {
        font-weight: 700;
    }
`;

const SubmitButton = styled.button`
    background: rgba(69, 160, 73, 0.8);
    border: 1px solid rgba(69, 160, 73, 1);
    border-radius: 5px;
    box-shadow: 3px 3px rgba(120, 120, 120, 0.5);
    padding: 0.5rem 1rem;
    float: right;
    font-size: 16px;
    font-weight: 900;
    text-transform: uppercase;
    &:hover {
        border: 0;
        padding: 0.6rem 1.2rem;
        background: rgba(69, 160, 73, 0.9);
    }
    &:focus {
        box-shadow: 1px 1px rgba(120, 120, 120, 0.5);
    }
`;
