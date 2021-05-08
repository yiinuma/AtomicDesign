import styled from "styled-components";
import { DefaultLayout } from "../templates/DefaultLayout";
export const Top = () => {
  return (
    <SContainer>
      <DefaultLayout>
        <h2>トップページです</h2>
      </DefaultLayout>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
