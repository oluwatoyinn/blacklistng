import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GetInformation from "./GetInformation";
// import whyUsImage from "../components/assets/whyUs.png";
import GetRide from "./GetRide";

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
      <Container className="blacklist-check">
        <Row className="why-us">
          <div className="whyUs-section">
            <h5>
              7 REASONS WHY YOU SHOULD CHECK THE <span>BLACKLIST </span>{" "}
            </h5>
          </div>
        </Row>
        <Row >
          <Col md={4}></Col>
          <Col md={4} >
            <div className="card-reason">
              <p>
                Your Bank may deny that you needed loan facility if you are found
                on the Blacklist
              </p>
            </div>
          </Col>
          <Col md={4}></Col>
        </Row>
        <Row  style={{ marginTop: "20px" }}>
          <Col md={3}></Col>
          <Col md={3} >
            <div className="card-reason">
              <p>
                You may be denied Visa if the relevant embassy conducts a search and finds you on the Blacklist
              </p>
            </div>
          </Col>
          {/* <Col md={1}></Col>
          <Col md={1}></Col> */}
          <Col md={3} >
            <div className="card-reason">
              <p>
                You may lose potential business deals if your potential partners find you on the Blacklist
              </p>
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col md={2}></Col>
          <Col md={4} >
            <div className="card-reason">
              <p>
                You may not be able to rent that dream apartment, if your prospective landlord finds you on the Blacklist
              </p>
            </div>

          </Col>
          {/* <Col md={1}></Col> */}
          <Col md={4} >
            <div className="card-reason2">
              <p>
                You may not be able to rent that dream apartment, if your prospective landlord finds you on the Blacklist
              </p>
            </div>

          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col md={1}></Col>
          <Col md={5} className="ps-5">
            <div className="card-reason">
              <p>
                You may not get that Job offer, if you are found on the Blacklist
              </p>
            </div>
          </Col>
          {/* <Col md={1}></Col> */}
          <Col md={5} className="pe-5"> 
            <div className="card-reason2 rrr">
              <p>
                You may also not win that political office, if you are found on the Blacklist
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={5}></Col>
          <Col md={2}>
            <div className="search-blacklist text-center">
               <button >Search the blacklist now</button>
            </div>
             </Col>
          <Col md={5}></Col>
        </Row>
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
              <button className="sign-up mt-4"> Accessing the Blacklist </button>
            </Col>
          </Row>
        </Container>
        <Row style={{ paddingTop: "50px" }}>
          <GetInformation />
        </Row>
      </Container>
    </React.Fragment>
  );
}
