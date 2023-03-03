import logo from "../logo.svg";
import React from "react";

export default function Header() {
    return (
        <header className="flex items-center border-b">
            <img src={logo} className="w-24 h-24" alt="logo" />
            <h1 className="text-3xl">React To Do App</h1>
        </header>
    );
}