import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const LogoWrap = styled.div`
  margin-left: 40px;

  @media only screen and (max-width: 768px) {
    display: flex;
    margin-left: 23px;
  }
`;

export const MenuIcon = styled.img`
  display: none;
  margin-right: 19px;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const Logo = styled.img`
  width: 100%;

  @media only screen and (max-width: 768px) {
    width: 91.8px;
  }
`;

export const ClientWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: white;
  margin-right: 40px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const ClientIcon = styled.img``;

export const ClientName = styled.div`
  margin-left: 8px;
`;

export const Divider = styled.div`
  width: 1px;
  height: 16px;
  border-left: 2px solid #ffffff;
  margin: 0 32px;
`;

export const LogoutBtn = styled.div``;
