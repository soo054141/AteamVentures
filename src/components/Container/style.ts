import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 155px 0px 155px;
  border: 1px solid gold;

  & > :not(:first-child) {
    margin-top: 32px;
  }
`;
