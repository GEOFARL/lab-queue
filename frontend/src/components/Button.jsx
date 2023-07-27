const Button = ({ children, alternative }) => {
  return (
    <button
      className={`button-gradient ${
        !alternative ? 'px-8 py-2' : ''
      } rounded-full`}
    >
      {alternative ? (
        <div className="bg-gray px-[26px] py-2 rounded-full m-[3px]">
          {children}
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
