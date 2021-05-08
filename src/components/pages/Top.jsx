import styled from "styled-components";
import { DefaultLayout } from "../templates/DefaultLayout";
export const Top = () => {
  return (
    <SContainer>
      <h2>トップページです</h2>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
