const Card = ({ title, text, icon }) => {
  return (
    <div className="p-6 flex flex-col gap-4 mx-auto max-w-[325px] card-gradient rounded-3xl shadow-md hover:shadow-2xl duration-500 transition-all hover:-translate-y-1 min-h-[240px]">
      <div className="flex items-center justify-between">
        <h4 className="font-poppins text-[20px] font-semibold capitalize">
          {title}
        </h4>
        <div className="ml-3">{icon}</div>
      </div>
      <p className="font-lato text-[18px] font-light leading-snug">{text}</p>
    </div>
  );
};

export default Card;
