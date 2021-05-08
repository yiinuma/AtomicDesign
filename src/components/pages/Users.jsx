import styled from "styled-components";
import { HeaderOnly } from "../templates/HeaderOnly";
export const Users = () => {
  return (
    <SContainer>
      <HeaderOnly>
        <h2>ユーザー一覧</h2>
      </HeaderOnly>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
