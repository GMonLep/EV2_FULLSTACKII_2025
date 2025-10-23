
import 'bootstrap/dist/css/bootstrap.min.css';
import Botoncito from "../components/Boton";


//imagenes
import destacado1 from '../assets/destacado1.webp';
import destacado2 from '../assets/destacado2.webp';
import destacado3 from '../assets/destacado3.webp';
import banner from '../assets/bannerPrincipal.avif'

function Inicio(){

    return(
        <div style={{paddingTop: '0', minHeight: '80vh'}}>
            {/**Sección Hero*/}
            <section className="bg-primary text-white py-5 ">
                <div className="row justify-content-center text-center">
                    <h1 className="display-2 fw-bold mb-2">Bienvenid@ a mi Tiendita </h1>
                    <img className="img-responsive w-50 img-thumbnail mb-5" src={banner} />
                    <div>
                    <button className="btn btn-light btn-lg fw-bold border-top-0 text-primary" onClick={() => (window.location.href = "/productos")}>Ver más productos</button>
                    </div>
                </div>
            </section>

            {/**Tarjetas*/}
            <section className="py-5">
                <div className="container text-center">
                    <h1 className="display-5 fw-bold ">Productos destacados</h1>
                    <p className="lead ">Lo más vendido esta temporada y lo mejor para tu closet.</p>
                </div>
                <div className="container">
                    <div className="row">
                        {/**Tarjetas individuales*/}

                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <div className="fs-1">$49.990</div>
                                    <h5 className="mb-3">Polera Crop Top Algódon</h5>
                                    <img className="img-fluid img-thumbnail h-50 mb-3" src={destacado1} />
                                    <Botoncito texto="Agregar a carrito" />
                                </div>
                            </div>
                        </div>
                        
                         <div className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <div className="fs-1">$22.990</div>
                                    <h5 className="mb-3">Pantalón Hombre Sport Stretch Gris</h5>
                                    <img className="img-fluid img-thumbnail h-50 mb-3" src={destacado2} />
                                    <Botoncito texto="Agregar a carrito" />
                                </div>
                            </div>
                        </div>
                         <div className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <div className="fs-1">$34.990</div>
                                    <h5 className="mb-3">Polera Asimetrica Cuello Redondo </h5>
                                    <img className="img-fluid img-thumbnail  mb-3" src={destacado3} />
                                    <Botoncito texto="Agregar a carrito" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-primary text-white py-5">
                 <div className="container text-center">
                    <h1 className="display-5 fw-bold ">Categorías</h1>
                    <p className="lead ">Tenemos diferentes categorías para explorar y cubrir todas tus necesidades. Encuentra lo que necesitas sólo aqui exclusivamente aquí y en ninguna parte más que aquí.</p>
                </div>
            </section>

             <section className="py-5 ">
                <div className="row justify-content-center text-center">
                    <h1 className="display-6 fw-bold mb-2">Ropa mujer</h1>

                </div>
            </section>
        </div>
    );
}
export default Inicio