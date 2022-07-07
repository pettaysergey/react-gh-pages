import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components/macro";

import { Auth } from "@containers/Auth";
import { Settings } from "@containers/Settings";
import { Home } from "@containers/Home";
import { Level } from "@containers/Level";
import { Background } from "@components/Background";
import { PrivateRoute } from "@components/PrivateRoute";
import { getUser } from "@containers/Auth/redux/selectors";

import "./App.css";

const StyledApp = styled.div`
  height: 100vh;
  overflow: hidden;
`;

export const App = () => {
  const user = useSelector(getUser);

  return (
    <StyledApp>
      <Background />
      <Routes>
        <Route path="/" element={<Auth user={user} />} />
        <Route
          path="settings"
          element={
            <PrivateRoute isAllowed={Boolean(user)}>
              <Settings />
            </PrivateRoute>
          }
        />
        <Route
          path="home"
          element={
            <PrivateRoute isAllowed={Boolean(user)}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="level"
          element={
            <PrivateRoute isAllowed={Boolean(user)}>
              <Level />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </StyledApp>
  );
};
