/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href=""
              >
                Sumate a nuestro equipo
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          {new Date().getFullYear()}, 
          Insystemse
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
