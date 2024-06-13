import React, { useEffect } from 'react';

const News = () => {

  useEffect(() => {

    const script = document.createElement('script');
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="timelines-container">

      {/* AFAD */}
      <div className="timeline-container">
        <a className="twitter-timeline" href="https://twitter.com/AFADBaskanlik?ref_src=twsrc%5Etfw">Tweets by AFADBaskanlik</a>
      </div>

      {/* AKUT */}
      <div className="timeline-container">
        <a class="twitter-timeline" href="https://twitter.com/AKUT_Dernegi?ref_src=twsrc%5Etfw">Tweets by AKUT_Dernegi</a>
      </div>
      
      {/* Meteoroloji */}
      <div className="timeline-container">
        <a className="twitter-timeline" href="https://twitter.com/meteoroloji_twi?ref_src=twsrc%5Etfw">Tweets by meteoroloji_twi</a>
      </div>
      
    </div>
  );
};

export default News;
