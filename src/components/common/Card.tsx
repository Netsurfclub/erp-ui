import React from "react";

const Card: React.FC<CardProps> = ({ title, image, imageAlt, contents }) => {
  return (
    <div className="card mt-3 mb-3">
      <img
        src={image}
        alt={imageAlt}
        className="card-img-top"
        style={{
          width: "200px",
          height: "200px",
          display: "block",
          margin: "0 auto",
          objectFit: "contain",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {contents.map((content: KeyValuePair<string, string>) => (
          <p className="card-text" key={content.key}>
            {content.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
