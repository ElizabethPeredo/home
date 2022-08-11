import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSun } from "@fortawesome/free-solid-svg-icons"


export default function Navbar() {
    function openMenu() {
        let menu = document.querySelector("#menu-bars");
        let navbar = document.querySelector(".navbar__items");
        menu.classList.toggle("fa-solid.fa-x");
        navbar.classList.toggle("active");
    }

    function filterSelection() {
        if (typeof window === 'object') {
            let x = document.querySelector("#__next");
            if (x !== null) {
                x.className = "background-body"
            }
        }
    }
    filterSelection()

    function dark() {
        let id = document.querySelector("#__next");
        id.classList.toggle("theme-dark");
    }
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

                <a className="navbar-brand" href="#">HOME</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href={{ pathname: "/" }}>
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={{ pathname: "/" }}>
                                <a className="nav-link">Contrato</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={{ pathname: "/" }}>
                                <a className="nav-link">Recibos</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
