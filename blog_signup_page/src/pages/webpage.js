import React, { useState } from 'react';
import './webpage.css';

export default function Homepage() {

  const [form, setForm] = useState({
    Name: " ",
    Mobile: "91",
    Emails: " ",
    Password: " ",
    ConfirmPassword: " ",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }
  function handleSubmit() {
    console.log(form);
  }

  return (
    <div>
      <div className="container">
        <div className="brand-title">JUST BLOGS...</div>
        <div className="inputs">
          <label>NAME</label>
          <input value={form.Name} name="Name" onChange={(e) => handleChange(e)} type="text" placeholder="example@test.com" required />
          <label>MOBILE</label>
          <input value={form.Mobile} name="Mobile" onChange={(e) => handleChange(e)} type="number" placeholder="example@test.com" required />
          <label>EMAIL</label>
          <input value={form.Emails} name="Emails" onChange={(e) => handleChange(e)} type="email" placeholder="example@test.com" required />
          <label>PASSWORD</label>
          <input value={form.Password} name="Password" onChange={(e) => handleChange(e)} type="password" placeholder="Min 6 charaters long" required />
          <label>CONFIRM-PASSWORD</label>
          <input value={form.ConfirmPassword} name="ConfirmPassword" onChange={(e) => handleChange(e)} type="password" placeholder="Min 6 charaters long" required />
          <button type="submit" onClick={handleSubmit}>SIGN-UP</button>
        </div>
      </div>
    </div>
  );
}
