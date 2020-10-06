import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title text-primary">¿Qué somos? ¿Qué hacemos?</h2>
                <h5>
                  <p> 
                    Insystemse es una organización joven avocada al desarrollo y mantenimiento de sistemas computacionales y la aplicación de 
                    la tecnología en general para solucionar problemas. 
                  </p>
                  <p> 
                    Quienes se involucran a trabajar en nuestros proyectos aman lo que hacen. 
                    Amamos lo que hacemos. 
                  </p>
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left cool-gradient"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/leito-pc.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-primary">
                      “Sólo triunfa en el mundo quien se levanta y busca a las circunstancias, creándolas si no las encuentra.” 
                      <br></br>
                      <br></br>
                      <small>George Bernard Shaw</small>
                    </p>
                  </div>
                  <div
                    className="image-container cool-gradient"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/parlante.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right cool-gradient"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/tiyo-pc.jpg") + ")"
                    }}
                  ></div>
                  <h3 className="text-primary">
                    Nuestros valores y forma de trabajar
                  </h3>
                  <p>
                    Creemos que perseverando se llega a buen puerto, en todo momento buscaremos la salida frente a los contratiempos.
                  </p>
                  <p> 
                    Siempre apuntamos a las relaciones ganar-ganar. La optimización 
                    de los recursos de nuestros clientes y socios, y los nuestros, es
                    lo que más nos importa. 
                  </p>
                  <p> 
                    Buscamos en cada caso obtener el mejor resultado de la mejor manera posible. 
                    Por lo que todo lo que hacemos, lo hacemos con las mejores prácticas. 
                  </p> 
                  <p>
                    Construimos relaciones, en medida de que el contexto lo permita no negociamos por el ahora sin más.
                    Buscamos socios felices, no clientes sin retorno.
                  </p>
                  <p>  
                    Procuramos brindar calidad y confianza. Ofreciendo buen soporte. 
                    Confiamos en que es la mejor forma de crear productos y servicios de valor.
                  </p>                 
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">¿Trabajamos juntos?</h2>
            <p className="lead">Cuéntanos cómo podríamos ayudarte, y nos pondremos en contacto contigo.</p>
            <Row className="mt-5">
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Tu nombre/Tu organización"
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    name="name"
                    placeholder="¿Qué tienes para decirnos?"
                    rows="10"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Enviar
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default LandingPage;
