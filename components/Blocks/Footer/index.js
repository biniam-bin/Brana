import React from 'react'
import { FooterContainer, FooterSection } from './style'

function Footer() {
  return (
    <FooterContainer>

      <FooterSection>
        {/* About us */}
        <div className="about-us">
          <div className="title">
            <h2>About us </h2>
          </div>
          <div className="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro mollitia nam inventore voluptates optio natus eius numquam iusto suscipit sapiente.
          </div>
        </div>
      </FooterSection>
      <FooterSection>
        {/* Links */}
        <div className="links">
          <div className="title"><h2>Web Links</h2></div>
          <div className="body">
            <div className="">Home</div>
            <div className="">About</div>
            <div className="">Contact us</div>
            {/* <div className="">Home</div> */}
          </div>
        </div>
      </FooterSection>
      <FooterSection>
        {/* Social media */}
        <div className="social-media">
          <div className="title"><h2>Social Media</h2></div>
          <div className="body">
            <span><img src="/icons/facebook.png" alt="" /></span>
            <span><img src="/icons/insta.png" alt="" /></span>
            <span><img src="/icons/twitter.png" alt="" /></span>
            <span><img src="/icons/telegram.png" alt="" /></span>
          </div>
        </div>
      </FooterSection>
    </FooterContainer>
  )
}

export default Footer