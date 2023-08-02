import { useState } from 'react';
import SingUpForm from '../components/SignUpForm';
import { useSignUpMutation } from '../slices/authApiSlice';
import validator from 'validator';
import { PulseLoader } from 'react-spinners';

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
    serverError: '',
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    let haveErrors = false;

    for (let [key, value] of formData.entries()) {
      switch (key) {
        case 'name': {
          if (value.trim().length === 0) {
            setErrors((prev) => ({
              ...prev,
              [key]: 'Please, enter your name',
            }));
            haveErrors = true;
          } else if (!validator.isAlphanumeric(value.replace(/\s/g, ''))) {
            setErrors((prev) => ({
              ...prev,
              [key]: 'Name should only contain alphabets and spaces',
            }));
            haveErrors = true;
          }
          break;
        }
        case 'email': {
          if (value.trim().length === 0) {
            setErrors((prev) => ({
              ...prev,
              [key]: 'Please, enter your email',
            }));
            haveErrors = true;
          } else if (!validator.isEmail(value)) {
            setErrors((prev) => ({
              ...prev,
              [key]: 'Not valid email',
            }));
            haveErrors = true;
          }
          break;
        }
        case 'password': {
          if (value.trim().length === 0) {
            setErrors((prev) => ({
              ...prev,
              [key]: 'Please, enter a password',
            }));
            haveErrors = true;
          } else if (
            !(
              validator.isLength(value, { min: 8 }) &&
              /[a-z]/.test(value) &&
              /[A-Z]/.test(value) &&
              /\d/.test(value)
            )
          ) {
            setErrors((prev) => ({
              ...prev,
              [key]:
                'Password should contain at least one uppercase letter, one lowercase letter, and one number',
            }));
            haveErrors = true;
          }
          break;
        }
        case 'confirmPassword': {
          if (!validator.equals(formData.get('password'), value)) {
            setErrors((prev) => ({
              ...prev,
              [key]: 'Passwords do not match',
            }));
            haveErrors = true;
          }
          break;
        }
        default: {
          break;
        }
      }
    }

    if (!e.target.querySelector('.checkbox').checked) {
      setErrors((prev) => ({
        ...prev,
        termsPrivacy: 'Please, agree to the Terms and Privacy',
      }));
      haveErrors = true;
    }
    if (haveErrors) {
      return;
    }

    const res = await signUp(data);

    if (!res.ok) {
      setErrors((prev) => ({
        ...prev,
        serverError: res?.error?.data?.message,
      }));
    }
    console.log(res);
  };

  return (
    <>
      <div className="w-full mx-auto max-w-[800px] py-16 sm:py-32">
        <SingUpForm
          data={data}
          setData={setData}
          onSubmit={onSubmit}
          errors={errors}
          setErrors={setErrors}
        />
      </div>
      {isLoading && (
        <div className="fixed inset-0 bg-zinc-700 bg-opacity-70 flex justify-center items-center">
          <PulseLoader
            color={'#330430'}
            size={50}
            aria-label="Loading Spinner"
          />
        </div>
      )}
    </>
  );
};

export default SignUp;
