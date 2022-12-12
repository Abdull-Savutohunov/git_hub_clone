import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai'
import { FooterList } from '../utils'
import { Link } from 'react-router-dom';
import { FooterListSecond, FooterListThird } from './../utils/index';
import './styles/Footer.scss'


const Footer = () => {
  return (
    <div className='container'>
      <div className="footer">
        <div className="footerFirst">
          <AiOutlineGithub/>
          <h4>GitHub</h4>
        </div>
        <div className="FooterSecond">
          <div className="footerSecondInside">
            {
              FooterList.map((item) => (
                <h4  key={item.id}>
                  <Link className='link' to={item.path}>{item.icons} {item.title}</Link>
                </h4>
              ))
            }
          </div>
          <div className="footerSecondInside">
            {
              FooterListThird.map((item) => (
                <h4  key={item.id}>
                  <Link className='link' to={item.path}>{item.icons} {item.title}</Link>
                </h4>
              ))
            }
          </div>
          <div className="footerSecondInside">
            {
              FooterListSecond.map((item) => (
                <h4  key={item.id}>
                  <Link className='link' to={item.path}>{item.icons} {item.title}</Link>
                </h4>
              ))
            }
          </div>
        </div>
      </div>
      <div className="lineTwo"/>
      
    </div>
  )
}

export default Footer
