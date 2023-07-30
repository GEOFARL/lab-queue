import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center gap-4 md:gap-0 md:justify-between p-4 border-t-2 border-t-stone-400">
      <div className="sm:flex gap-2 px-2 md:px-4 text-sm md:text-base lg:text-lg">
        <div className="flex justify-center gap-[8px] sm:gap-[12px] md:gap-[17px]">
          <p>Copyright</p>
          <p>&copy;</p>
          <p>2023 LabQueue.</p>
        </div>
        <p className="text-center">All rights Reserved</p>
      </div>

      <div className="flex gap-[22px]">
        <a href="https://www.facebook.com/" target="blank">
          <FaFacebook
            size={'24px'}
            className="hover:text-purple-400 transition-all duration-300"
          />
        </a>
        <a href="https://www.instagram.com/" target="blank">
          <FaInstagram
            size={'24px'}
            className="hover:text-purple-400 transition-all duration-300"
          />
        </a>
        <a href="https://www.linkedin.com/" target="blank">
          <FaLinkedin
            size={'24px'}
            className="hover:text-purple-400 transition-all duration-300"
          />
        </a>
        <a href="https://www.twitter.com/" target="blank">
          <FaTwitter
            size={'24px'}
            className="hover:text-purple-400 transition-all duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
