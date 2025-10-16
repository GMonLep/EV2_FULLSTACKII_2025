import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Inicio(){
    return(
        <div style={{paddingTop: '70px', minHeight: '80vh'}}>
            {/**Sección Hero*/}
            <section className="bg-primary text-white py-5">
                <div className="container text-center">
                    <h1 className="display-4">Bienvenido a mi Tiendita </h1>
                    <p className="lead">Aca van las fotitos</p>
                    <button className="btn btn-light btn-lg">Ver ofertas exclusivas</button>
                </div>
            </section>

            {/**Tarjetas*/}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        {/**Tarjetas individuales*/}

                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <div className="fs-1">$49.990</div>
                                    <h5>Polera Crop Top Algódon</h5>
                                    
                                </div>
                            </div>
                        </div>
                         <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <div className="fs-1">$22.990</div>
                                    <h5>Pantalón Hombre Sport Stretch Gris</h5>
                                    <img src="/public/ropa.1" class="img-fluid" alt="pantalon hombre"></img>
                                </div>
                            </div>
                        </div>
                         <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <div className="fs-1">$34.990</div>
                                    <h5>Polera Asimetrica Cuello Redondo </h5>
                                    <img src="tienda-online/public/ropa.1" class="img-fluid" alt="polera asimetrica"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Inicio