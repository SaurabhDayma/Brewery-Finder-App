// SignUp.js
import React, { useState } from 'react';
//import firebase from '../firebase';
//import './styles.css';

const SignUp = () => {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 /* const handleSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log('User registered successfully!');
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };
  */

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button>Sign Up</button>
      <a href="/login">Already have an account? Login here.</a>
    </div>
  );
};
export default SignUp;