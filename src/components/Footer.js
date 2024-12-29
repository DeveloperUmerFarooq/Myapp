import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="container-fluid m-0 p-0" id="contact">
    <footer className="text-center text-lg-start text-white bg-dark">
      <section
               className="d-flex justify-content-between p-4 bg-dark-subtle "
               >
        
        <div className="me-5 text-dark-emphasis align-self-center h3 res-font">
          <span>Get connected with me on social networks:</span>
        </div>
        
  
        
        <div className="d-flex align-self-center">
          <a href="https://www.facebook.com/profile.php?id=100033829628541&mibextid=ZbWKwL" className="me-3">
            <i className="bi bi-facebook text-dark-emphasis res-font"></i>
          </a>
          <a href="https://www.instagram.com/umerfarooq3935?igsh=MXBpYjR3OXYxdGlwbg==" className="me-3 ">
            <i className="bi bi-instagram text-dark-emphasis res-font"></i>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-umer-farooq-23a781305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="me-3 ">
            <i className="bi bi-linkedin text-dark-emphasis res-font"></i>
          </a>
        </div>
       
      </section>
     
  
    
      <section>
        <div className="container text-center text-md-start mt-5">
        
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
 
            <h6 className='text-light text-uppercase fw-bold mb-1'>About Me</h6>
                            <hr className='mb-4 mt-0  d-inline-block w-25 text-light'/>
                            <p className='text-light text-center text-md-start'>I am a front-end developer skilled in HTML5, CSS3, JavaScript, jQuery, and React.js, with experience in Laravel and API integration. I am seeking to grow into a full-stack developer role.</p>  
            </div>
           
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
            <h6 className='text-light text-uppercase fw-bold mb-1'>Useful Links</h6>
                            <hr className='mb-4 mx-auto mt-0 d-inline-block w-25 text-light'/>
                            <p>
                            <Link className='text-light text-decoration-none' to='/'>Home</Link>
                            </p>
                            <p>
                            <Link className='text-light text-decoration-none' to='/projects'>Projects</Link>
                            </p>
                            <p>
                            <Link className='text-light text-decoration-none' to='/contact'>Contact</Link>
                            </p>
                            <p>
                            <Link className='text-light text-decoration-none' to='/about'>About</Link>
                            </p>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto  mb-md-0 mb-4">
          
            <h6 className='text-uppercase fw-bold text-light mb-1'>Contact</h6>
                        <hr className='mb-4 mt-0 mx-auto d-inline-block w-25 text-light'/>
                        <p><i className='bi bi-house-door-fill mx-1'></i>House no.335/LDA,Tanki no.56,Railway Power House,Mughaplura,Lahore</p>
                        <p><i className='bi bi-envelope-at-fill mx-1'></i>umerfarooq.web.dev@gmail.com</p>
                        <p><i className='bi bi-telephone-inbound-fill mx-1'></i>+92-305-4079045</p>
                        <p><i className='bi bi-telephone-inbound-fill mx-1 mx-1'></i>+92-315-4357916</p>   
            </div>
            
          </div>
        </div>
      </section>
      <div
           className="text-center p-3"
           style={{'backgroundColor':"rgba(0, 0, 0, 0.2)"}}
           >
        © 2024 Copyright: All rights reserved!
      </div>
    </footer>
  </div>
  )
}
