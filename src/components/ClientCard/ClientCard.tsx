import {
  Card,
  ClientName,
  ProjectName,
  DeadLine,
  Divider,
  ListWrapper,
  ListRow,
  ListTitle,
  ListValue,
  ButtonWrapper,
  ShowDetailBtn,
  ChatBtn
} from "./style";

export default function ClientCard() {
  return (
    <Card>
      <ProjectName>비행기 시제품 제작</ProjectName>
      <ClientName>B 고객사</ClientName>
      <DeadLine>2020.12.13까지 납기</DeadLine>
      <Divider />
      <ListWrapper>
        <ListRow>
          <ListTitle>도면개수</ListTitle>
          <ListValue>2개</ListValue>
        </ListRow>
        <ListRow>
          <ListTitle>도면개수</ListTitle>
          <ListValue>2개</ListValue>
        </ListRow>
        <ListRow>
          <ListTitle>도면개수</ListTitle>
          <ListValue>2개</ListValue>
        </ListRow>
        <ListRow>
          <ListTitle>도면개수</ListTitle>
          <ListValue>2개</ListValue>
        </ListRow>
      </ListWrapper>
      <ButtonWrapper>
        <ShowDetailBtn>요청 내역 보기</ShowDetailBtn>
        <ChatBtn>채팅하기</ChatBtn>
      </ButtonWrapper>
    </Card>
  );
}
