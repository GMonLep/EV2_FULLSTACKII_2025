import 'bootstrap/dist/css/bootstrap.min.css';
import banner2 from '../assets/banner2.webp';
import banner3 from '../assets/banner3.jpg';

export default function Nosotros(){
    return(
        <div style={{ paddingTop: '0',paddingBottom: '0' ,minHeight: '80vh' }}>
      {/* SECCION ENCABEZADO */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold"> Sobre nosotros:</h1>
          <p className="lead">En la tiendita, creemos que la ropa no solo viste, sino que
            expresa quien eres. Nacimos con la idea de ofrecer prendas unicas,
            comodas y con estilo.</p>
            <p className="lead">Tenemos una gran variedad de prendas, de todas la tallas y para todas las temporadas. Justo aquí.</p>
            <img className="img-responsive w-100 img-thumbnail" src={banner2} />
          
        </div>
      </section>

      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">Nuestra Misión:</h1>
          <p className="lead">En la tiendita, nuestra mision es ofrecer moda de calidad que haga sentir a cada persona unica y segura de si misma. Creemos que la ropa no solo es un
            reflejo de estilo, sino también una forma de expresión personal.</p>
            <img className="img-responsive w-50 img-thumbnail mb-5" src={banner3} />
        </div>

        
      </section>

      
    
        </div>
    );
};