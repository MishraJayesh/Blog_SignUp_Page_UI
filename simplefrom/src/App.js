//import logo from './logo.svg';
import React,{useState}from 'react';
import './App.css';

function App() {
  
    const [form, setForm] = useState({
      Name: " ",
      Mobile: "91",
      Emails: " ",
      Password: " ",
      ConfirmPassword: " ",
    });

    function handleChange(e) {
      //console.log(e.target);
      const { name, value} = e.target;
      setForm({ ...form, [name]: value});

      let p = form.Password;
      let cp = form.ConfirmPassword;
    
      if(p.length<6){
        alert("Please make sure password is longer than 6 characters.")
        return false;
      }
      if(p !== cp){
        alert("Please make sure passwords match.")
        return false;
      }

    }

    return (
      <div className="container">
        <div className="brand-logo"></div>
        <div className="brand-title">JUST BLOGS...</div>
        <div className="inputs">
          <label>NAME</label>
          <input value ={form.Name} name = "Name" onChange={(e)=> handleChange(e)} type="text" placeholder="example@test.com"  required/>
          <label>MOBILE</label>
          <input value ={form.Mobile} name = "Mobile" onChange={(e)=> handleChange(e)} type="number" placeholder="example@test.com" required/>
          <label>EMAIL</label>
          <input value ={form.Emails} name = "Emails" onChange={(e)=> handleChange(e)} type="email" placeholder="example@test.com" required/>
          <label>PASSWORD</label>
          <input value ={form.Password} name = "Password" onChange={(e)=> handleChange(e)} type="password" placeholder="Min 6 charaters long" required/>
          <label>CONFIRM-PASSWORD</label>
          <input value ={form.ConfirmPassword} name = "ConfirmPassword" onChange={(e)=> handleChange(e)} type="password" placeholder="Min 6 charaters long" required/>
          <button type="submit">LOGIN</button>
        </div>
        <a href="https://learnings12654600.blogspot.com/2019/12/">MADE BY JAYESH</a>
      </div>
    );
  }

export default App;