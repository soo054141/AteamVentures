import { MainWrapper, ClientCardsWrapper } from "./style";
import Title from "src/components/Title/Title";
import Filtering from "src/components/Filtering/Filtering";
import ClientCard from "src/components/ClientCard/ClientCard";

export default function Main() {
  return (
    <MainWrapper>
      <Title />
      <Filtering />
      <ClientCardsWrapper>
        <ClientCard />
        <ClientCard />
      </ClientCardsWrapper>
    </MainWrapper>
  );
}
