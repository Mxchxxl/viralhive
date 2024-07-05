import "./reviewcarousel.scss"

import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { useEffect, useRef } from "react"

const ReviewCarousel = () =>
{
  const leftButton = useRef( null )
  const rightButton = useRef( null )
  const carousel = useRef( null )

  const reviews = [
    {
      reviewText:
        "ViralHive was instrumental in our recent influencer campaign. Their team's expertise and creativity were invaluable in helping us reach a wider audience and drive engagement.",
      reviewerName: "Alex Thompson",
      reviewerBrand: "Nike",
      reviewerImage: "/images/reviews/AlexThompson.jpg",
    },
    {
      reviewText:
        "I've worked with numerous influencer marketing agencies, but ViralHive stands out for their exceptional results and personalized approach. Their team is truly dedicated to their clients' success.",
      reviewerName: "Olivia Lee",
      reviewerBrand: "Coca-Cola",
      reviewerImage: "/images/reviews/OliviaLee.jpg",
    },
    {
      reviewText:
        "Working with ViralHive was a fantastic experience. Their team is professional, efficient, and always willing to go the extra mile. I highly recommend them to anyone looking for top-notch influencer marketing services.",
      reviewerName: "Daniel Kim",
      reviewerBrand: "Apple",
      reviewerImage: "/images/reviews/DanielKim.jpg",
    },
    {
      reviewText:
        "ViralHive exceeded our expectations in every way. Their creative ideas and strategic approach helped us achieve our campaign goals and surpass our KPIs.",
      reviewerName: "Emily Chen",
      reviewerBrand: "Microsoft",
      reviewerImage: "/images/reviews/EmilyChen.jpg",
    },
    {
      reviewText:
        "I was impressed by ViralHive's ability to identify the perfect influencers for our campaign. Their deep understanding of their audience and how to connect with them effectively is unmatched.",
      reviewerName: "Ben Davis",
      reviewerBrand: "Amazon",
      reviewerImage: "/images/reviews/BenDavis.jpg",
    },
    {
      reviewText:
        "ViralHive provided excellent customer service and support throughout our campaign. Their team was always responsive and helpful, and they made the entire process stress-free.",
      reviewerName: "Ava Martinez",
      reviewerBrand: "Google",
      reviewerImage: "/images/reviews/AvaMartinez.jpg",
    },
    {
      reviewText:
        "I'm so glad we chose ViralHive for our influencer marketing campaign. Their team is incredibly talented and dedicated, and they helped us achieve amazing results that exceeded our expectations.",
      reviewerName: "Noah Rodriguez",
      reviewerBrand: "Meta",
      reviewerImage: "/images/reviews/NoahRodriguez.jpg",
    },
    {
      reviewText:
        "ViralHive is a top-notch influencer marketing agency. Their team is knowledgeable, creative, and always willing to go the extra mile. I highly recommend them to anyone looking for a reliable and effective partner.",
      reviewerName: "Riley Parker",
      reviewerBrand: "Netflix",
      reviewerImage: "/images/reviews/RileyParker.jpg",
    },
    {
      reviewText:
        "Working with ViralHive was a pleasure. Their team is professional, efficient, and always willing to help. I'm so grateful for their expertise and support.",
      reviewerName: "Sophia Carter",
      reviewerBrand: "Spotify",
      reviewerImage: "/images/reviews/SophiaCarter.jpg",
    },
    {
      reviewText:
        "I've worked with many influencer marketing agencies, but ViralHive is by far the best. Their team is incredibly talented and dedicated, and they helped us achieve amazing results that exceeded our expectations.",
      reviewerName: "Ethan Taylor",
      reviewerBrand: "Tesla",
      reviewerImage: "/images/reviews/EthanTaylor.jpg",
    },
  ]

  useEffect( () =>
  {
    const carouselChildren = Array.from(
      carousel.current.querySelectorAll( ".carousel-item" )
    )
    const width = carouselChildren[ 0 ].offsetWidth
    let length = carouselChildren.length
    carousel.current.insertAdjacentHTML(
      "afterbegin",
      carouselChildren[ length - 1 ].outerHTML
    )
    carousel.current.insertAdjacentHTML(
      "beforeend",
      carouselChildren[ 0 ].outerHTML
    )
    carousel.current.classList.add( "no-transition" )
    carousel.current.scrollLeft = width
    carousel.current.classList.remove( "no-transition" )


    const leftScroll = () =>
    {
      console.log( "left button clicked" )
      carousel.current.scrollLeft += -width
    }

    const rightScroll = () =>
    {
      carousel.current.scrollLeft += width
    }

    const infiniteScroll = () =>
    {
      if ( carousel.current.scrollLeft === 0 )
      {
        carousel.current.classList.add( 'no-transition' )
        carousel.current.scrollLeft = carousel.current.scrollWidth - 2 * width
        carousel.current.classList.remove( 'no-transition' )
        console.log( 'at beginign' )

      } else if ( Math.ceil( carousel.current.scrollLeft ) === ( carousel.current.scrollWidth - carousel.current.offsetWidth ) )
      {
        console.log( "at end" )
        carousel.current.classList.add( "no-transition" )
        carousel.current.scrollLeft = width
        carousel.current.classList.remove( "no-transition" )
      }
    }

    const autoPlay = () =>
    {
      setInterval( () =>
      {
        carousel.current.scrollLeft += width
      }, 5000 )
    }



    leftButton.current.addEventListener( "click", leftScroll )
    rightButton.current.addEventListener( "click", rightScroll )
    carousel.current.addEventListener( "scroll", infiniteScroll )

    autoPlay()

    return () =>
    {
      leftButton.current.removeEventListener( "click", leftScroll )
      rightButton.current.removeEventListener( "click", rightScroll )
      carousel.current.removeEventListener( "scroll", infiniteScroll )
      carousel.current.removeChild( carousel.current.firstElementChild )
      carousel.current.removeChild( carousel.current.lastElementChild )
    }



  }, [] )




  return (
    <div className="review-carousel-container">
      <div className="review-carousel-content">
        <div ref={leftButton} className="carousel-slider-left">
          <KeyboardArrowLeft />
        </div>
        <div ref={carousel} className="carousel-slider">
          {reviews.map( ( item ) =>
          {
            return (
              <div key={Math.random()} className="carousel-item">
                <div className="big-purple-circle"></div>
                <div className="small-pink-circle"></div>
                <p>{`"${ item.reviewText }"`}</p>
                <span>
                  -{item.reviewerName}, {item.reviewerBrand}
                </span>
                <img
                  src={item.reviewerImage}
                  alt={`profile photo of client representing ${ item.reviewerBrand }`}
                  className="reviewer-image"
                />
              </div>
            )
          } )}
        </div>
        <div ref={rightButton} className="carousel-slider-right">
          <KeyboardArrowRight />
        </div>
      </div>
    </div>
  )
}

export default ReviewCarousel
