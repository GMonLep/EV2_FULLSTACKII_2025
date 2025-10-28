// importamos las fotos de cada noticia
import noticia1 from '../assets/noticia1.avif';
import noticia2 from '../assets/noticia2.avif';
import noticia3 from '../assets/noticia3.jpg';
import noticia4 from '../assets/noticia4.avif';
import noticia5 from '../assets/noticia5.avif';
import noticia6 from '../assets/noticia6.avif';

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
                            <h4 className="card-title mt-3">Laagam apuesta por el calzado como nuevo eje de crecimiento</h4>
                            <p className="card-text">La firma española de moda femenina Laagam continúa reforzando su posicionamiento dentro del segmento premium accesible con el lanzamiento de su primera colección de sneakers, un movimiento estratégico que amplía su portafolio de producto y consolida su proceso de diversificación.
                                Bajo los nombres Billie y Serena, la marca presenta dos modelos que reinterpretan el estilo deportivo clásico a través de un enfoque contemporáneo.</p>
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
                      <h4 className="card-title mt-3">Los compradores de Hermes lo intentan de nuevo en la demanda antimonopolio por el bolso Birkin</h4>
                      <p className="card-text">Los consumidores estadounidenses que demandan a la casa de lujo francesa Hermes revisaron su demanda una vez más, con la esperanza de persuadir a un juez escéptico de que la compañía está obligando a los compradores a gastar miles de dólares en otros productos antes de poder comprar uno de sus famosos bolsos Birkin.</p>
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
            
            {/* INICIO TARJETA */}
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                <div className="card h-100" style={{ width: '100%', maxWidth: '400px' }}>
                    <div className="card-body text-center">
                        <div style={{width: '100%', height: '200px', display: 'flex', justifyContent: 'center',alignItems: 'center',}}>
                            <img className="img-fluid img-thumbnail"
                            src={noticia4}
                            style={{height: '100%', width: 'auto', objectFit: 'contain', }}/>
                        </div>
                        <h4 className="card-title mt-3">¡Chaqueta bomber para hombre es la prenda estrella del otoño!</h4>
                        <p className="card-text">
                            La chaqueta bomber nació en la Primera Guerra Mundial para mantener abrigados a los pilotos estadounidenses en vuelos de gran altitud. Con el tiempo se ha modernizado sin perder su esencia, convirtiéndose en una prenda icónica por su ligereza, ajuste moderado y ribetes elásticos en cuello, puños y cintura. Hoy es una pieza versátil que combina estilo y funcionalidad, adaptable tanto a looks casuales como formales.
                        </p>
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
                            src={noticia5}
                            style={{height: '100%', width: 'auto', objectFit: 'contain', }}/>
                            </div>
                            <h4 className="card-title mt-3">¡Un otoño a rombos: cómo combinar el estampado geométrico más deseado!</h4>
                            <p className="card-text">
                                Este otoño 2025 contar con el beneplácito de Miuccia Prada en sus últimas colecciones hace que la balanza gire de manera rotunda a su favor. Miu Miu tiene la autoría del jersey más buscado de la temporada (ahora también en versión rebeca, gorro y calcetines) y ha contagiado a esa pasarela alternativa que es el street style de su espíritu preppy, con un sinfín de reveladores estilismos para actualizarlo más allá de su popularidad en el campus.
                            </p>
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
                            src={noticia6}
                            style={{height: '100%', width: 'auto', objectFit: 'contain', }}/>
                        </div>
                    <h4 className="card-title mt-3">¡Stéphane Rolland será el diseñador invitado de la Barcelona Bridal Fashion Week 2026!</h4>
                    <p className="card-text">
                        Stéphane Rolland, una de las figuras más destacadas de la Alta Costura parisina, debutará en España como protagonista de la décima edición de la Barcelona Bridal Night, el evento central de la Barcelona Bridal Fashion Week (BBFW) 2026, que se celebrará del 22 al 26 de abril en el recinto de Montjuïc de Fira de Barcelona.
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
