import React, { useState } from "react";
import { ACTION_BREAK, ACTION_BRICK } from "../const/state.constant";
import Main from "./Main";
import BreakLayout from "./Break/BreakLayout";
import BrickLayout from "./Brick/BrickLayout";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
export const Layout: React.FC = () => {

  const [action, setAction] = useState<string>("");
  return <>
    <Routes>
      <Route path="/" element={<>
        {action === "" && <Main setAction={setAction} />}
        {action === ACTION_BREAK && <BreakLayout setAction={setAction} time={3} />}
        {action === ACTION_BRICK && <BrickLayout setAction={setAction} />}
      </>} />
      <Route path="/login" element={<Login/>} />
    </Routes>


  </>

}
export default Layout;

