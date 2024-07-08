import Button from "../Button/Button"
import DotGrid from "../DotGrid/DotGrid"
import SocialGuy from "/images/young-fly.png"
import "./outprocesshero.scss"


const OurprocessHero = () =>
{
    return (
        <section className="ourprocesshero-container">
            <div className="ourprocesshero-content">
                <div className="ourprocesshero-img-container">
                    <div className="ourprocesshero-img-content">
                        <DotGrid />
                        <img
                            className="ourprocesshero-img"
                            src={SocialGuy}
                            alt="beautiful girl in white background"
                        />
                        <div className="round-circles">
                            <div className="big-purple"></div>
                            <div className="small-pink"></div>
                        </div>
                    </div>

                </div>

                <div className="ourprocesshero-text">
                    <div className="stars"></div>

                    <h1>We believe in making influencer marketing simple.</h1>
                    <p>
                        Unlike other influencer marketing agencies, we handle every touchpoint of your influencer marketing channel —from organic content creation to managing influencer partnerships to deploying ad spend,
                    </p>
                    <Button
                        text="let's talk"
                        effect={() =>
                        {
                            console.log( "clicked" )
                        }}
                        icon=""
                    />
                    <span>
                        Still making up your mind?  <a href="">Here’s the full breakdown of how it works</a>.
                    </span>
                </div>
            </div>
        </section>
    )
}

export default OurprocessHero
