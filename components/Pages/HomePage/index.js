import React from 'react';
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll"
import { HeroContainer } from './../../Blocks/Hero/style';
import { CategoriesContainer, CategoriesWrapper, CategoryContainer, ItemContainer, ItemInfo, ItemsContainer, ItemsWrapper, ValueContainer, ValuesContainer } from './style';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { MdArrowBackIosNew, MdArrowForwardIos, MdAddShoppingCart } from "react-icons/md"
import { AiOutlineHeart } from "react-icons/ai"
import { RiHandCoinLine } from "react-icons/ri"
import { CiDeliveryTruck, CiMedal } from "react-icons/ci"

function Hero() {
  return (
    <HeroContainer>
      hkn
    </HeroContainer>
  )
}
// color="#ffa500" hcolor="#ff8c00"
function Category() {
  return (
    <>
      <CategoryContainer>
        <img src="/el.jpg" alt="" />
        <div className="info">
          <h3>ETHIOPIAN ARTS</h3>
          <div>View</div>
        </div>
      </CategoryContainer>
    </>
  )
}

function Categories() {
  return (
    <CategoriesContainer>
      <div className="title">
        <ScrollAnimation animateIn='fadeIn'>

        <h2>Categories <div></div></h2>
        </ScrollAnimation>
      </div>
      <CategoriesWrapper>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>

          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
        </ScrollMenu>
      </CategoriesWrapper>
    </CategoriesContainer>
  )
}

function Arrow({
  children,
  disabled,
  onClick
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        right: "1%",
        // opacity: disabled ? "0" : "1",
        userSelect: "none",
        backgroundColor: "white",
        height: "36px",
        width: "36px",
        border: "none",
        borderRadius: "50%",
        margin: "auto 0"

      }}
    >
      {children}
    </button>
  );
}

export function LeftArrow() {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleElements,
    initComplete
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return (

    <Arrow disabled={disabled} onClick={() => scrollPrev()}>

      <MdArrowBackIosNew size={28} />
    </Arrow>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleElements } = React.useContext(
    VisibilityContext
  );

  // console.log({ isLastItemVisible });
  const [disabled, setDisabled] = React.useState(
    !visibleElements.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>

      <MdArrowForwardIos size={27} />
    </Arrow>
  );
}

const Item = () => {
  return (
    <ScrollAnimation animateIn='bounceInTop'
      animateOut='bounceOutBottom'
      >
      <ItemContainer>
        <Link href="/item/3">
          <img src="/el.jpg" alt="" />
        </Link>
        <div className="item-icons">
          <div>

            <AiOutlineHeart />
          </div>
          <div>

            <MdAddShoppingCart />
          </div>
        </div>
        <ItemInfo>
          <p className="title">War horse</p>
          <p className="dimention">40 x 30 in</p>
          <p className="price">$450</p>
        </ItemInfo>
      </ItemContainer>
    </ScrollAnimation>
  )
}
export const Items = () => {
  return (
    <ItemsContainer>
      <div className="title">
        <ScrollAnimation animateIn='fadeIn'>

        <h2>From the shop<div></div></h2>
        </ScrollAnimation>
      </div>
      <ItemsWrapper>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ItemsWrapper>
    </ItemsContainer>
  )
}

const Values = () => {
  return (
    <ValuesContainer>
      <ValueContainer>
        <CiDeliveryTruck size={50} />
        <p>Free & ontime delivery</p>
      </ValueContainer>
      <ValueContainer>
        <RiHandCoinLine size={50} />
        <p>Money back guarantee</p>
      </ValueContainer>
      <ValueContainer>
        <CiMedal size={50} />
        <p>High quality products</p>
      </ValueContainer>
    </ValuesContainer>
  )
}

function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <Items />
      <Values />
    </>
  )
}

export default HomePage