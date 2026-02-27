import React from "react";

function Hero() {
  return (
    <section id="home" className="container" style={{ paddingTop: "120px", paddingBottom: "100px" }}>
      <div className="row align-items-center">

        {/* Image LEFT */}
        <div className="col-lg-6 text-center mb-5 mb-lg-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
            alt="Developer Illustration"
            className="img-fluid"
            style={{ maxWidth: "350px" }}
          />
        </div>

        {/* Content RIGHT */}
        <div className="col-lg-6">
          <h1 className="fw-bold display-4">
            Hi, I'm <span className="text-primary">Sujay M Mundaragi</span>
          </h1>

          <h3 className="text-muted mb-3">
            MCA Student | Seeking Opportunities
          </h3>

          <p className="lead text-muted">
            I build responsive, modern, and user-friendly web applications using
            React, JavaScript, and modern web technologies.
          </p>

          <div className="mt-4">
            <a href="#projects" className="btn btn-dark me-3">
              View Projects
            </a>

            <a href="#contact" className="btn btn-outline-dark">
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;