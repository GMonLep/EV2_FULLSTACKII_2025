export default function Usuario(){
    return(
     <div style={{paddingTop: '0', minHeight: '80vh'}}>
        <section className="bg-primary text-white py-5">
                 <div className="container text-center">
                    <h1 className="display-5 fw-bold ">Monitoreo usuarios</h1>
                    <p className="lead ">Portal diseñado para monitorear y editar información de usuarios registrados, cualquier acción tomada por el administrador es definitiva. Por favor asegurarse de que la información editada esté correcta antes de confirmar.</p>
                </div>
            </section>
      <div className="row text-center py-3">
        <span className="col">1 of 3</span>
        <span className="col-sm-6" >2 of 3 (wider)</span>
        <span className="col">3 of 3</span>
      </div>
    </div>
    );
}