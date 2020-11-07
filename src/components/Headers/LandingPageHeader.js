import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header">
        <div
          className="page-header-image header-shimmer"
          style={{
            backgroundImage: 
              "url(" + require("assets/img/agu-motor.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>

            <img
              alt="logo insystemse"
              className="n-logo"
              src={require("assets/img/logo-insystemse-blanco.png")}
            ></img>
            <h2> 
              <span className="slogan">Tus ideas, </span>
              <span> </span>
              <span className="slogan">nuestras soluciones.</span>
            </h2>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
