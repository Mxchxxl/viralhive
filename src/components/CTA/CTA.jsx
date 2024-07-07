import Button from "../Button/Button"
import DotGrid from './../DotGrid/DotGrid'
import "./cta.scss"


const CTA = () =>
{
    return (
        <section className="cta-container">
            <div className="cta-content">
                <div className="cta-text">
                    <h2>
                        &#x0022;Help me reach my target <br /> audience on...&#x0022;
                    </h2>
                    <div className="buttons">
                        <Button text="TikTok" />
                        <Button text="Instagram" />
                        <Button text="Youtube" />
                    </div>
                </div>
                <DotGrid />

            </div>
        </section>
    )
}

export default CTA
