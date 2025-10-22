import { useEffect, useState } from 'react';
import './HomePage.css';
import packageJson from '../../../package.json';
import logo_white from '/src/assets/CSLeague_icon.png';

function HomePage() {
  // Actualiza el título de la página
  document.title = `${packageJson.title} Home`;

  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  // Detecta instalación o disponibilidad del prompt
  useEffect(() => {
    // Detectar si ya está instalada
    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;
    setIsInstalled(standalone);

    // Escuchar el evento beforeinstallprompt
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as any);
    };

    // Escuchar cuando la app se instala
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  // Acción para el botón "Añadir a pantalla de inicio"
  const handleAddToHomeScreen = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('Instalación aceptada');
      setIsInstalled(true);
    } else {
      console.log('Instalación cancelada');
    }
    setDeferredPrompt(null);
  };

  function toLogin() {
    window.location.href = '/Login';
  }

  return (
    <div id="home-page" className="home-page">
      <div id="headersection" className="hero-section">
        <div id="hero-text" className="hero-text">
          <h1>¡Vive el fútbol en Castelló!</h1>
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

          {/* Botón "Añadir a pantalla de inicio" */}
          {!isInstalled && deferredPrompt && (
            <button
              id="addToHomeScreenBtn"
              className="add-to-home-btn"
              onClick={handleAddToHomeScreen}
            > Instalar Aplicación
            </button>
          )}
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
            Consulta los horarios, resultados y próximas jornadas de la CSLeague
            en tiempo real. Toda la información oficial, actualizada al instante.
          </p>
        </div>
        <div className="feature">
          <i className="fas fa-chart-line"></i>
          <h3>Clasificaciones</h3>
          <p>
            Accede a tablas de posiciones, ranking de goleadores y estadísticas
            detalladas de cada jornada.
          </p>
        </div>
        <div className="feature">
          <i className="fas fa-mobile-alt"></i>
          <h3>Disponibilidad</h3>
          <p>
            CSLeague está disponible desde cualquier dispositivo. Sigue tu equipo,
            consulta resultados o administra el club desde tu móvil o PC.
          </p>
        </div>
      </div>

      <div id="contactsection" className="hero-section">
        <div className="hero-text">
          <h2>¿Cómo contactar?</h2>
          <p>
            A través de redes sociales &nbsp;
            <a
              href="https://www.instagram.com/csleague__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram CSLeague"
                width="15"
                height="15"
              />
              &nbsp;csleague__&nbsp;
            </a>
            <br />
            o de e-mail
            <a href="mailto:soporte@csleague.es">&nbsp;soporte@csleague.es</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
