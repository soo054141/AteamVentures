import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 1130px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 40px;
  border: 1px solid gold;

  & > :not(:first-child) {
    margin-top: 32px;
  }
`;

export const ClientCardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 100px;
`;
