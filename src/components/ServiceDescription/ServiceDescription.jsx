import "./servicedescription.scss"

import BlankImageText from "../BlankImageText/BlankImageText"
import PropTypes from 'prop-types'
import ReviewCarousel from "../ReviewCarousel/ReviewCarousel"

const ServiceDescription = ( { content } ) =>
{
    return (

        <div className="page-content">
            <div className="recommendation">
                <h2>what brands are saying about us</h2>
                <ReviewCarousel />

            </div>
            <div className="service-description-container">
                <section className="service-description-main">
                    <div className="text-section">
                        <h2>
                            End-to-End {content.mainDescriptionHeading} Campaign Management
                        </h2>
                        <div>
                            {content.mainDescriptionText}
                        </div>
                    </div>
                    <div className="img-section">
                        {content.mainDescriptionBrands.map( ( brand, index ) =>
                            <img src={brand.logo} alt={brand.alt} key={`brand-${ index }`} width={100} />
                        )}
                    </div>
                </section>
                <section className="service-description-steps">
                    <div className="steps-description">
                        <header>
                            <h1> how we do {content.mainDescriptionHeading} <br /> influencer marketing</h1>
                            {content.serviceTextDescription}
                        </header>
                        <div className="service-description-steps-list">
                            {
                                content.serviceSteps.map( ( step, index ) =>
                                {
                                    return (
                                        < BlankImageText key={`service step${ index + 1 }`} text={step.text} media={step.img} reverse={step.reverse} />
                                    )
                                } )
                            }
                        </div>


                    </div>
                    <div className="service-promo">
                        <div className="service-promo-heading">
                            <h1>
                                What makes us different from everyone else
                            </h1>
                            <img src="/images/curly-arrow.svg" alt="" />
                        </div>
                        <div className="service-promo-content">
                            {content.servicePromos.map( ( promo, index ) => (
                                <div key={` promo-${ index }`} className="service-promo-item">
                                    <img src="/images/circled-tick.svg" alt="a tick mark enclosed in a circle" />
                                    <h2>{promo.bigText}</h2>
                                    <p>{promo.smallText}</p>
                                </div>
                            ) )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}


ServiceDescription.propTypes = {
    content: PropTypes.shape( {
        mainDescriptionHeading: PropTypes.string,
        mainDescriptionText: PropTypes.element,
        mainDescriptionBrands: PropTypes.shape( {
            logo: PropTypes.string,
            alt: PropTypes.string
        } ),
        serviceTextDescription: PropTypes.element,
        serviceSteps: PropTypes.shape( {
            text: PropTypes.string,
            img: PropTypes.string
        } ),
        servicePromos: PropTypes.shape( {
            bigText: PropTypes.string,
            smallText: PropTypes.string
        } )
    } )
}
export default ServiceDescription