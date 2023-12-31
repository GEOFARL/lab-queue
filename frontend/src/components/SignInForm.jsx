import { useState } from 'react';
import { HiEye, HiEyeSlash } from 'react-icons/hi2';

import Button from './Button';

import googleLogo from '../assets/google.png';
import githubLogo from '../assets/github.png';

const SignInForm = ({ onSubmit, data, setData, errors, setErrors }) => {
  const [hidePassword, setHidePassword] = useState(true);

  const onChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-full sing-up-form rounded-[25px] py-[48px] md:py-[64px] px-[32px] font-poppins">
      <h2 className="text-center text-[24px] sm:text-[28px] font-semibold capitalize mb-2">
        Welcome back
      </h2>
      <form
        className="max-w-[560px] mx-auto"
        onSubmit={onSubmit}
        noValidate
        id="sign-up-form"
      >
        <div className="form-control mb-5 relative">
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john_doe@gmail.com"
            onChange={onChange}
            value={data.email}
            className={`${errors.email ? 'input-error' : ''}`}
          />
          <div className="text-red-500 px-1 text-xs sm:text-base pt-2 -mb-3">
            {/* Not valid email */}
            {errors.email}
          </div>
        </div>

        <div className="form-control password relative mb-5">
          <label htmlFor="password">Password</label>
          <input
            type={`${hidePassword ? 'password' : 'text'}`}
            name="password"
            id="password"
            placeholder="••••••••••"
            onChange={onChange}
            value={data.password}
            className={`${errors.email ? 'input-error' : ''}`}
          />
          <div className="text-red-500 px-1 text-xs sm:text-base pt-2 -mb-3">
            {/* Password should contain at least one uppercase letter, one lowercase letter, and one number */}
            {errors.password}
          </div>
          <div
            onClick={() => {
              setHidePassword((prev) => !prev);
            }}
          >
            <HiEye
              size={'20px'}
              className={`absolute top-[44px] sm:top-[52px] right-[11px] cursor-pointer opacity-0 transition-opacity duration-200 ease ${
                hidePassword ? 'active-img' : ''
              }`}
            />
            <HiEyeSlash
              size={'20px'}
              className={`absolute top-[44px] sm:top-[52px] right-[11px] cursor-pointer opacity-0 transition-opacity duration-200 ease ${
                !hidePassword ? 'active-img' : ''
              }`}
            />
          </div>

          <a
            href="#"
            className="absolute text-[10px] sm:text-[12px] top-[13px] right-[12px] text-sky-600 hover:underline hover:underline-offset-2"
          >
            Forgot password?
          </a>
        </div>

        <div className="py-8 flex justify-center">
          <Button classes={'px-8 md:px-10 py-2 md:py-3'}>
            <span className="text-base sm:text-[18px]">
              Log in <strong>now</strong>
            </span>
          </Button>
        </div>

        <div className="flex justify-center items-center gap-4">
          <div className="border-t-[1px] opacity-40 flex-1"></div>
          <div>or</div>
          <div className="border-t-[1px] opacity-40 flex-1"></div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row items-center justify-evenly mt-5">
          <button className="flex items-center justify-center gap-2 bg-white px-3 py-2 rounded-2xl shadow cursor-pointer hover:ring-4 transition-all duration-150 text-sm sm:text-base">
            <img src={googleLogo} alt="google logo" />
            Continue with Google
          </button>
          <button className="flex items-center justify-center gap-2 bg-white px-3 py-2 rounded-2xl shadow cursor-pointer hover:ring-4 transition-all duration-150 text-sm sm:text-base">
            <img src={githubLogo} alt="github logo" />
            Continue with GitHub
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
