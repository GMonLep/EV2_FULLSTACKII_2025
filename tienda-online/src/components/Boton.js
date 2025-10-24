

export default function Botoncito({ texto, onClick, type = "button" , idModal}, ...rest) {
  return (

    <button
      className="btn btn-primary"
      type={type} 
      onClick={onClick}
      {...rest}
      data-bs-toggle="modal" 
      data-bs-target={idModal}
    >
      {texto}
    </button>
    
  );
}