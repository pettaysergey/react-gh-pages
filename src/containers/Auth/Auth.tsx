import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box } from "reflexbox/styled-components";
import styled from "styled-components/macro";
import { Navigate } from "react-router-dom";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { CenteredBlock } from "@components/CenteredBlock";

import { logIn } from "./redux/actions";

type Props = {
  user: string;
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Auth = ({ user }: Props) => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userName) {
      dispatch(logIn(userName));
    }
  };

  if (Boolean(user)) {
    return <Navigate to="/home" />;
  }

  return (
    <CenteredBlock>
      <StyledForm onSubmit={handleSubmit}>
        <Box mb="10px">
          <Input
            value={userName}
            placeholder="User name"
            onChange={setUserName}
          />
        </Box>
        <Button disabled={!userName}>Confirm</Button>
      </StyledForm>
    </CenteredBlock>
  );
};
