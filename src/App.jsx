import React, { useState } from 'react';
import './App.css';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

function App() {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleSwitchForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="App">

      <div className="signIn-signUp-container">
        {isSignUp ? <SignUp /> : <SignIn />}
        <p>
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <span className="link" onClick={handleSwitchForm}>
            {isSignUp ? "Sign_In/" : "Sign_Up/"}
          </span>
        </p>
      </div>
      
    </div>
  );
}

export default App;
