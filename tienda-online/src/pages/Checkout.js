import Tarjetas from '../assets/tarjetas.jpg';

export default function Checkout(){
    return(
        <div style={{paddingTop: '0', minHeight: '80vh' }}>
        <section className="bg-primary text-white py-5">
            <div className="container text-center">
            <h1 className="display-5 fw-bold ">Finalizar compra</h1>
            <p className="lead ">Por favor ingrese los datos de su tarjeta para finalizar compra.</p>
            </div>
        </section>

         <div className="container py-4 justify-content-center w-50">
          <img className="img-fluid img-thumbnail"
          src={Tarjetas}
          style={{height: '100%', width: 'auto', objectFit: 'contain', }}/>
          <form >
            <div class="form-group mt-5">
              <label for="nroTarjeta">Numero de tarjeta</label>
              <input type="text" class="form-control" id="nroTarjeta"/>
              <small class="form-text text-muted">Nunca compartiremos tus datos.</small>
            </div>
            <div class="container row  p-5">
              <div className="container col-5">
                <label for="fechaVen">Fecha vencimiento</label>
                <input type="date" class="form-control" id="fechaVen"/>
              </div>
              <div className="container col-5">
                <label for="CVV">CVV</label>
                <input type="password" class="form-control" id="CVV"/>
              </div>
            </div>
            <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" id="aceptoTerminos"/>
                  <label class="form-check-label" for="aceptoTerminos">He leído y acepto los Términos y Condiciones.</label>
            </div>
            
                  <button type="submit" class="btn btn-primary mt-5 btn-lg fw-bold">Finalizar compra</button>
            </form>
                     </div>
                         </div>
    );
};