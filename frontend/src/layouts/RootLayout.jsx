import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styles from '../styles';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray w-full flex flex-col">
      <div className={`${styles.flexCenter} px-8 md:px-16`}>
        <div className="w-full xl:max-w-[1100px]">
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexCenter} px-8 md:px-16`}>
        <div className="w-full xl:max-w-[1100px] relative">
          {/* Background blurred circles */}
          <div className="w-[269px] h-[269px] bg-fuchsia-600 bg-opacity-80 rounded-full blur-[200px] absolute -top-[90px] -left-[13.5rem] z-0" />
          <div className="w-[269px] h-[269px] bg-black rounded-full blur-[518px] absolute top-[450px] right-0 md:-right-[75px] z-0" />
          <Outlet />
        </div>
      </div>

      <div className={`flex justify-center items-bottom px-8 md:px-16 mt-auto`}>
        <div className="w-full xl:max-w-[1100px] pt-16">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
