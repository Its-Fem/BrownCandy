import { useState } from 'react';
import React from 'react';
import './SignUpComponents/Form.css'
import useForm from './SignUpComponents/useForm';
import Footer from '../Footer';
const SignIn = () => {
  const [data, setValues] = useState({});
  const { handleChange, handleSubmit, values, errors } = useForm(
       
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
            />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
            />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Log In
        </button>
      </form>  
      <Footer/>
    </div>
  );
 
};

export default SignIn;
