import "./promo.scss"

const Promo = () =>
{
    return (
        <section className="promo-container">
            <div className="promo-content">
                <h1>
                    A match made in <br className="first-break" /> <span>influencer <br className="second-break" />marketing heaven</span>.
                </h1>
                <p>
                    we&#x201B;re basically tinder* but for businesses and social media
                    influencers and creators
                </p>
                <div className="promo-images-container">
                    <img src="/images/creators/brand-client.png" alt="image of brands and creators connected" />
                    <img src="/images/creators/brand-client-mobile.png" alt="image of brands and creators connected" />

                </div>
                <p>
                    * minus the ghosting, the no-show first dates, and the uncomfortable
                    getting-to-know-you questions.
                </p>
            </div>
        </section>
    )
}

export default Promo
