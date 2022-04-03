import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 32px;
  padding: 40px 155px 60px;

  @media only screen and (max-width: 1440px) {
    padding: 40px 20px 60px;
  }

  @media only screen and (max-width: 360px) {
    padding: 24px 20px;
  }
`;

export const ClientCardsWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const EmptyClientSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #939fa5;
  border: 1px solid #c2c2c2;
  box-sizing: border-box;
  border-radius: 4px;
`;
