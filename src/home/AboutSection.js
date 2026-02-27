import React from "react";

function AboutSection() {
  return (
    <section id="about" className="container py-5">
      <div className="row align-items-center">

        {/* Content LEFT */}
        <div className="col-lg-7 order-1 order-lg-1">
          <h2 className="fw-bold mb-3">About Me</h2>

          <p className="text-muted">
            I am <strong>Sujay M Mundaragi</strong>, currently pursuing
            <strong> MCA (II Year)</strong> at New Horizon College of Engineering,
            Bangalore 
          </p>

          <p className="text-muted">
            Completed my BCA UnderGraduation from KLE PC Jabin Science College, Hubli
            with First Class with Distinction.
          </p>

          <p className="text-muted">
            Passionate about building modern, responsive, and user-friendly
            web applications using React, Express.js, and MongoDB.
          </p>
        </div>

        {/* Image RIGHT */}
        <div className="col-lg-5 text-center mt-4 mt-lg-0 order-2 order-lg-2">
          <img
            src="/pic.jpg"
            alt="Sujay M Mundaragi"
            className="img-fluid rounded-circle shadow-lg border border-3"
            style={{
              width: "200px",
              height: "240px",
              objectFit: "contain"
            }}
          />
        </div>

      </div>
    </section>
  );
}

export default AboutSection;