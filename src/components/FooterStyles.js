import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 60px;
  background: #00101a;
  position: relative;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: flex;

  @media (max-width: 1000px) {
  }
`;

export const FooterLink = styled.a`
  color: #dfe1e2 !important;
  margin-bottom: 20px;
  // font-size: 18px;
  // text-decoration: none;

  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) 13px/30px
    var(--unnamed-font-family-barlow);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left !important;
  font: normal normal normal 13px/30px Barlow !important;
  letter-spacing: 0px;
  opacity: 1;

  &:hover {
    color: #0078c9 !important;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    14px/21.97px var(--unnamed-font-family-coverking);
  text-align: left;
  font: normal normal bold 14px/22px Coverking;
  letter-spacing: 0.7px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
`;
