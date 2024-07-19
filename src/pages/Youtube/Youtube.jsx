import "./youtube.scss"

import CanonLogo from "/images/logo/canon-logo.png"
import Footer from './../../components/Footer/Footer'
import HaierLogo from "/images/logo/haier-logo.png"
import LenovoLogo from "/images/logo/lenovo-logo.png"
import Navigation from "../../components/Navigation/Navigation"
import NetflixLogo from "/images/logo/netflix-logo.png"
import ReuseableHero from "../../components/ReuseableHero/ReuseableHero"
import SamsungLogo from "/images/logo/samsung-logo.png"
import ServiceDescription from "../../components/ServiceDescription/ServiceDescription"
import SocialGirl from '/images/social-girl.jpg'
import SonyLogo from "/images/logo/sony-logo.png"
import { TiktokIcon } from "../../assets/Icons"

const Youtube = () =>
{


    const heroContent = {
        smallHeading: "Youtube Influencer Marketing Simplified",
        bigHeading: "Unlike any Youtube influencer marketing agency.",
        text: (
            <>
                <p>Somewhere along the way, people forgot about  <span className="text-violet">quality youtube influencer marketing.</span> </p>

                <p>We didn’t.</p>
                <p>With 8 figures in spend deployed already, we help brands dominate the explore page.</p>
            </>
        ),
        buttonText: "get started",
        image: SocialGirl,
        imageAlt: "beautiful girl in white background",
        socialIcon: TiktokIcon,
        socialFollowers: "23 million",
        socialColor: "grey"
    }

    const ServiceDescriptionContent = {
        mainDescriptionHeading: "Youtube",
        mainDescriptionText: <>
            <p>Before we began crafting youtube strategies for brands, our team members were already thriving as creators on the platform.</p>
            <p>When we say we understand the game, we’ve played it, mastered it, and gone viral countless times.</p>
            <p>That’s why we know exactly how to turn your Youtube influencer campaign into a standout success. And with our dedicated, full-service team, we’ll handle every detail to make it happen seamlessly.</p>
        </>,
        mainDescriptionBrands: [
            {
                logo: SonyLogo,
                alt: "sony logo"
            },
            {
                logo: CanonLogo,
                alt: "canon logo"
            },
            {
                logo: HaierLogo,
                alt: "haier logo"
            },
            {
                logo: LenovoLogo,
                alt: "lenovo logo"
            },
            {
                logo: SamsungLogo,
                alt: "samsung logo"
            },
            {
                logo: NetflixLogo,
                alt: "netflix logo"
            }
        ],
        serviceTextDescription: <>
            <p>

                You Set the Standard, We Take It to the Next Level
            </p>
            <p>
                Whether it’s building brand awareness, launching a new product, growing your audience, or running an ambassador program, we’re here to make it happen. From start to finish, we’ll handle it all, ensuring your goals are met and exceeded.
            </p>
        </>,
        serviceSteps: [
            {
                text: "Building a testing roadmap for your Youtube campaign",

                img: "/images/purple_Group.svg",
                reverse: false
            },
            {
                text: "Choosing the best-fit Youtube creators to work with.",

                img: "/images/puzzle_Frame.svg",
                reverse: true
            },
            {
                text: "Crafting a strategy based on your specific goals.",

                img: "/images/sketch_Group.svg",
                reverse: false
            },
            {
                text: "Executing the entire Youtube campaign from start to finish, including quality control.",
                img: "/images/meeting_dd.svg",
                reverse: true
            },
            {
                text: "Sharing real-time performance metrics with your team.",
                img: "/images/charts_Group.png",
                reverse: false
            },
            {
                text: "Optimizing and building upon your success to develop a long-term strategy for your Youtube influencer marketing channel.",

                img: "/images/trees_dd.svg",
                reverse: true
            }
        ],
        servicePromos: [
            {
                bigText: "We don’t like average",
                smallText: "Most Youtube influencer agencies price their creators based on average views and follower counts. We focus on median views and historical performance which leads to better relationships with our creators and better CPM for brand partners like you."
            },
            {
                bigText: "We eliminate creative confusion",
                smallText: "Influencer marketing can be messy sometimes. We ensure creative consistency across the board by delivering a custom creative brief made specifically for each creator so they know exactly what they need to do and you don’t need to ask for follow-up."
            },
            {
                bigText: "We don’t follow trends, we set them",
                smallText: "We know the difference between riding the bandwagon and driving it. We like to observe the trends of Youtube and employ strategies that leverage trends without diluting content quality."
            }
        ]
    }


    return (
        <div className="Youtube-page">
            <Navigation />
            <ReuseableHero content={heroContent} />

            <ServiceDescription content={ServiceDescriptionContent} />
            {/* <BlankImageText media="/images/puzzle_Frame.svg" text="Sharing real-time performance metrics with your team." /> */}
            < Footer />
        </div>
    )
}
export default Youtube