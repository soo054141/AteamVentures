import { TitleWrapper, Heading, Description } from "./style";

interface TitleInterface {
  pageTitle: string;
  subTitle: string;
}

export default function Title({ pageTitle, subTitle }: TitleInterface) {
  return (
    <TitleWrapper>
      <Heading>{pageTitle}</Heading>
      <Description>{subTitle}</Description>
    </TitleWrapper>
  );
}
