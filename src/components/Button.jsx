const Button = ({ label, iconURL }) => {
  return (
    <button className="flex flex-row items-center gap-2 text-xl leading-none bg-coral-red px-6 py-4 font-monsterrat uppercase text-white shadow-md transition duration-150 ease-in-out hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-lg border-coral-red-2 rounded-full">
      {label}
      <img src={iconURL} alt="right arrow" />
    </button>
  );
};

export default Button;
