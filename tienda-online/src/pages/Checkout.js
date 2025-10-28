
import Botoncito from "../components/Boton";

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
        
              
                      <form >
  <div class="form-group ">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                  
            
        </div>
        </div>
    );
};