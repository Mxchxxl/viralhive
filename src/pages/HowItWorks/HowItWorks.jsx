import "./howitworks.scss"

import CTA from "../../components/CTA/CTA"
import Footer from "../../components/Footer/Footer"
import Navigation from './../../components/Navigation/Navigation'
import PageHeader from "../../components/PageHeader/PageHeader"
import ReviewCarousel from "../../components/ReviewCarousel/ReviewCarousel"

const HowItWorks = () =>
{
    const pageHeader = {
        smallHeading: "how it works",
        bigHeading: <>
            Deploy world-class influencer marketing campaigns with
            <span className="text-violet">
                {" "} viralhive
            </span>
        </>,
        text: "We help you exceed your goals using our ecosystem of 13K+ creators with 27B+ combined followers, proprietary real-time data platform, and proven methodologies for launching impactful campaigns. ",
        buttonText: "sound's good? lets talk"
    }

    const resultsFigures = [
        {
            number: 1.4,
            unit: 'b',
            text: "impressions generated"
        },
        {
            number: 27,
            unit: 'b',
            text: "total followers of our creator network"
        },
        {
            number: 47.5,
            unit: 'k',
            text: "uniquie pieces of content created"
        },
    ]

    const resultsSteps = {
        heading: "Here’s how we make your business ubiquitous.",
        text: "If you choose the Full-Service option, running scalable influencer marketing campaigns with Ubiquitous is as easy as 1-2-3 (4). ",
        steps: [
            {
                stepHeading: "Choose Your Campaign Goals",
                stepText: "You’ll collaborate with our team of experienced strategists to fully define your target audience, key objectives, preferred social channels, and whatever else equals success for your campaign."
            },
            {
                stepHeading: "Choose Your Campaign Goals",
                stepText: "You’ll collaborate with our team of experienced strategists to fully define your target audience, key objectives, preferred social channels, and whatever else equals success for your campaign."
            },
            {
                stepHeading: "Choose Your Campaign Goals",
                stepText: "You’ll collaborate with our team of experienced strategists to fully define your target audience, key objectives, preferred social channels, and whatever else equals success for your campaign."
            },
            {
                stepHeading: "Choose Your Campaign Goals",
                stepText: "You’ll collaborate with our team of experienced strategists to fully define your target audience, key objectives, preferred social channels, and whatever else equals success for your campaign."
            }
        ]
    }
    return (
        <div className="howitworks-page">
            <Navigation />
            <PageHeader {...pageHeader} />
            <div className="results-figures">
                <div className="results-figures-content">
                    {
                        resultsFigures.map( ( result, index ) =>
                        {
                            return (
                                <div key={`result-${ index }`}>
                                    <h1>
                                        {result.number + "" + result.unit}
                                    </h1>
                                    <p>
                                        {result.text}
                                    </p>
                                </div>

                            )
                        } )
                    }


                </div>
            </div>
            <div className="single-promo-card">
                <div className="single-promo-content">
                    <p>
                        “They keep a fun, organic feel to the content without losing the marketing message... All Ubiquitous representatives have been very friendly and demonstrate understanding of our business needs, and are prompt to respond to any questions or make us aware of any action items needed.”
                    </p>
                    <div>
                        <span className="dash">-</span><span>Margaux Stickney, J. Crew Factory</span>
                    </div>

                    <img src="/images/reviews/OliviaLee.jpg" alt="" />
                </div>
            </div>
            <div className="results-steps">
                <div className="results-step-content">
                    <div className="heading">
                        <h2>
                            {resultsSteps.heading}
                        </h2>
                        <p>
                            {resultsSteps.text}
                        </p>
                    </div>

                    <div className="results-steps-list">
                        {
                            resultsSteps.steps.map( ( step, index ) =>
                            {
                                return (
                                    <div key={`results-step${ index }`} className="results-step-item">
                                        <header><span>{index + 1}</span> <h2>{step.stepHeading}</h2></header>
                                        <p>{step.stepText}</p>
                                    </div>
                                )
                            } )
                        }
                    </div>
                </div>
            </div>
            <ReviewCarousel />
            <CTA />
            <Footer />
        </div>
    )
}
export default HowItWorks