import "./ceoinfo.scss"
import CeoPicture from "/images/ceo.jpg"


const CeoInfo = () =>
{
    return (
        <section className="ceoinfo-container">
            <div className="ceoinfo-content">
                <img src={CeoPicture} alt="image of viralhive" />
                <h1>
                    <span>*</span>
                    CEO: From Vine to Viral: My Journey to ViralHive
                    <span>*</span>
                </h1>
                <p>
                    In a previous role at Acme Corporation, I spearheaded performance marketing efforts with the goal of maximizing ROI. <br /><br />

                    Intrigued by the emerging social media platform, Flicker, I assembled a team to conduct our own research.
                    Through manual outreach to over 200 influencers, we discovered that advertising rates on this platform were significantly lower than established platforms like Instagram and YouTube.
                    <br /><br />
                    Armed with this knowledge, we developed a vision: to create a technology solution that streamlines the process of running influencer marketing campaigns for brands.
                    And so, ViralHive was born.
                    <br /><br />
                    The outcome? Exceptional results.
                    <br /><br />
                    Let&#39;s collaborate and create some marketing magic together.
                </p>

                <span>-Olivia Harris, Cofounder & CEO of ViralHive</span>
            </div>
        </section>
    )
}

export default CeoInfo
