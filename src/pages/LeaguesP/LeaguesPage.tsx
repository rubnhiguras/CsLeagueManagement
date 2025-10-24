import "../HomeP/HomePage.css";

const FootballLeagues = () => {
  
  const leagues = [
    {
      name: "Premier League",
      country: "Inglaterra",
      description:
        "La liga más seguida del mundo, con clubes como Manchester City, Liverpool y Arsenal.",
    },
    {
      name: "LaLiga",
      country: "España",
      description:
        "Cuna del fútbol técnico y de grandes clubes como Real Madrid, Barcelona y Atlético de Madrid.",
    },
    {
      name: "Serie A",
      country: "Italia",
      description:
        "Histórica por su táctica defensiva y por equipos legendarios como Juventus, Milan e Inter.",
    },
    {
      name: "Bundesliga",
      country: "Alemania",
      description:
        "Conocida por su ambiente en los estadios y su fútbol rápido e intenso. Bayern y Dortmund dominan.",
    },
    {
      name: "Ligue 1",
      country: "Francia",
      description:
        "La liga francesa combina talento joven y estrellas internacionales. PSG lidera el panorama.",
    },
    {
      name: "CONMEBOL Libertadores",
      country: "Sudamérica",
      description:
        "La competición de clubes más importante del continente. Pasión y rivalidades sin igual.",
    },
    {
      name: "CSLeague Aprenem",
      country: "España",
      description:
        "La competición de clubes más importante de Castelló de la plana. Pasión y rivalidades sin igual.",
    },
  ];

  return (
    <div className="home-page">
      {/* Sección de ligas */}
      <section className="features-section">
        {leagues.map((league, index) => (
          <div key={index} className="feature">
            <h3>{league.name}</h3>
            <p>
              <strong>{league.country}</strong> — {league.description}
            </p>
          </div>
        ))}
      </section>

      {/* CTA final */}
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <button className="cta-btn">Descubre más ligas</button>
      </div>
    </div>
  );
};

export default FootballLeagues;
