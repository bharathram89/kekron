import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import Logo from "../../components/logo";
import MainMenu from "../../components/menu/main-menu";
import MobileNavMenu from "../../components/menu/mobile-menu";
import Button from "../../components/shared/button";
import { useSticky } from "../../hooks";
import { useSelector, useDispatch } from 'react-redux';
import { navigate } from 'gatsby';
import { LOGOUT } from "../../redux/types/authTypes";
import { removeStorage } from "../../utils/functions";

const Header = ({ data }) => {

    const dispatch = useDispatch();

    const { isLoggedIn } = useSelector(state => state?.auth);
    // Sticky Header
    const { sticky, headerRef, fixedRef } = useSticky();

    // OfCanvas Menu
    const [ofcanvasOpen, setOfcanvasOpen] = useState(false);

    // OfCanvas Menu Open & Remove
    const ofcanvasHandaler = () => {
        setOfcanvasOpen((prev) => !prev);
    };

    const handleClick = (e) => {
        e.preventDefault();
         if(isLoggedIn){
            removeStorage('userInfo');
            dispatch({type: LOGOUT})
         }
         navigate('/login')
    }

    return (
        <header
            ref={headerRef}
            className="bg-transparent absolute w-full mx-auto z-40"
        >
            <div
                ref={fixedRef}
                className={`header-top ${
                    sticky
                        ? "fixed top-0 bg-secondary-100 opacity-90 w-full"
                        : ""
                }`}
            >
                <div className="container px-4">
                    <nav className="bg-transparent flex justify-between items-center py-3">
                        <div className="">
                            <Logo />
                        </div>
                        <MainMenu allmenuData={data?.menu} />
                        <div className="header-right-action flex items-center">
                            <button
                                shape="square2xl"
                                className="text-white hidden xs:block nav-action-btn"
                                onClick={handleClick}
                            >
                                {isLoggedIn ? 'LOGOUT' : 'SIGN UP'}
                                <StaticImage
                                    className="align-middle ml-3"
                                    src="../../data/images/icons/arrrow-icon2.webp"
                                    alt=""
                                />
                            </button>
                            <button
                                onClick={ofcanvasHandaler}
                                onKeyDown={ofcanvasHandaler}
                                className="flex flex-col space-y-1.5 ml-8 lg:hidden"
                            >
                                <span className="line h-0.5 w-6 inline-block bg-white"></span>
                                <span className="line h-0.5 w-6 inline-block bg-white"></span>
                                <span className="line h-0.5 w-6 inline-block bg-white"></span>
                            </button>
                            <MobileNavMenu
                                MobilemenuData={data.menu}
                                ofcanvasOpen={ofcanvasOpen}
                                ofcanvasHandaler={ofcanvasHandaler}
                            />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    data: PropTypes.shape({
        menu: PropTypes.arrayOf(PropTypes.shape({})),
    }),
};

export default Header;
