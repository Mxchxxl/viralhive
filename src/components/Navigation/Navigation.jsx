import "./navigation.scss"

import { useEffect, useRef, useState } from "react"

import Button from "../Button/Button"
import Hamburger from "../Hamburger/Hamburger"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import Logo from "../Logo/Logo"

const Navigation = () =>
{
    const [ mobileMenuOpen, setMobileMenuOpen ] = useState( false )
    const mobileMenuRef = useRef( null )
    const [ activeMenu, setActiveMenu ] = useState( null )


    const toggleMobileMenu = ( e ) =>
    {

        e.stopPropagation()

        setMobileMenuOpen( ( prevState ) => !prevState )

    }

    const subMenuData = [
        {
            label: "services",
            subMenu: [ { text: "tiktok", link: "/services/tiktok" }, { text: "instagram", link: "/services/instagram" }, { text: "youtube", link: "/services/youtube" } ],
        },
        {
            label: "how it works",
            subMenu: [ { text: "for brands", link: "/how-it-works/for-brands" }, { text: "for creators", link: "/how-it-works/for-creators" } ],
        },
        {
            label: "results",
            subMenu: [ { text: 'case studies', link: '/results/case-studies' }, { text: 'clients', link: "/results/clients" }, { text: 'testimonials', link: "/results/testimonials" } ],
        },
        {
            label: "about",
            subMenu: [ { text: 'about viralhive', link: '/about/viralhive' }, { text: 'blog', link: '/about/blog' }, ],
        },
    ]



    const toggleActiveMenu = ( index ) =>
    {
        console.log( index )
        setActiveMenu( ( prevActiveSubMenu ) => ( prevActiveSubMenu === index ? null : index ) )
    }

    const closeMobileSubMenu = () =>
    {
        setActiveMenu( () => { null } )
    }

    useEffect( () =>
    {
        const closeMobileMenu = ( e ) =>
        {
            if ( !( mobileMenuRef.current.contains( e.target ) ) && mobileMenuOpen )
            {
                setMobileMenuOpen( false )
            }
        }

        document.addEventListener( 'click', closeMobileMenu )

        // Cleanup function to remove event listener when component unmounts or mobileMenuOpen changes
        return () =>
        {
            document.removeEventListener( 'click', closeMobileMenu )

        }
    } )





    return (
        <div className="navbar-container">
            <nav className="navbar-content">
                <Logo />
                <div className="logo-links">
                    <div className="hambruger-icon-container" onClick={toggleMobileMenu}>
                        <Hamburger state={mobileMenuOpen} />
                    </div>

                    <nav ref={mobileMenuRef} className={`mobile-menu  ${ mobileMenuOpen ? "mobile-menu-open" : "" }`}>
                        <ul>
                            {
                                subMenuData.map( ( menuItem, index ) =>
                                {
                                    return (
                                        <li key={`submenuItem${ index }`} className={`${ menuItem.subMenu ? " has-sub-menu" : "" } ${ activeMenu == index ? " show-sub-menu" : "" }`} onMouseEnter={( e ) => { e.stopPropagation(); console.log( 'hovering' ); toggleActiveMenu( index ) }} onMouseLeave={( e ) => { e.stopPropagation(); console.log( 'leaving' ); closeMobileSubMenu() }}>
                                            <a onClick={( e ) => { e.preventDefault(); toggleActiveMenu( index ) }} href="">
                                                {menuItem.label} {menuItem.subMenu && <KeyboardArrowDownIcon />}
                                            </a>
                                            {
                                                menuItem.subMenu && (
                                                    <ul className="sub-menu">
                                                        {menuItem.subMenu.map( ( subItem, index ) =>
                                                        {
                                                            return (
                                                                <li key={`subitem${ index }`}>
                                                                    <a href={subItem.link}>{subItem.text}</a>
                                                                </li>
                                                            )
                                                        } )}
                                                    </ul>
                                                )
                                            }


                                        </li>
                                    )
                                } )
                            }


                        </ul>
                        <Button text="get started" />
                    </nav>

                </div>
            </nav>
        </div>
    )
}

export default Navigation
