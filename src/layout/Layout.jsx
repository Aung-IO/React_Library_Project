import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Navbar from "../components/Navbar";
import './Layout.css';

export default function Layout() {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      {/* dynamic router changes content */}

      <SwitchTransition>
        <CSSTransition timeout={200} classNames="fade" key={location.pathname}>
          <div className="max-w-6xl mx-auto p-4">
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
