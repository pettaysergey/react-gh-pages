import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
  isAllowed: boolean;
  children: JSX.Element;
};

export const PrivateRoute = ({ isAllowed, children }: Props) => {
  if (!isAllowed) {
    return <Navigate to="/" />;
  }

  return children;
};
