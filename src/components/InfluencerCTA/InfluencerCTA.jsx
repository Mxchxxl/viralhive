import "./influencercta.scss"
import Button from "../Button/Button"
import LeftGroup from "/images/creators/left-group.png"
import RightGroup from "/images/creators/right-group.png"


const InfluencerCTA = () =>
{
    return (
        <section className="influencercta-container">
            <div className="influencercta-content">
                <img src={LeftGroup} alt="image of social media influencers" />
                <div className="text">
                    <div className="stars"></div>

                    <h1>Calling all influencers <span>(big and small)</span>.</h1>
                    <p>
                        No matter the size of audience, we want to help you make extra dough doing exactly what you’re already doing but for brands you love and use.
                    </p>
                    <Button
                        text="join the influencer collective"
                        effect={() =>
                        {
                            console.log( "clicked" )
                        }}

                    />
                    <span>
                        Still making up your mind? <a href="">Here’s the full breakdown</a>.
                    </span>
                </div>
                <img src={RightGroup} alt="image of social media influencers" />
            </div>
        </section>
    )
}

export default InfluencerCTA
