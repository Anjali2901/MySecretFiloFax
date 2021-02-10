import React from 'react';
import Form from './common/Form';
import styled from 'styled-components';
import Login from './Login';
import Signup from './Signup';
import Header from './Header'; 

function Home() {
    
    return (
        <>
 <div class="bg_image"
        style={{
       //   backgroundImage: 'url("./public/assets/images/UI_homepage_Cover.jpg")',        
         
        backgroundColor:'seagreen',backgroundSize: "cover"
        }}>
        <Header />
        {/* <Button>
        <div>  <Login /> </div>
        <div>  <Signup /> </div>
        </Button> */} 
          
        <Wrapper>
           <h1>"Welcome to secret keeper of your profound thoughts and bright ideas."</h1>
           <div>
                "I thought about how there are two types of secrets: the kind you want to keep in, and the kind you don't dare to let out. - Ally Carter"
            </div>
            <div>
                "A good friend keeps your secrets for you. A best friend helps you keep your own secrets. - Lauren Oliver " 
            </div>     
       </Wrapper>
       </div> 
       </>
    );
}

export default Home;

const Wrapper = styled.div`
font-size: 2em;
margin: 1em;
padding: 1em;
border-radius: 3px;
boxShadow: 0px 0px 150px 10px;
`; 