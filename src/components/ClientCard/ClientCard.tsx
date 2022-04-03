import { ClientInterface } from "src/pages/Main/index";
import { useMemo } from "react";
import {
  Card,
  ClientName,
  ProjectName,
  InConsultationBadge,
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

interface ClientCardInterface {
  data: ClientInterface;
}

const listKey: Array<keyof Pick<ClientInterface, "count" | "amount" | "method" | "material">> = [
  "count",
  "amount",
  "method",
  "material"
];

const listTitleMap = {
  count: "도면개수",
  amount: "총 수량",
  method: "가공방식",
  material: "재료"
};

export default function ClientCard({ data }: ClientCardInterface) {
  const MemoizeList = useMemo(() => {
    return listKey.map((el) => (
      <ListRow key={el}>
        <ListTitle>{listTitleMap[el]}</ListTitle>
        <ListValue>{`${data[el]}${typeof data[el] === "number" ? "개" : ""}`}</ListValue>
      </ListRow>
    ));
  }, [data]);

  return (
    <Card>
      <ProjectName>
        {data.title}
        {data.status === "상담중" && <InConsultationBadge>상담중</InConsultationBadge>}
      </ProjectName>
      <ClientName>{data.client}</ClientName>
      <DeadLine>{data.due}까지 납기</DeadLine>
      <Divider />
      <ListWrapper>{MemoizeList}</ListWrapper>
      <ButtonWrapper>
        <ShowDetailBtn>요청 내역 보기</ShowDetailBtn>
        <ChatBtn>채팅하기</ChatBtn>
      </ButtonWrapper>
    </Card>
  );
}
