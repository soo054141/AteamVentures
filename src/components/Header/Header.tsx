import * as Headers from "./style";
import logoIcon from "../../images/자산1.png";
import buildingIcon from "../../images/buildingIcon.png";

export default function Header() {
  return (
    <Headers.HeaderWrapper>
      <Headers.LogoWrap>
        <Headers.Logo src={logoIcon} />
      </Headers.LogoWrap>
      <Headers.ClientWrap>
        <Headers.ClientIcon src={buildingIcon} />
        <Headers.ClientName>A 가공업체</Headers.ClientName>
        <Headers.Divider />
        <Headers.LogoutBtn>로그아웃</Headers.LogoutBtn>
      </Headers.ClientWrap>
    </Headers.HeaderWrapper>
  );
}
