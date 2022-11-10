import React from 'react'
import { CarouselContainer, DescriptionContainer, DtailsPageContainer, RelatedItems } from "./style"
var Carousel = require("react-responsive-carousel").Carousel;
import "react-responsive-carousel/lib/styles/carousel.css";
import { Items } from '../HomePage';

function DetailsPage() {
  return (
    <>
    <DtailsPageContainer>
      {/* <div>DetailsPage</div> */}
      <CarouselContainer>

        <Carousel
            showArrows={true}
            // onChange={onChange}
            // onClickItem={onClickItem}
            
            dynamicHeight={true}
            infiniteLoop={true}
            // onClickThumb={onClickThumb}
          >
            <div>
              <img src="/el.jpg" />
            </div>
            <div>
              <img src="/el.jpg" />
            </div>
            <div>
              <img src="/el.jpg" />
            </div>
          </Carousel>
      </CarouselContainer>
      <DescriptionContainer>
        <h2>War Horse</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dolore sapiente repellendus earum qui quisquam aperiam veritatis inventore dolorem. Praesentium ipsa illo excepturi aperiam dignissimos odio voluptas, et repellendus? Natus dolor corporis veritatis reprehenderit soluta. Nobis, quasi. Repudiandae obcaecati ullam magni doloribus placeat optio, tenetur totam quos sit earum cumque non tempore ex, beatae inventore ipsum iste vero odio iusto error officia. Ex provident, rerum.</p>
          <div className="buttons">
            <div className="btn-outline">Add To Cart</div>
            <div className="btn">Order Now</div>
          </div>
      </DescriptionContainer>
    </DtailsPageContainer>
      <RelatedItems>
        <Items/>
      </RelatedItems>
    </>
  )
}

export default DetailsPage