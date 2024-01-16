import React from "react";
import Container from "react-bootstrap/Container";

const Cont = () => {
  return (
    <>
      <Container
        style={{backgroundColor: 'green'}}
      // className='p-0 m-0'
      // style={{ overflowX: 'hidden'}}
      >
        {/* <Row
        // className='p-0 m-0'
        > */}
          {/* <Col
            style={{backgroundColor: 'green'}}
            className="p-0 m-0"
          > */}
            <p >hello</p>
          {/* </Col> */}
        {/* </Row> */}
      </Container>
    </>
  );
};

export default Cont;
