import "./footer.scss"

import { FaceboookIcon, InstagramIcon, LinkedinIcon, TiktokIcon, TwitterIcon, YoutubeIcon } from "../../assets/Icons"

import Button from "../Button/Button"
import Logo from './../Logo/Logo'

const Footer = () =>
{
  return (
    <section className="footer-container">
      <div className="footer-content">
        <div className="row brand-logo">
          <Logo />
        </div>
        <div className="row links-row">
          <div>
            <span>about</span>
            <a href="" className="link">case studies</a><a href="" className="link link-disabled">clients</a><a href="" className="link link-disabled">testimonials</a><a href="" className="link link-disabled">platform</a>
          </div>
          <div>
            <span>services</span>
            <a href="" className="link">tiktok</a><a href="" className="link">instagram</a><a href="" className="link">youtube</a>
          </div>
          <div>
            <span>company</span>
            <a href="" className="link">about us</a><a href="" className="link">how it works</a><a href="" className="link link-disabled">contact</a><a href="" className="link link-disabled">blog</a>
          </div>
          <div>
            <span>other links</span>
            <a href="" className="link link-disabled">engagement calculator</a>
          </div>
          <div className="newsletter">
            <span>newsletter</span>
            <div className="post">

            </div>
            <form>
              <input type="text" name="email" id="" placeholder="enter your email" /> <Button text="subscribe" />
            </form>
          </div>
        </div>
        <div className="last-row">
          <div className="social-icons">
            <a href=""><FaceboookIcon /></a>
            <a href=""><TiktokIcon /></a>
            <a href=""><LinkedinIcon /></a>
            <a href=""><YoutubeIcon /></a>
            <a href=""> <TwitterIcon /></a>
            <a href=""><InstagramIcon /></a>
          </div>
          <div className="policy">
            <a href="">privacy policy</a>
            <a href="">terms of srevice</a>
            <p>
              copyright {' '}
              {new Date().getFullYear()},{' '}viralHive. all rights reserved.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
