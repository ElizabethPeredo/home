import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSun } from "@fortawesome/free-solid-svg-icons"


export default function Navbar() {
    function openMenu() {
        let navbar = document.querySelector(".navbar__items");
        navbar.classList.toggle("abrir");
    }

    return (
        <header>
            <nav className="p-2 navbar navbar-expand-lg navbar-dark bg-primary">
                <Link href={{ pathname: "/" }}>
                    <a className="navbar-brand">ARRENDAMIENTO</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"  onClick={openMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar__items" id="navbar__items">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href={{ pathname: "/" }}>
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={{ pathname: "/Contrato" }}>
                                <a className="nav-link">Contrato</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={{ pathname: "/Recibos" }}>
                                <a className="nav-link">Recibos</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
