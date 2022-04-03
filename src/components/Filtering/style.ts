import styled from "styled-components";

export const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Selection = styled.div`
  display: flex;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const ToggleText = styled.div`
  display: flex;
  margin-left: 16px;
  font-size: 14px;
`;
