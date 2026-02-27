import React from "react";

function Projects() {
  return (
    <section id="projects" className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Projects</h2>
      </div>

      <div className="row g-4">

        {/* Wanderlust */}
        <div className="col-md-6">
          <div className="card project-card h-100 shadow-sm ">
            <div className="card-body">
              <h4 className="fw-bold">Wanderlust</h4>
              <p className="badge bg-dark mb-3">
                Node.js • Express • MongoDB • Bootstrap
              </p>
              <p className="text-muted">
                Full-stack hotel listing platform with authentication,
                image uploads, map integration and data management.
              </p>

              <div className="mt-3">
                <a
                  href="https://majorprojectwanderlust-uu9y.onrender.com/listings"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark btn-sm me-2"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/sujay-707/MajorProjectWanderLust"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark btn-sm"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CineLock */}
        <div className="col-md-6">
          <div className="card project-card h-100 shadow-sm ">
            <div className="card-body">
              <h4 className="fw-bold">CineLock</h4>
              <p className="badge bg-primary mb-3">
                React • JavaScript • Bootstrap
              </p>
              <p className="text-muted">
                Movie ticket booking UI with seat selection, QR tickets
                and payment simulation.
              </p>

              <div className="mt-3">
                <a
                  href="https://cinelockz.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark btn-sm me-2"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/sujay-707/CineLockz"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark btn-sm"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Simon Game */}
        <div className="col-md-6">
          <div className="card project-card h-100 shadow-sm ">
            <div className="card-body">
              <h4 className="fw-bold">Simon Game</h4>
              <p className="badge bg-success mb-3">
                HTML • CSS • JavaScript
              </p>
              <p className="text-muted">
                Interactive memory game that generates random sequences
                for users to replicate.
              </p>

              <div className="mt-3">
                <a
                  href="https://simon-game-sujay.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark btn-sm me-2"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/sujay-707/SimonGame"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark btn-sm"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Weather App */}
        <div className="col-md-6">
          <div className="card project-card h-100 shadow-sm">
            <div className="card-body">
              <h4 className="fw-bold">Weather App</h4>
              <p className="badge bg-info text-dark mb-3">
                React • API • CSS
              </p>
              <p className="text-muted">
                Weather application displaying temperature, humidity,
                and real-time weather conditions.
              </p>

              <div className="mt-3">
                <a
                  href="https://weather-react-by-sujay.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark btn-sm me-2"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/sujay-707/Mini-Weather-App"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark btn-sm"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;