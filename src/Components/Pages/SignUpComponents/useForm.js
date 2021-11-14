import { useState, useEffect,} from 'react';

export const useForm = (Callback,validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
    });
    
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting){
         Callback(values);
      }
    },
    [errors]
  );
  return { handleChange, handleSubmit, values, errors};

};

export default useForm;
