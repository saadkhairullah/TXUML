import React from "react";

const VideoBg = () => {
  return (
    <video controls autoPlay muted loop className="video">
      <source src="/videos/intro.webm" type="video/webm" />
      <source src="/videos/intro.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBg;