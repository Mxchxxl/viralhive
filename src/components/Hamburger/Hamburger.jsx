
import PropTypes from "prop-types"
import "./hamburger.scss"


const Hamburger = ( { state } ) =>
{

    return (
        <div id="hamburger-menu-icon" className={`hamburger-menu-icon ${ state ? "hamburger-active" : '' }`}>
            <div className="hamburger-icon-bar"></div>
            <div className="hamburger-icon-bar"></div>
            <div className="hamburger-icon-bar"></div>
        </div>
    )
}


Hamburger.propTypes = {
    state: PropTypes.bool.isRequired
}

export default Hamburger
