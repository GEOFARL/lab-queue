const Button = ({ children, alternative, classes }) => {
  return (
    <button
      className={`button-gradient ${
        !alternative ? 'px-6 py-1.5 md:px-8 md:py-2' : ''
      } rounded-full duration-300 transition-all hover:-translate-y-1 hover:shadow-md ${classes}`}
    >
      {alternative ? (
        <div className="bg-gray px-[20px] py-1.5 md:px-[26px] md:py-2 rounded-full m-[3px]">
          {children}
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
