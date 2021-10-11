import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import whyUsImage from "../components/assets/whyUs.png";

export function CreateAccount(props) {
  return (
    <React.Fragment>
      <Container fluid className="create">
        <Container>
          <Row>
            <Col>
              <div className="create-account">
                <h3>
                  Alternative Database for chronic debtors & Fraudulent People
                </h3>
                <p>Getting Rid Of Chronic Debtors One Search At A Time</p>
                <button className="create-btn">Create Account</button>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Container>
      {/* <Container>
        <Row className="why-us">
          <div className="whyUs-section">
            <h3>Why blacklist?</h3>
            <h5>Simple, easy <span>profiling </span> </h5>
          </div>
          <Col>
            <div>
              {" "}
              <img  src={whyUsImage} alt="" />{" "}
            </div>
          </Col>
          <Col>
            <div> 
                <p>The blacklist is an alternative database for chronic debtors and 
                    fraudulent people as reported by verified registered Nigerian businesses. 
                    Any verified registered business in Nigeria is free to upload a list of 
                    their debtors or business associates, employee or customers that have defrauded them.
                </p>
                <p>
                A collection of this uploaded list form a central database which can be accessed manually 
                or via an API call. Members of the public can have access to data in the Blacklist especially
                 when they need to verify the status of a potential partner, tenant, beneficiary or customer.
                </p>

                <button>Get Started </button>
            </div>
          </Col>
        </Row>
      </Container> */}
      <Container style={{ paddingBottom: "200px" }}>
        <Row className="why-us">
          <div className="whyUs-section">
            <h5>
              7 REASONS WHY YOU SHOULD CHECK THE <span>BLACKLIST </span>{" "}
            </h5>
          </div>
        </Row>
        <Row>
          <Col md={5} className="card-reason p-2">
            <p>
              Your Bank may deny that you needed loan facility if you are found
              on the Blacklist
            </p>
          </Col>
          <Col md={1}></Col>
          <Col md={5} className="card-reason2">
            <p>
              Your Bank may deny that you needed loan facility if you are found
              on the Blacklist
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col md={5} className="card-reason p-2">
            <p>
              Your Bank may deny that you needed loan facility if you are found
              on the Blacklist
            </p>
          </Col>
          <Col md={1}></Col>
          <Col md={5} className="card-reason2">
            <p>
              Your Bank may deny that you needed loan facility if you are found
              on the Blacklist
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col md={5} className="card-reason p-2">
            <p>
              Your Bank may deny that you needed loan facility if you are found
              on the Blacklist
            </p>
          </Col>
          <Col md={1}></Col>
          <Col md={5} className="card-reason2">
            <p>
              Your Bank may deny that you needed loan facility if you are found
              on the Blacklist
            </p>
          </Col>
        </Row>
        <button className="search-blacklist">Search the blacklist now</button>
      </Container>
      <Container fluid className="get-rid">
        <Container>
          <Row>
            <Col md={8}>
              <div className="why-us-sign">
                <p>
                  The blacklist is an alternative database for chronic debtors
                  and fraudulent people as reported by verified registered
                  Nigerian businesses. Any verified registered business in
                  Nigeria is free to upload a list of their debtors or business
                  associates, employee or customers that have defrauded them.
                </p>
                <p>
                  A collection of this uploaded list form a central database
                  which can be accessed manually or via an API call. Members of
                  the public can have access to data in the Blacklist especially
                  when they need to verify the status of a potential partner,
                  tenant, beneficiary or customer.
                </p>
              </div>
            </Col>
            <Col className="getRid" md={4}>
              <h3 >Getting rid of chronic debtors one search at a time</h3>
              <div>
                {" "}
                <button className="sign-up"> Sign up </button>{" "}
              </div>
              <h3>Need a system that works?</h3>
              <button className="sign-up"> Access Blacklist </button>
            </Col>
          </Row>
        </Container>
        <Row style={{paddingTop:"50px"}}>
            <Col md={7} >
            <h3>Need further information from experienced staff?</h3>
            <h6>Form with validation to be designed here </h6>
                <div>
                    <form action="">
                        <h4></h4>
                    </form>
                </div>
            </Col>
            <Col md={5}>
                <h4>Support developer and about here to be designed here </h4>
            </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
