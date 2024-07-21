import "./pageheader.scss"

import Button from "../Button/Button"
import { PropTypes } from 'prop-types'

const PageHeader = ( { smallHeading, bigHeading, text, buttonText } ) =>
{
    return (
        <div className="pageheader-container">
            <div className="pageheader-content">
                <h3>
                    {smallHeading}
                </h3>
                <h1>
                    {bigHeading}
                </h1>
                <p>
                    {text}
                </p>
                {buttonText && <Button text={buttonText} />}
            </div>
        </div>
    )
}

PageHeader.propTypes = {
    smallHeading: PropTypes.string,
    bigHeading: PropTypes.element,
    text: PropTypes.string,
    buttonText: PropTypes.string
}



export default PageHeader