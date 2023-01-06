import React, { useState } from 'react';
import './login.css';

export default function Login() {

    const [form, setForm] = useState({
        Emails: " ",
        Password: " ",
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    }
    function handleSubmit() {
        console.log(form);
    }

    return (
        <div className="cont">
            <div className="brand">LOGIN</div>
            <div>
                <label>EMAIL</label>
                <input value={form.Emails} name="Emails" onChange={(e) => handleChange(e)} type="email" placeholder="example@test.com" required />
                <label>PASSWORD</label>
                <input value={form.Password} name="Password" onChange={(e) => handleChange(e)} type="password" placeholder="Min 6 charaters long" required />
                <button type="submit" onClick={handleSubmit}>LOGIN</button>
            </div>
            <p className="description">Click The Below Link To Go To Our Web-page For Sign Up If You Don't Have Account</p>
            <a href="/webpage" className="link">Go To webpage</a>
        </div>
    );
}