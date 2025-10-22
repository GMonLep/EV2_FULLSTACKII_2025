export default function Botoncito({ texto, onClick, type = "button", ...rest }) {
  return (
    <button
      className="btn btn-primary"
      type={type} 
      onClick={onClick}
      {...rest}
    >
      {texto}
    </button>
  );
}