import styled, { css } from "styled-components";

/* 14pt - 400(본문용) */
const content400 = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

/* 14pt - 500 */
const content500 = css`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

/* 14pt - 600 */
const content600 = css`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

/* button style */
const buttonStyle = css`
  ${content500}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 12px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 4px;
`;

export const Card = styled.div`
  /* width: 334px;
  height: 356px; */
  display: flex;
  align-items: flex-start;
  padding: 24px 16px;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.base};
  border-radius: 4px;
`;
export const ProjectName = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

export const ClientName = styled.div`
  ${content500}
  margin-top: 4px;
`;
export const DeadLine = styled.div`
  ${content400}
  margin-top: 24px;
  color: ${(props) => props.theme.colors.gray};
`;

export const Divider = styled.div`
  width: 334px;
  height: 0px;
  border: 1px solid ${(props) => props.theme.colors.base};
  margin-top: 16px;
`;

export const ListWrapper = styled.div`
  margin-top: 32px;
`;

export const ListRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const ListTitle = styled.div`
  ${content400}
`;

export const ListValue = styled.div`
  ${content600}
  margin-left: 32px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const ShowDetailBtn = styled.div`
  ${buttonStyle}
  color: #ffffff;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const ChatBtn = styled.div`
  ${buttonStyle}
  color: ${(props) => props.theme.colors.secondary};
  background-color: #ffffff;
  margin-left: 10px;
`;
