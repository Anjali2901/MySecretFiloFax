import React from 'react';

export default function Signup() {
    return (  
        <form>
        <h2>Sign Up</h2>
        <fieldset>
          <legend>Create Account</legend>
          <ul>
            <div>
              <label for="username">Username </label>
              <input type="text" id="username" placeholder="Enter username"  required/>
            </div>
            <div>
              <label for="email">Email Id </label>
              <input type="email" id="email" placeholder="Enter email"  required/>
            </div>
            <div>
              <label for="password">Password </label>
              <input type="password" id="password" placeholder="Enter password" required/>
            </div>
          </ul>
          
        <button>Submit</button>
        <button type="button" id="signup">Have an Account?</button>
        </fieldset>
      </form>
    
        );
}
