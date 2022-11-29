import React, {useState} from 'react'
import Carousel from 'react-simply-carousel';
import { HeroContainer } from './style'
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs"

function Hero() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <HeroContainer>
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "text"
          }
        }}
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        infinite={true}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'transparent',
            border: 'none',
            borderRadius: '50%',
            // color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            position: 'absolute',
            right: '6%'
          },
          children: <span><BsArrowRightCircle color="#474747" size={30}/></span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'transparent',
            border: 'none',
            borderRadius: '50%',
            // color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            position: 'absolute',
            zIndex: 100,
            left: '6%'
          },
          children: <span><BsArrowLeftCircle background="red" color="#474747" size={30} /></span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 1200,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div className="slide1">
          1
        </div>
        <div className="slide2">
          2
        </div>
        <div className="slide3">
          3
        </div>
       
        
      </Carousel>
    </HeroContainer>
  )
}

export default Hero