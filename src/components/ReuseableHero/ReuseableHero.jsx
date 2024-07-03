import "./reuseablehero.scss"

import Button from "../Button/Button"
import DotGrid from "../DotGrid/DotGrid"
import PropTypes from "prop-types"

const ReuseableHero = ( { content } ) =>
{
  console.log( content.smallHeading )
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <div className="stars"></div>
          <h4>{content.smallHeading}</h4>
          <h1>{content.bigHeading}</h1>
          <p>
            {content.text}
          </p>
          <Button
            text={content.buttonText}
            effect={() =>
            {
              console.log( "clicked" )
            }}
            icon=""
          />
        </div>
        <div className="hero-img-container">
          <div className="hero-img-content">
            <DotGrid />
            <img className="hero-img" src={content.image} alt={content.imageAlt} />
            <div className="round-circles">
              <div className="big-purple"></div>
              <div className="small-pink"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ReuseableHero.propTypes = {
  content: PropTypes.shape( {
    smallHeading: PropTypes.string,
    bigHeading: PropTypes.string,
    text: PropTypes.element,
    buttonText: PropTypes.string,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    socialIcon: PropTypes.element,
    socialFollowers: PropTypes.string,
    socialColor: PropTypes.string
  } ),
}


export default ReuseableHero
