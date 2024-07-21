import "./howitworkscreators.scss"

import Button from "../../components/Button/Button"
import Footer from "../../components/Footer/Footer"
import Navigation from './../../components/Navigation/Navigation'
import PageHeader from "../../components/PageHeader/PageHeader"

const HowItWorksCreators = () =>
{

    const pageHeader = {
        smallHeading: "creators",
        bigHeading: <>
            Join the premiere creator network.
        </>,
        text: "Partner with viralhive and get the best brand deals on the market.",
        buttonText: "lets talk"
    }



    const info = {
        heading: "viralhive knows creators.",
        text: "If you choose the Full-Service option, running scalable influencer marketing campaigns with ViralHive is as easy as 1-2-3 (4). ",
        infoItems: [
            {

                text: "We typically work with creators who have 50K+ followers on all social media."
            },
            {

                text: "ViralHive knows what’s important to you: money, transparency, creative control, non-exclusivity, accessibility, and personalization."
            },
            {

                text: "Our mission is to help you land brand deals that match your authentic voice while making you lots and lots of money."
            },
            {

                text: "Our expert team has controlled over $1B in marketing spend throughout our careers - we know what works for you and for brands."
            }
        ]
    }

    const howWeDoIt = [
        'We receive a brand budget and campaign request.',
        'We pull creators that match the brand.',
        'The brand approves or denies the creators.',
        'We present you an offer with expected deliverables and payout.',
        'You choose to accept or deny the offer.',
        'Once you accept, a campaign coordinator will be assigned to you.',
        'You execute the expected deliverables with the help of your coordinator.',
        'You get paid via direct deposit into your bank account!'
    ]

    return (
        <div className="howitworkscreators-page">
            <Navigation />
            <PageHeader {...pageHeader} />

            <div className="blank-cta-card">
                <div className="blank-cta-content">
                    <h2>
                        Want to collaborate with Amazon?
                    </h2>
                    <p>
                        If you have more than 2,000 followers, we have an Amazon brand deal available for you right now.  Click the button below for more info.
                    </p>

                    <Button text="give me the info" />
                </div>
            </div>
            <div className="viralhive-info">
                <div className="viralhive-info-content">
                    <div className="heading">
                        <h2>
                            {info.heading}
                        </h2>

                    </div>

                    <div className="info-list">
                        {
                            info.infoItems.map( ( info, index ) =>
                            {
                                return (
                                    <div key={`nugget-${ index }`} className="info-item">

                                        <h4>{info.text}</h4>
                                    </div>
                                )
                            } )
                        }
                    </div>
                </div>
            </div>

            <div className="simple-review-card">
                <div className="simple-review-card-content">
                    <p>
                        “My team at ViralHive, without fail, comes through with the most positive attitudes and it is down right contagious!”
                    </p>
                    <span>
                        - @userx (tiktok)
                    </span>
                </div>
            </div>

            <div className="viralhive-offers">
                <div className="viralhive-offers-content">
                    <div className="left-section">
                        <h1>
                            what we offer to creators
                        </h1>
                        <ul>
                            <li>
                                <img src="/images/circled-tick.svg" alt="a tick mark enclosed in a circle" />
                                market expertise for deal negotiation
                            </li>
                            <li>
                                <img src="/images/circled-tick.svg" alt="a tick mark enclosed in a circle" />
                                an entire team to help you execute campaigns
                            </li>
                            <li>
                                <img src="/images/circled-tick.svg" alt="a tick mark enclosed in a circle" />
                                average creator payouttime: 15 days
                            </li>

                        </ul>
                    </div>

                    <div className="right-section">
                        <h1>
                            our promise to creators
                        </h1>
                        <ul>
                            <li>
                                <img src="/images/circled-tick.svg" alt="a tick mark enclosed in a circle" />
                                100% non exclusive
                            </li>
                            <li>
                                <img src="/images/circled-tick.svg" alt="a tick mark enclosed in a circle" />
                                direct payment within 30 days of completion
                            </li>
                            <li>
                                <img src="/images/circled-tick.svg" alt="a tick mark enclosed in a circle" />
                                24/7 direct support from a campaign manager
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="simple-review-card">
                <div className="simple-review-card-content">
                    <p>
                        “My team at ViralHive answers all my emails and creates documents to make my life so much easier... they help me make so much more income!”
                    </p>
                    <span>
                        - @raven001 (tiktok)
                    </span>
                </div>
            </div>

            <div className="about-viralhive">
                <div className="about-viralhive-content">
                    <div className="heading">
                        <h2>
                            about viralhive
                        </h2>
                    </div>
                    <div className="text">
                        <p>
                            ViralHive is an influencer marketing company that acts as an intermediary between brands and creators. Brands come to us with budgets and campaign ideas. We build the campaigns and creative for them, then match creators on our roster to fulfill their needs.
                        </p>
                        <p>
                            We believe in transparency and over communication with our creators. When you work with ViralHive, you have a dedicated campaign manager whose mission is to support you throughout the length of a campaign. Our campaign managers will stay in touch with you via your preferred method of contact (text, email, call) before, during, and after each campaign.
                        </p>

                        <p>
                            We are also completely non-exclusive, meaning you are free to negotiate your own deals and see your own additional partnerships with other agencies. There are no contracts. No costs or fees to work with us. You maintain full creative control over your career. We just bring you deals and help you make as much money as possible.
                        </p>

                    </div>
                </div>
            </div>

            <div className="why-viralhive">
                <div className="why-viralhive-content">
                    <h1>
                        Why you should work with ViralHive
                    </h1>

                    <ul>
                        <li>
                            no contracts
                        </li>
                        <li>
                            dedicated campaign manager
                        </li>
                        <li>
                            non-exclusive parntership
                        </li>
                        <li>no costs or fees</li>
                    </ul>
                </div>
            </div>

            <div className="how-results">
                <div className="how-results-content">


                    <header>
                        <h2>
                            how we do it
                        </h2>
                        <p>
                            You give us the goals, we make them happen. Our seasoned marketing team will work with you from day one to do the following…
                        </p>
                    </header>
                    <ul>
                        {
                            howWeDoIt.map( ( step, index ) =>
                            {
                                return (
                                    <li key={`step-${ index }`}>
                                        <span className="round-number">{index + 1}</span> {" "}{step}
                                    </li>
                                )
                            } )
                        }
                    </ul>
                </div>
            </div>

            <div className="blank-creators-cta">
                <div className="blank-creators-cta-content">
                    <h1>
                        ready to get started?
                    </h1>

                    <p>
                        join our creator network
                    </p>
                    <Button text="i'm sold" />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default HowItWorksCreators