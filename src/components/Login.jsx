import React, { useState } from 'react';
//import firebase from '../firebase';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 /* const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in successfully!');
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };
  */
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button >Login</button>
      <a href="/signup">Don't have an account? Sign up here.</a>
    </div>
     
  );
};

export default Login;