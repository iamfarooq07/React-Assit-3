function Buttons({ text, onClick, value, className }) {
  return (
    <button
      value={value}
      onClick={onClick}
      className={`text-white text-xl font-semibold py-3 rounded-2xl shadow-md active:scale-95 transition-all duration-200 ${className}`}
    >
      {text}
    </button>
  );
}

export default Buttons;
