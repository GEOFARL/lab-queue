import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styles from '../styles';

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray w-full">
      <div className={`${styles.flexCenter} px-8 md:px-16`}>
        <div className="w-full xl:max-w-[1100px]">
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexCenter} px-8 md:px-16`}>
        <div className="w-full xl:max-w-[1100px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
