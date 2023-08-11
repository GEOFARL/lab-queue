import { useState } from 'react';
import SignInForm from '../components/SignInForm';
import { useSingInMutation } from '../slices/authApiSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCredentials } from '../slices/authSlice';
import { PulseLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const SignIn = () => {
  const [signIn, { isLoading }] = useSingInMutation();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn(data);
    console.log(res);
    if (res.data) {
      dispatch(setCredentials(res.data));
      navigate('/');
    }

    if (res.error) {
      toast.error(res?.error?.data?.message, { theme: 'colored' });
    }
  };

  return (
    <>
      <div className="w-full mx-auto max-w-[800px] py-16 sm:py-32">
        <SignInForm
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

export default SignIn;
