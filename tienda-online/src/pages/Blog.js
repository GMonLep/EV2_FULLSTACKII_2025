// importamos las fotos de cada noticia
import noticia1 from '../assets/noticia1.jpg'

export default function Blog() {
  return (
    <div style={{ paddingTop: '0', minHeight: '80vh' }}>
      {/* Sección del encabezado */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">Las últimas noticias</h1>
          <p className="lead">Las últimas noticias de la moda.</p>
        </div>
      </section>

      {/* Sección de tarjetas */}
      <div className="container py-4">
        <div className="row g-4">
         

           {/* INICIO TARJETA*/}
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <div className="card h-100" style={{ width: '100%', maxWidth: '400px' }}>
              <div className="card-body text-center">
                <img
                  className="card-img-top w-50 img-fluid img-thumbnail"
                  src={noticia1}
                  alt="Noticia 2"
                />
                <h4 className="card-title mt-3">¡El diablo viste a la moda tendrá secuela!</h4>
                <p className="card-text">
                  Sin exagerar, "El diablo viste a la moda" (The Devil Wears Prada por su título
                  original) es la película sobre la industria de la moda más icónica de los años
                  2000. Estrenada en 2006 bajo la dirección de David Frenkel y con un inolvidable
                  reparto liderado por Anne Hathaway, Meryl Streep y Emily Blunt.
                </p>
              </div>
            </div>
          </div>
          {/**FIN TARJETA */}

            {/* INICIO TARJETA*/}
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <div className="card h-100" style={{ width: '100%', maxWidth: '400px' }}>
              <div className="card-body text-center">
                <img
                  className="card-img-top w-50 img-fluid img-thumbnail"

                  src={noticia1}

                  
                  alt="Noticia 2"
                />
                <h4 className="card-title mt-3">Titulo noticia</h4>
                <p className="card-text">
                  Descripcion noticia
                </p>
              </div>
            </div>
          </div>
          {/**FIN TARJETA */}



        
        </div>
      </div>
    </div>
  );
}
