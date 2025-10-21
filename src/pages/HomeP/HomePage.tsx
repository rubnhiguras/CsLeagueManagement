import './HomePage.css'
import packageJson from '../../../package.json';
import logo_white from '/src/assets/CSLeague_icon.png';

function HomePage() {

    document.title = document.title = packageJson.title + ' ' + 'Home';

    function toLogin() {
        window.location.href = '/Login';
    }

    // const logo_white = '/src/assets/CSLeague_icon.png'
    //<svg width={50} xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 104.6" transform="matrix(1, 0, 0, 1, 0, 0)"> <g><path d="M72.57,19.81L72.57,19.81c2.3,2.3,2.35,6.01,0.1,8.26l-1.21,1.21l9.75,9.59L56.55,62.64l-9.5-9.84L10.02,89.83 c-2.24,2.24-5.96,2.2-8.26-0.1l0,0c-2.3-2.3-2.35-6.01-0.1-8.26l37.17-37.17l-7.44-7.73L54.7,12.79l8.35,8.19l1.28-1.28 C66.56,17.46,70.27,17.51,72.57,19.81L72.57,19.81L72.57,19.81z M122.88,99.89c0,2.59-2.06,4.71-4.59,4.71l-53.01,0.01 c-2.53,0-4.59-2.12-4.59-4.71c0-2.54,2.02-4.71,4.59-4.71h5.65c-1.42-0.8-2.39-2.35-2.39-4.13c0-2.54,2.02-4.71,4.59-4.71l37.3,0 c2.53-0.01,4.6,2.11,4.6,4.7l0,0c0,1.78-0.98,3.34-2.41,4.14h5.66C120.82,95.18,122.88,97.3,122.88,99.89L122.88,99.89 L122.88,99.89z M53.68,1.4L53.68,1.4c1.83,1.83,1.87,4.79,0.08,6.57l-27.2,27.2c-1.79,1.79-4.74,1.75-6.57-0.08l0,0 c-1.83-1.83-1.87-4.79-0.08-6.57l27.2-27.2C48.9-0.47,51.85-0.43,53.68,1.4L53.68,1.4L53.68,1.4z M92.35,40.06L92.35,40.06 c1.83,1.83,1.87,4.79,0.08,6.57l-27.2,27.2c-1.79,1.79-4.74,1.75-6.57-0.08l0,0c-1.83-1.83-1.87-4.79-0.08-6.57l27.2-27.2 C87.56,38.19,90.51,38.23,92.35,40.06L92.35,40.06L92.35,40.06z" fill="#fffefe" /></g></svg>;

    return (
        <div id="home-page" className="home-page">
            <div id="headersection" className="hero-section">
                <div id="hero-text" className="hero-text">
                    <h1>
                        ¡Vive el fútbol en Castelló!
                    </h1>
                    <h1>
                        <img src={logo_white} width={190} alt="CSLeague logo" />
                    </h1>
                    <div id="call-to-action" className="call-to-action">
                        <div className="cta-text">
                            <button id="cta-btn" className="cta-btn" onClick={toLogin}>
                                Entrar en la plataforma
                            </button>
                        </div>
                    </div>
                </div>
                <div id="hero-image" className="hero-image">
                    {/* Aquí puedes mostrar una imagen del logo o del campo de la CSLeague */}
                </div>
            </div>

            <div id="features-section" className="features-section">

                <div className="feature">
                    <i className="fas fa-calendar-check"></i>
                    <h3>Jornadas</h3>
                    <p>
                        Consulta los horarios, resultados y próximas jornadas de la CSLeague en tiempo real. Toda la información oficial, actualizada al instante.
                    </p>
                </div>
                <div className="feature">
                    <i className="fas fa-chart-line"></i>
                    <h3>Clasificaciones</h3>
                    <p>
                        Accede a tablas de posiciones, ranking de goleadores y estadísticas detalladas de cada jornada.
                    </p>
                </div>
                <div className="feature">
                    <i className="fas fa-mobile-alt"></i>
                    <h3>Disponibilidad</h3>
                    <p>
                        CSLeague está disponible desde cualquier dispositivo. Sigue tu equipo, consulta resultados o administra el club desde tu móvil o PC.
                    </p>
                </div>
            </div>

            <div id="contactsection" className="hero-section">
                <div className="hero-text">
                    <h2>¿Cómo contactar?</h2> 
                    <p> A través de redes sociales &nbsp;
                        <a href="https://www.instagram.com/csleague__/" target="_blank" rel="noopener noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                                alt="Instagram CSLeague"
                                width="15"
                                height="15"  ></img>
                            &nbsp;csleague__&nbsp;
                        </a>
                        <br/>o de e-mail
                            <a href='mailto:soporte@csleague.es' >&nbsp;soporte@csleague.es</a>
                    </p>  
                </div>
            </div>
        </div>


    );
};

export default HomePage;