import React from "react";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 mx-2 d-inline-block"
      style={{ maxWidth: "350px", flex: "1 0 30%" }}
    >
      <img
        src={src}
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Stay updated with the latest headlines and breaking news stories. Click to read more."}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
