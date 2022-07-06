import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components/macro";

import { Auth } from "@containers/Auth";
import { Settings } from "@containers/Settings";
import { Home } from "@containers/Home";
import { Level } from "@containers/Level";

import "./App.css";
import { PrivateRoute } from "./components/PrivateRoute";
import { getUser } from "./containers/Auth/redux/selectors";
import backImage from "./assets/img/stage.png";

const StyledApp = styled.div`
  height: 100vh;
  background-image: ${() => `url(${backImage})`};
  background-size: cover;
  background-position: center center;
`;

export const App = () => {
  const user = useSelector(getUser);

  return (
    <StyledApp>
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
