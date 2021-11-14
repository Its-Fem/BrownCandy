import React, { useState } from 'react';
import SignUp from './SignUp';
import FormSuccess from './SignUpComponents/FormSuccess';

function Register() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitForm(values) {
      setIsSubmitted(true);
        console.log(values);
    }
  return (
    <div>
       {!isSubmitted ? (
          <SignUp submitForm={(values) => submitForm(values)} />
        ) : (
          <FormSuccess />
        )}
    </div>
  )
}

export default Register
