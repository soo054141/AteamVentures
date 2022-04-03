import * as Headers from "./style";
import menuIcon from "src/images/menu_24px.svg";
import logoIcon from "../../images/자산1.png";
import buildingIcon from "../../images/buildingIcon.png";
import { useState } from "react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  console.log(navbarOpen);
  return (
    <Headers.HeaderWrapper>
      <Headers.LogoWrap>
        <Headers.MenuIcon src={menuIcon} onClick={handleToggle} />
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
