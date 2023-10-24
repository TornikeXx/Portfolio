import React from "react";
import styled from "styled-components";
import Person from "../../assets/alvin.png";

const Testimonials = () => {
  return (
    <TestimonialsPage>
      <H1>Testimonials</H1>
      <P>People I've worked with have said some nice things...</P>
      <Image3 src={Person} alt="" />
      <P>
        “Matt's a clear communicator with the tenacity and confidence to really
        dig in to tricky design scenarios and the collaborative friction that's
        needed to produce excellent work.”
      </P>
      <H3>Alvin Engler</H3>
      <P>CEO, West Third Enterprises, Inc.</P>
    </TestimonialsPage>
  );
};
const TestimonialsPage = styled.div`
  margin-top: 100px;
  text-align: center;
  margin-left: 250px;
  margin-right: 250px;
  margin-bottom: 100px;
`;
const Image3 = styled.img`
  border-radius: 50%;
  width: 100px;
  margin-top: 35px;
  margin-bottom: 35px;
`;
const P = styled.p`
  color: #22233d;
  font-size: larger;
`;
const H1 = styled.h1`
  color: #22233d;
`;
const H3 = styled.h3`
  color: #22233d;
`;

export default Testimonials;
