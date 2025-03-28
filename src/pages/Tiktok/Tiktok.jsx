import "./tiktok.scss"

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

const Tiktok = () =>
{
    const heroContent = {
        smallHeading: "TikTok Influencer Marketing Simplified",
        bigHeading: "Effortlessly boost your brand with TikTok influencer marketing.",
        text: (
            <>
                <p> We make TikTok influencer marketing <span className="text-violet">simple</span>, <span className="text-violet">effective</span>, and <span className="text-violet">engaging</span>.</p> <p>With a network of 8,000+ creators boasting a collective audience of over 27 billion followers, we connect you with the perfect influencers to supercharge your campaigns. Whether you’re looking to drive awareness or amplify engagement, we make it easy, effective, and impactful.</p> <p>Let’s bring your brand to life.</p>
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
        mainDescriptionHeading: "Tiktok",
        mainDescriptionText: <>
            <p>Before we began crafting TikTok strategies for brands, our team members were already thriving as creators on the platform.</p>
            <p>When we say we understand the game, we’ve played it, mastered it, and gone viral countless times.</p>
            <p>That’s why we know exactly how to turn your TikTok influencer campaign into a standout success. And with our dedicated, full-service team, we’ll handle every detail to make it happen seamlessly.</p>
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
                text: "Building a testing roadmap for your TikTok campaign",

                img: "/images/purple_Group.svg",
                reverse: false
            },
            {
                text: "Choosing the best-fit TikTok creators to work with.",

                img: "/images/puzzle_Frame.svg",
                reverse: true
            },
            {
                text: "Crafting a strategy based on your specific goals.",

                img: "/images/sketch_Group.svg",
                reverse: false
            },
            {
                text: "Executing the entire TikTok campaign from start to finish, including quality control.",
                img: "/images/meeting_dd.svg",
                reverse: true
            },
            {
                text: "Sharing real-time performance metrics with your team.",
                img: "/images/charts_Group.png",
                reverse: false
            },
            {
                text: "Optimizing and building upon your success to develop a long-term strategy for your TikTok influencer marketing channel.",

                img: "/images/trees_dd.svg",
                reverse: true
            }
        ],
        servicePromos: [
            {
                bigText: "We don’t like average",
                smallText: "Most TikTok influencer agencies price their creators based on average views and follower counts. We focus on median views and historical performance which leads to better relationships with our creators and better CPM for brand partners like you."
            },
            {
                bigText: "We eliminate creative confusion",
                smallText: "Influencer marketing can be messy sometimes. We ensure creative consistency across the board by delivering a custom creative brief made specifically for each creator so they know exactly what they need to do and you don’t need to ask for follow-up."
            },
            {
                bigText: "We don’t follow trends, we set them",
                smallText: "We know the difference between riding the bandwagon and driving it. We like to observe the trends of TikTok and employ strategies that leverage trends without diluting content quality."
            }
        ]
    }
    return ( <div className="tiktok-page">
        <Navigation />
        <ReuseableHero content={heroContent} />

        <ServiceDescription content={ServiceDescriptionContent} />
        {/* <BlankImageText media="/images/puzzle_Frame.svg" text="Sharing real-time performance metrics with your team." /> */}
        < Footer />
    </div>
    )
}

export default Tiktok