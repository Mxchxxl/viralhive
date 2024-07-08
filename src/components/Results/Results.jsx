import Button from "../Button/Button"
import "./results.scss"

const Results = () =>
{
    return (
        <section className="results-container">
            <div className="results-content">
                <h1>
                    our campaigns drive results. <span>period.</span>
                </h1>
                <div className="case-study-modal">
                    <img src="/images/logo/nova-brand-image.jpg" alt="nova image" />
                    <div>
                        <p>
                            How Nova Generated 10 Million Views, 65K Paid Clicks, and Became the Go-To Choice for it&apos;s target audience
                        </p>
                        <Button text="read case study" />
                    </div>
                </div>

                <div className="client-statement">
                    <div className="client-statement-content">
                        <p>
                            &rdquo;ViralHive is a pleasure to collaborate with. Their efficiency, reliability, and dedication to our brand are unmatched. They&apos;re more than just a service provider; they&apos;re a valued partner.&rdquo;
                        </p>
                        <div className="client-info">
                            <div>
                                <span className="long-dash">
                                    &mdash;
                                </span>
                                Zoey Adams,
                                <span className="brand-name"> Pulse</span>
                            </div>
                            <div className="client-info-img">
                                <img src="/images/reviews/review-text-img.jpeg" alt="nova image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Results
