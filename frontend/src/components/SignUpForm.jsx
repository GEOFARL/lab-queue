import { useState } from 'react';
import { HiEye, HiEyeSlash } from 'react-icons/hi2';

const SignUpForm = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  return (
    <div className="w-full sing-up-form rounded-[25px] p-[33px] font-poppins">
      <h2 className="text-center text-[24px] sm:text-[28px] font-semibold capitalize mb-2">
        Create an account
      </h2>
      <div className="max-w-[560px] mx-auto">
        <div className="form-control mb-5">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Alek228" />
        </div>

        <div className="form-control mb-5">
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john_doe@gmail.com"
          />
        </div>

        <div className="form-control password relative mb-5">
          <label htmlFor="password">Password</label>
          <input
            type={`${hidePassword ? 'password' : 'text'}`}
            name="password"
            id="password"
            placeholder="••••••••••"
          />
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

        <div className="form-control password relative mb-5">
          <label htmlFor="confirm-password">Confirm password</label>
          <input
            type={`${hideConfirmPassword ? 'password' : 'text'}`}
            name="confirm-password"
            id="confirm-password"
            placeholder="••••••••••"
          />
          <div
            onClick={() => {
              setHideConfirmPassword((prev) => !prev);
            }}
          >
            <HiEye
              size={'20px'}
              className={`absolute top-[44px] sm:top-[52px] right-[11px] cursor-pointer opacity-0 transition-opacity duration-200 ease ${
                hideConfirmPassword ? 'active-img' : ''
              }`}
            />
            <HiEyeSlash
              size={'20px'}
              className={`absolute top-[44px] sm:top-[52px] right-[11px] cursor-pointer opacity-0 transition-opacity duration-200 ease ${
                !hideConfirmPassword ? 'active-img' : ''
              }`}
            />
          </div>
        </div>

        <div className="">
          <input
            type="checkbox"
            id="agree-terms"
            className="mr-3 bg-[#E3D2E4]"
          />
          <label htmlFor="agree-terms">
            I agree to the{' '}
            <a href="#" className="underline">
              Terms & Privacy
            </a>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
