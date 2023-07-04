import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logo from '../Images/Logo.svg';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/", {
        email,
        password
      });

      if (email === "admin" && password === "admin") {
        navigate("/HomeAdmin");
      } else if (response.data === "exist") {
        navigate("/Home", { state: { id: email } });
      } else if (response.data === "notexist") {
        alert("User has not signed up");
      }
    } catch (error) {
      alert("Wrong details");
      console.log(error);
    }
  }

  return (
    <div>
      <div style={{ backgroundImage: "url(/Images/bg)" }}>
        <div style={{ fontWeight: '700', fontSize: '40px', textAlign: 'center', marginTop: '60px' }}>
          “Expand Your Horizons with <br /> Every Turn of the Page”
        </div>
        <div style={{ backgroundColor: 'black', width: '470px', height: '320px', margin: 'auto', borderRadius: '30px', marginTop: '30px' }}>
          <img
            src={Logo}
            alt=""
            style={{ marginLeft: '42%', marginTop: '15px', height: '90px' }}
          />
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            style={{ backgroundColor: 'white', width: '425px', height: '60px', borderRadius: '20px', marginTop: '15px', marginBottom: '30px', marginLeft: '22px', paddingLeft: '50px', color: '#D4D0D0' }}
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            style={{ backgroundColor: 'white', width: '425px', height: '60px', borderRadius: '20px', marginTop: '4px', marginLeft: '22px', paddingLeft: '50px', color: '#D4D0D0' }}
          />
        </div>
        <button type='submit' onClick={submit} style={{ backgroundColor: 'black', marginLeft: '46.8%', marginTop: '50px', borderRadius: '15px', fontWeight: '500', padding: '5px 15px 5px 15px', fontSize: '20px', color: 'white' }}>Login</button>
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          Don't have an account? <a href="/Signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}
