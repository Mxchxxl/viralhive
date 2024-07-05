import "./home.scss"

import Footer from "../../components/Footer/Footer"
import Navigation from "../../components/Navigation/Navigation"
import ReuseableHero from "../../components/ReuseableHero/ReuseableHero"
import SocialGirl from "/images/social-girl.jpg"
import { TiktokIcon } from "../../assets/Icons"

const Home = () =>
{
    const heroContent = {
        smallHeading: "Universal Influencer Outreach",
        bigHeading: "Transform Your Brand into a Global Phenomenon.",
        text: ( <>
            Maximize Your Reach with Influencer Marketing. Our extensive network of TikTok, Instagram, and YouTube creators delivers highly engaging, data-backed campaigns designed to drive viral growth for your business
        </> ),
        buttonText: "get started",
        image: SocialGirl,
        imageAlt: "beautiful girl in white background",
        socialIcon: TiktokIcon,
        socialFollowers: "23 million",
        socialColor: "grey"
    }






    return (
        <div className="home-page">
            <Navigation />
            <ReuseableHero content={heroContent} />
            <Footer />
        </div>
    )
}

export default Home