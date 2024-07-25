import "./aboutviralhive.scss"

import Button from "../../components/Button/Button"
import CTA from "../../components/CTA/CTA"
import Footer from "../../components/Footer/Footer"
import Navigation from "../../components/Navigation/Navigation"
import PageHeader from "../../components/PageHeader/PageHeader"

const AboutViralHive = () =>
{
    const pageHeader = {
        smallHeading: "about us",
        bigHeading: <>
            hi. we&apos;re <span className="text-violet">
                {" "} viralhive
            </span>. we are influencer marketing

        </>,
        text: "ViralHive has been in the influencer marketing game since 2021, but our team of social media professionals, marketing executives, developers, designers, and influencers have a collective multiple decades of experience.  ",
        buttonText: ""
    }

    const ourStory = {
        intro: [
            "It all started in 2020.",
            "Jess Flack, head of performance marketing at the booming moving startup Bellhop, had a seemingly simple task: maximize profits while minimizing spending.",
            "A new social media platform was generating buzz, touted as 'the next Vine.'",
            "Jess was initially doubtful, but instead of immediately investing Bellhop's resources, she chose to investigate on her own time."
        ],
        research: [
            "After nearly 100 hours of personal research, including late nights spent contacting and negotiating with around 200 influencers, Jess finally had some data.",
            "The results were astonishing: CPMs were 75% lower than Instagram and 85% lower than YouTube.",
            "Realizing the potential, Jess sought a way to scale this strategy for Bellhop.",
            "She approached several influencer marketing agencies, but was unimpressed with their offerings."
        ],
        viralHive: [
            "Undeterred, Jess decided to bring TikTok influencer marketing in-house, training her team to replicate her process.",
            "The strategy was incredibly successful, so much so that Jess left Bellhop to launch her own agency: ViralHive.",
            "In just one year, ViralHive has onboarded over 300 businesses, collaborated with more than 4,000 influencers, and managed tens of millions of dollars in ad spend.",
            "The outcome? Pure magic."
        ],
        callToAction: [
            "And now, let's create some magic together."
        ]
    }

    const coreValues = {
        intro: [
            "Some brands call it a manifesto. Others, a mission statement.",
            "For us, this is what we care about and seek to embody as we navigate this world as entrepreneurs, creatives, and marketers."
        ],
        diversity: [
            "Diversity isn’t stumbled upon.",
            "We believe in the power of diversity.",
            "It fuels creativity, fosters innovation, and enriches our brand.",
            "We embrace unique perspectives and backgrounds."
        ],
        curiosity: [
            "Curiosity keeps companies out of trouble.",
            "Companies should follow their curiosities.",
            "We encourage our people to question everything until they get to the heart of why they are doing what they’re doing."
        ],
        customerObsession: [
            "Not customer-focused, customer-obsessed.",
            "We’re not just focused on our customers. We’re obsessed with them.",
            "We want to understand their problems deeply, so we can provide them with solutions that can solve those problems for a lifetime."
        ],
        energy: [
            "We don’t employ vampires.",
            "We don’t hire blood-thirsty, energy-sucking vampires.",
            "Every teammate at ViralHive is expected to be a fountain not a drain; to bring more energy than they take."
        ],
        goalOrientation: [
            "Let’s get to the finish line.",
            "Sure, we focus on the present, but we go about this focus with the future in mind.",
            "In other words, we’re goal-oriented.",
            "We create meaningful, achievable milestones to accelerate ourselves towards our grand vision."
        ]
    }

    const team = [
        {
            fullname: "Ava Sterling",
            title: "CEO & Founder",
            pic: '/images/team1.jpg',
            bio: "Film buff. Discovered her passion for marketing. Watched fewer films. Helped brands thrive. Excelled at several advertising firms. Joined Stride to lead their performance marketing division where she tripled paid channel revenue faster than you can say 'ROI.' Now she’s leading ViralHive and finding it’s more exciting than any movie she’s ever seen."
        },
        {
            fullname: "Ethan Walsh",
            title: "EVP of Partnerships & Growth",
            pic: '/images/team2.jpg',
            bio: "Impressive surname. Spent over a decade at GlobalCom in Sales & Sales Leadership, managing a multi-million dollar portfolio and then five years at TechForward as a strategic partnerships lead, overseeing some of their key alliances. He enjoys cycling, exploring hidden local spots, curating art collections, and spending time with his family."
        },
        {
            fullname: "Liam Miller",
            title: "CFO",
            pic: '/images/team3.jpg',
            bio: "From auditing with KPMG to financial planning in the software industry, Liam has witnessed firsthand how a top-tier finance team can shape and drive strategic expansion. When he’s not analyzing financial data, he enjoys hiking, camping, and playing the guitar.  He's recently embraced the challenge of balancing it all with a new puppy."
        },
        {
            fullname: "Chloe Davis",
            title: "VP of Talent Acquisition",
            pic: '/images/team4.jpg',
            bio: "Despite popular assumptions, she’s not from the West Coast but the East Coast; and she channels her enthusiasm for travel and diverse cultures into Talent Acquisition, cultivating a welcoming and adaptable atmosphere where skilled individuals can excel. She’s currently learning to play the ukulele."
        },
        {
            fullname: "Nora Evans",
            title: "VP of Client Success",
            pic: '/images/team5.jpg',
            bio: "After serving as a senior manager at a digital marketing agency for six years, Nora ventured into the world of tech startups. She was the first employee at ViralHive. She loves podcasts, dogs, podcasts about dogs, and could live on veggie burgers and sweet potato fries."
        }
    ]

    return (
        <div className="aboutviralhive-page">
            <Navigation />
            <section>
                <PageHeader {...pageHeader} />
            </section>
            <section>
                <div className="description-section">
                    <h2>
                        this is the new frontier of marketing
                    </h2>
                    <p>
                        On platforms like <span className="text-violet">TikTok</span>, <span className="text-violet">Instagram</span>, and <span className="text-violet">YouTube</span>, a new generation of creators are enhancing brand awareness, perception, and adoption of products and services.
                    </p>
                    <p>
                        For brands, the cost of entry is getting lower. Influencer marketing is now just as accessible to startups and small businesses as it is to Fortune 1000s.
                    </p>

                    <p>
                        We believe that the best influencer marketing strategies are mutually beneficial for brands and creators, helping brands accomplish their goals while providing a valuable income stream for hard-working creators everywhere.
                    </p>
                    <p>
                        Here at ViralHive, our goal is to be the long-term partner for both brands and creators, working hand-in-hand with both sides of the market to make magic happen each time we ink a new partnership or launch a campaign.
                    </p>
                    <p>
                        Our mission is to change the world of influencer marketing for the better, one campaign at a time.
                    </p>
                    <p>
                        We are viralhive.
                    </p>
                </div>
            </section>
            <section>
                <div className="blank-cta-card">
                    <div className="blank-cta-content">
                        <h2>
                            Don’t take it from us, take it from them.
                        </h2>
                        <p>
                            “Putting money into TikTok is complex, time-consuming, and requires countless hours of coordination and effort, but the ViralHive team simplifies the process and executes with excellence.”
                        </p>
                        <div>- Aly Treuhaft,  Triller</div>
                        <Button text="lets talk" />
                    </div>
                </div>
            </section>

            <section>
                <div className="our-story ">
                    <h2 className="text-violet">
                        our story
                    </h2>
                    <div className="our-story-section">
                        <div className="our-story-intro">
                            <h3>
                                intro
                            </h3>

                            {ourStory.intro.map( ( item, index ) => (
                                <p key={index}>{item}</p>
                            ) )}

                        </div>
                        <div className="our-story-research">
                            <h3>
                                research
                            </h3>

                            {ourStory.research.map( ( item, index ) => (
                                <p key={index}>{item}</p>
                            ) )}

                        </div>
                        <div className="our-story-viralhive">
                            <h3>
                                viralhive
                            </h3>

                            {ourStory.viralHive.map( ( item, index ) => (
                                <p key={index}>{item}</p>
                            ) )}

                        </div>
                        <div className="our-story-call-to-action">

                            {ourStory.callToAction.map( ( item, index ) => (
                                <p key={index}>{item}</p>
                            ) )}

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="our-values">
                    <h2>
                        our values
                    </h2>
                    <div className="our-values-section">
                        <div className="our-values-intro">
                            <h3>
                                intro
                            </h3>

                            {coreValues.intro.map( ( item, index ) => (
                                <p key={index}>{item}</p>
                            ) )}

                        </div>
                        <div className="our-values-diversity">
                            <h3>
                                diversity
                            </h3>

                            {coreValues.diversity.map( ( item, index ) => (
                                <p key={index}>{item}</p>
                            ) )}

                        </div>
                        <div className="our-values-curiosity">
                            <h3>
                                curiosity
                            </h3>

                            {coreValues.curiosity.map( ( item, index ) => (
                                <p key={index}>{item}</p>
                            ) )}

                        </div>
                        <div className="our-values-customer-obsession">
                            <h3>
                                customer obsession
                            </h3>

                            {coreValues.customerObsession.map( ( item, index ) => (
                                <p key={index}>{item}</p>
                            ) )}

                        </div>
                        <div className="our-values-energy">
                            <h3>
                                energy
                            </h3>

                            {coreValues.energy.map( ( item, index ) => (
                                <p key={index}>{item}</p>
                            ) )}

                        </div>
                        <div className="our-values-goal-orientation">
                            <h3>
                                goal orientation
                            </h3>

                            {coreValues.goalOrientation.map( ( item, index ) => (
                                <p key={index}>{item}</p>
                            ) )}

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="the-team">
                    <header>
                        <h2>
                            meet the team
                        </h2>
                    </header>
                    {
                        team.map( ( person, index ) =>
                        {
                            return (
                                <div className="team-member" key={index}>
                                    <div className="team-member-brief">
                                        <div className="team-member-pic">
                                            <img src={person.pic} alt={person.fullname} />
                                        </div>
                                        <div className="team-member-info">
                                            <h3>{`${ person.fullname }, `} <span className="text-violet">{person.title}</span></h3>

                                        </div>
                                    </div>

                                    <div className="team-member-bio">

                                        <p>{person.bio}</p>
                                    </div>
                                </div>
                            )
                        } )
                    }
                </div>
            </section>
            <CTA />
            <Footer />
        </div>
    )
}
export default AboutViralHive