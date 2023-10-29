import React from 'react'
import './navigationbar.css'
import {Link} from 'react-scroll'
import myImage from './bank.jpg'

export default function Navigationbar() {
    // const [click, setClick] = useState(false)
    // const handleClick = () => setClick(!click)

    // const closeMenu = () => setClick(false)
  return (
      
      <div className='header'>
        <div className="navleft">
          <div className='imager'>
            <img src={myImage} alt="" style={{width: '35px', height: '35px', borderRadius: '50%',cursor: 'pointer'}}  />
          </div>

        </div>
        <div className="navmiddle">
          ABC Bank
        </div>
          <div className="navright">
              <span classname="spanner">
                  <Link to='home'  activeClass="active" spy={true} smooth={true} offset={50} duration={500}  className='section'  >Home</Link>
              </span>
              <span classname="spanner">
                  <Link to='detail'  activeClass="active" spy={true} smooth={true} offset={50} duration={500} className='section' >Detail</Link>
              </span>
              <span classname="spanner">
                  <Link to='chat'  activeClass="active" spy={true} smooth={true} offset={50} duration={500} className='section' >Chat</Link>
              </span>
          </div>   
        </div>
    
  )
}


{/* <div className="navleft">

</div>
<div className="navright">
  <span classname="spanner"><a href="#section1" className='section'>Section 1</a></span>
  <span classname="spanner"><a href="#section2" className='section'>Section 2</a></span>
  <span classname="spanner"><a href="#section3" className='section'>Section 3</a></span>
 
</div> */}

