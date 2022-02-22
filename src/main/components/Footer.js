import { useState } from "react";
import logo from "../images/logo.png";
import Arrow from './../Icons/Arrow';
import Menu from "./common/Menu";
import Social from "./common/Social";

export default function Footer({ sections }) {
    const [value, setValue] = useState("");

    return (
        <footer className="footer">
            <div className="footer__wrapper container">
                <div className="footer__top">
                    <div className="logo">
                        <img src={logo} className="logo__icon" alt="logo" />
                    </div>
                    <div className="input-wrapper input-wrapper--footer">
                        <input placeholder="Enter your email to sign up for updates" className="input input-wrapper__input" value={value} onChange={(e) => setValue(e.target.value)} />
                        <button className="button input-wrapper__button">Subscribe</button>
                    </div>
                    <button className="footer__button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <Arrow className="footer__button-arrow" />
                    </button>
                </div>
                <Menu sections={sections} className="menu--footer" />
                <div className="footer__bottom">
                    <p className="footer__copyright">© 2022 Floki Gainz. All rights reserved</p>
                    <Social className="social--footer footer__social" />
                </div>
            </div>
        </footer>
    )
}
