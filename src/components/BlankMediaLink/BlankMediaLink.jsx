import "./blankmedialink.scss"

import Button from "../Button/Button"
import PropTypes from "prop-types"

const BlankMediaLink = ( { media, mediaAlt, text, buttonText } ) =>
{
    return (
        <div className="blankmedialink-container">
            <div className="blankmedialink-content">
                <div className="media">
                    <img src={media} alt={mediaAlt} />
                </div>
                <div className="text">
                    <p>
                        {text}
                    </p>
                    <Button text={buttonText} />
                </div>
            </div>
        </div>
    )
}

BlankMediaLink.propTypes = {
    media: PropTypes.string,
    mediaAlt: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string
}


export default BlankMediaLink