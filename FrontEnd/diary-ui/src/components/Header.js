import React from 'react';
import styled from 'styled-components';
function Header() { 
    return ( 
        <div className="navBar"> 
            <Wrapper>
                <div className="home" href="#">Home &nbsp; </div> 
                <div className="aboutus" href="#">About us &nbsp; </div>
                <div className="contact" href="#">Contact &nbsp;</div>
            </Wrapper>
        </div>
    );
}
export default Header;

const Wrapper = styled.div`
    font-size: 1.2em; 
    padding: 30px 30px ;
    text-align: center;
    background-color: #111;
    color: white;   
    cursor: pointer;
    font-weight: bold;
    display: flex;
`; 
