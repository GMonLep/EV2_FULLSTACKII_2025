// importamos las fotos de cada noticia
import noticia1 from '../assets/noticia1.jpg';
import noticia2 from '../assets/noticia2.webp';
import noticia3 from '../assets/noticia3.jpg';


export default function Blog() {
  return (
    <div style={{ paddingTop: '0', minHeight: '80vh' }}>
      {/* SECCION ENCABEZADO */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold"> En este blog los los usuarios podran ver las últimas noticias de la moda.</h1>
          <p className="lead">Las últimas noticias de la moda.</p>
        </div>
      </section>

      {/* SECCION TARJETAS */}
      <div className="container py-4">
        <div className="row g-4">

            {/* INICIO TARJETA */}
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                <div className="card h-100" style={{ width: '100%', maxWidth: '400px' }}>
                    <div className="card-body text-center">
                        <div style={{width: '100%', height: '200px', display: 'flex', justifyContent: 'center',alignItems: 'center',}}>
                            <img className="img-fluid img-thumbnail"
                            src={noticia1}
                            style={{height: '100%', width: 'auto', objectFit: 'contain', }}/>
                        </div>
                        <h4 className="card-title mt-3">Título noticia</h4>
                        <p className="card-text">Descripción noticia</p>
                    </div>
                </div>
            </div>
            {/* FIN TARJETA */}
            

            {/* INICIO TARJETA */}
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                <div className="card h-100" style={{ width: '100%', maxWidth: '400px' }}>
                    <div className="card-body text-center">
                        <div style={{width: '100%', height: '200px', display: 'flex', justifyContent: 'center',alignItems: 'center',}}>
                            <img className="img-fluid img-thumbnail"
                            src={noticia2}
                            style={{height: '100%', width: 'auto', objectFit: 'contain', }}/>
                        </div>
                        <h4 className="card-title mt-3">Título noticia</h4>
                        <p className="card-text">Descripción noticia</p>
                    </div>
                </div>
            </div>
            {/* FIN TARJETA */}

             {/* INICIO TARJETA */}
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                <div className="card h-100" style={{ width: '100%', maxWidth: '400px' }}>
                    <div className="card-body text-center">
                        <div style={{width: '100%', height: '200px', display: 'flex', justifyContent: 'center',alignItems: 'center',}}>
                            <img className="img-fluid img-thumbnail"
                            src={noticia3}
                            style={{height: '100%', width: 'auto', objectFit: 'contain', }}/>
                        </div>
                        <h4 className="card-title mt-3">¡El diablo viste a la moda tendrá secuela!</h4>
                        <p className="card-text">
                            Sin exagerar, El diablo viste a la moda (The Devil Wears Prada por su título original) es la película sobre la industria de la moda más icónica de los años 2000. Estrenada en 2006 bajo la dirección de David Frenkel y con un inolvidable reparto liderado por Anne Hathaway, Mery Streep y Emily Blunt, la cinta fue una mirada divertida y sospechosamente apegada a la realidad del mundo editorial. Ahora, a casi dos décadas de aquel momento, se ha confirmado que una secuela viene en camino.
                            Fuentes de Disney confirmaron a Deadline la noticia, asegurando que Aline Brosh McKenna, la guionista de la cinta de 2006, realizará el guion nuevamente, mientras que Frenkel se encuentra en conversaciones para replicar su rol como director.
                        </p>
                    </div>
                </div>
            </div>
            {/* FIN TARJETA */}
        
        </div>
      </div>
    </div>
  );
}
