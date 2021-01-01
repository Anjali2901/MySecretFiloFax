import React from 'react';
import styled from 'styled-components';
import Input from './Input';

function Form({ headingText, legendText, submitText, inputDatas }) {
    return (
        <Wrapper>
            <h2>{headingText}</h2>
            <fieldset>
                {legendText && <legend>{legendText}</legend>}
                {inputDatas.map((inputData) =>
                    <Input
                        labelText={inputData.label}
                        type={inputData.type}
                        placeholder={inputData.placeholder}
                    />
                )}
                <button>{submitText}</button>
            </fieldset>
        </Wrapper>
    );
}

export default Form;

const Wrapper = styled.div`
`;
