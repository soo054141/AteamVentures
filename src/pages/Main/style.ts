import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 155px 0px 155px;
  border: 1px solid gold;

  & > :not(:first-child) {
    margin-top: 32px;
  }
`;

export const ClientCardsWrapper = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid red;

  padding-top: 200px;
`;
