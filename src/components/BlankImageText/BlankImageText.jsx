import './blankimagetext.scss'

import PropTypes from 'prop-types'

const BlankImageText = ( { media, text, reverse } ) =>
{
    return (
        <div className={`blankimagetext ${ reverse ? "reverse" : "" }`}>
            <div className="media-section">
                <img src={media} alt="" />
            </div>
            <div className="text-section">

                <h1>{text}</h1>

            </div>
        </div>
    )
}

BlankImageText.propTypes = {
    media: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    reverse: PropTypes.bool

}

export default BlankImageText

