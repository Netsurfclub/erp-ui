import React from "react";

import image from "../../images/unplugged_cable.jpg";

const ErrorPage: React.FC<PageProps> = () => {
  return (
    <section className="row">
      <article className="col-12">
        <div className="text-center">
          <img src={image} alt="logo" style={{ width: "50%", height: "50%" }} />
          <h1>Hiba történt!</h1>
          <h2>A keresett oldal nem található.</h2>
        </div>
      </article>
    </section>
  );
};

export default ErrorPage;
