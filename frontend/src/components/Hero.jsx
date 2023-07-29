import tickets from '../assets/tickets.png';

const Hero = () => {
  return (
    <div className="py-16">
      <div className="flex items-center justify-between flex-col md:flex-row">
        <div className="flex flex-col justify-center">
          <h1 className="font-poppins text-[50px] lg:text-[64px] font-bold capitalize">
            Stay ahead <br />{' '}
            <span className="text-gradient capitalize">with smart</span>
            <br /> queue creation
          </h1>

          <p className="max-w-[400px] lg:max-w-[515px] mt-6 font-lato text-[16px] leading-[23px] lg:text-[20px] lg:leading-[28.3px]">
            Your{' '}
            <span className="text-purple-500 font-semibold">Hassle-Free</span>{' '}
            Solution! it is the go-to platform for students looking to submit
            their labs with ease and efficiency. Say goodbye to long waiting
            lines and disorganized processes.
          </p>
        </div>

        <div className="flex-1 max-w-[340px] md:max-w-[400px] lg:max-w-[500px] ml-2 lg:ml-4">
          <img src={tickets} alt="tickets" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
