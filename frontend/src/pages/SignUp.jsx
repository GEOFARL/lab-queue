import { useState } from 'react';
import SingUpForm from '../components/SignUpForm';
import { useSignUpMutation } from '../slices/authApiSlice';

const SignUp = () => {
  const [signUp, { isLoading }] = useSignUpMutation();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsPrivacy: '',
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await signUp(data);
    console.log(res);
  };

  return (
    <div className="w-full mx-auto max-w-[800px] py-16 sm:py-32">
      <SingUpForm
        data={data}
        setData={setData}
        onSubmit={onSubmit}
        errors={errors}
      />
    </div>
  );
};

export default SignUp;
