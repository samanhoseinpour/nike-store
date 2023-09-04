const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex flex-row items-center gap-2 text-xl leading-none bg-coral-red px-6 py-4 font-monsterrat uppercase shadow-md transition duration-150 ease-in-out hover:bg-orange-600 hover:shadow-lg hover:text-white focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-lg border-coral-red-2 rounded-full
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : 'bg-coral-red text-white border-coral-red'
      } rounded-full ${fullWidth && 'w-full'}`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
