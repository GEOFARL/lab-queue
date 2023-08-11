import { useState } from 'react';
import SingUpForm from '../components/SignUpForm';
import { useSignUpMutation } from '../slices/authApiSlice';
import validator from 'validator';
import { PulseLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';

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

  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkForErrors = () => {
    let haveErrors = false;
    const formData = new FormData(document.getElementById('sign-up-form'));
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
          } else {
            setErrors((prev) => ({
              ...prev,
              [key]: '',
            }));
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
          } else {
            setErrors((prev) => ({
              ...prev,
              [key]: '',
            }));
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
          } else {
            setErrors((prev) => ({
              ...prev,
              [key]: '',
            }));
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
          } else {
            setErrors((prev) => ({
              ...prev,
              [key]: '',
            }));
          }
          break;
        }
        default: {
          break;
        }
      }
    }

    return haveErrors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    let haveErrors = checkForErrors();

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

    if (res.data) {
      dispatch(setCredentials(res.data));
      navigate('/');
    }

    if (res.error) {
      toast.error(res?.error?.data?.message, {
        theme: 'colored',
      });
      return;
    }
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
          submitted={submitted}
          checkForErrors={checkForErrors}
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
