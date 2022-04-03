import { MainWrapper, ClientCardsWrapper } from "./style";
import Title from "src/components/Title/Title";
import Filtering from "src/components/Filtering/Filtering";
import ClientCard from "src/components/ClientCard/ClientCard";
import { useCallback, useEffect, useMemo, useState } from "react";

export interface ClientInterface {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
}

export default function Main() {
  const [clientData, setClientData] = useState<ClientInterface[]>([]);
  const [inConsult, setInConsult] = useState(false);

  const getClientData = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:4000/requests");
      if (response.ok) {
        const data = await response.json();
        setClientData(data);
      } else {
        throw new Error("Fail API");
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const filterStatus = useCallback(
    (data: ClientInterface) => {
      if (inConsult) {
        if (data.status !== "상담중") return false;
      }

      return true;
    },
    [inConsult]
  );

  const MemorizeClient = useMemo(() => {
    return clientData.filter(filterStatus).map((client) => <ClientCard key={client.id} data={client} />);
  }, [clientData, filterStatus]);

  useEffect(() => {
    getClientData();
  }, [getClientData]);

  return (
    <MainWrapper>
      <Title pageTitle={"들어온 요청"} subTitle={"파트너님에게 딱 맞는 요청서를 찾아보세요."} />
      <Filtering />
      <ClientCardsWrapper>{MemorizeClient}</ClientCardsWrapper>
    </MainWrapper>
  );
}
