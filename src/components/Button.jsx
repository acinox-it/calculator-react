const Button = ({ label, onClick }) => (
  <button
    onClick={() => onClick(label)}
    className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 rounded shadow"
  >
    {label}
  </button>
);

export default Button;
