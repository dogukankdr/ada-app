const Footer = () => {
  return (
    <div className="footer_section layout_padding">
        <div className="row">
          <div className="col-md-12">
            <div className="location_text">
              <ul>
                <li>
                  <a href="https://www.apple.com/tr/app-store/"
                    target="_blank"
                    >
                    <i className="fa-brands fa-apple" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                  >
                    <i className="fa-brands fa-google-play" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="/contact">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <p className="copyright_text">
              {" "}
              Bitirme projesi,
              . "ADA" 2023
            </p>
          </div>
        </div>
      </div>
  );
};

export default Footer;
