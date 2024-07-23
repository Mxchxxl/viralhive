import "./casestudies.scss"

import BlankMediaLink from "../../components/BlankMediaLink/BlankMediaLink"
import Footer from "../../components/Footer/Footer"
import Navigation from "../../components/Navigation/Navigation"
import PageHeader from "../../components/PageHeader/PageHeader"

const CaseStudies = () =>
{

    const pageHeader = {
        smallHeading: "case studies",
        bigHeading: <>
            We run campaigns with payoffs you can measure.
        </>,
        text: "See how these brands surpassed their goals and drove more revenue. You could be next."
    }
    const caseStudies = [
        {
            text: "How Zilla Hit 9.2 Million Views, 58K Paid Clicks, and Became Their Target Customer’s Lifelong Brand",
            media: "/images/case-study1.png",
            mediaAlt: " lorem ipsum"
        },
        {
            text: "How Zilla Hit 9.2 Million Views, 58K Paid Clicks, and Became Their Target Customer’s Lifelong Brand",
            media: "/images/case-study1.png",
            mediaAlt: " lorem ipsum"
        },
        {
            text: "How Zilla Hit 9.2 Million Views, 58K Paid Clicks, and Became Their Target Customer’s Lifelong Brand",
            media: "/images/case-study1.png",
            mediaAlt: " lorem ipsum"
        },
        {
            text: "How Zilla Hit 9.2 Million Views, 58K Paid Clicks, and Became Their Target Customer’s Lifelong Brand",
            media: "/images/case-study1.png",
            mediaAlt: " lorem ipsum"
        },
        {
            text: "How Zilla Hit 9.2 Million Views, 58K Paid Clicks, and Became Their Target Customer’s Lifelong Brand",
            media: "/images/case-study1.png",
            mediaAlt: " lorem ipsum"
        },
        {
            text: "How Zilla Hit 9.2 Million Views, 58K Paid Clicks, and Became Their Target Customer’s Lifelong Brand",
            media: "/images/case-study1.png",
            mediaAlt: " lorem ipsum"
        }
    ]
    return (
        <div className="case-studies-page">
            <Navigation />
            <PageHeader {...pageHeader} />
            <div className="case-studies-list">
                {caseStudies.map( ( caseStudy, index ) =>
                {
                    return (
                        <BlankMediaLink key={`case-study-${ index }`} {...caseStudy} buttonText={'read study'} />
                    )
                } )}
            </div>
            <Footer />
        </div>
    )
}
export default CaseStudies