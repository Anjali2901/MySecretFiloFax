import React from 'react';

export default function Login() {
    return(
        <form>
        <h2>Login</h2>
        <fieldset>
          <ul>
            <div>
              <label for="username">Username </label>
              <input type="text" id="username" placeholder="Enter username or email" required/>
            </div> 
            <div>
              <label for="password">Password </label>
              <input type="password" id="password" placeholder="Enter password" required/>
            </div>
          </ul>
          
        <button type="submit" id="login">Login</button> 
        </fieldset>
      </form>
    
    );
}