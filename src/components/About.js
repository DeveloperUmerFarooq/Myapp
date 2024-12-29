import React from 'react'
export default function About() {
  return (
    <div className='contianer-fluid text-center fs-1 pt-5 p-1' id='about'>
      <div className='container mt-5 pt-5 text-light bg-dark-emphasis text-start pb-5'>
        <div className='row flex-lg-row-reverse'>
        <div className='col-lg rounded-5 mb-3' id='about-img'>
          </div>
          <div className='col-lg text-start fs-5 rounded-5 ' id='about-info'>
            <div id='child' className='container p-1'>
            <h1 className='pt-md-3 text-center'>About ME</h1>
            I am Muhammad Umer Farooq, a front-end developer skilled in HTML5, CSS3, JavaScript, and React.js, with expertise in creating responsive, high-performance websites. During my internship at IntelliWeb Solutions, I gained experience in Laravel, API integration, and secure CRUD operations. My projects, including a MERN-based food delivery app and a Laravel fitness platform, reflect my ability to blend creativity with technical skills. Currently, I’m advancing toward a full-stack role, focusing on CMS and RESTful APIs, and I’m eager to contribute to innovative projects in collaborative environments.
            <hr className='w-100 mb-3'></hr>
            <h1 className='text-center'>Personal Details</h1>
                    <ul type='none' className='text-center text-md-start'>
                          <li className='row'><p className='col-lg-4 col-md-3 col d-flex res-font'><i className="bi bi-person-circle mx-md-1"></i>Name:</p><p className='col-md res-font'>Muhammad Umer Farooq</p></li>
                          <li className='row'><p className='col-lg-4 col-md-3 col d-flex res-font'><i className="bi bi-person-check-fill mx-md-1"></i>Age:</p><p className='col-md res-font'>21</p></li>
                          <li className='row'><p className='col-lg-4 col-md-3 col d-flex res-font'><i className='bi bi-telephone-inbound-fill mx-md-1'></i>Phone:</p><p className='col-md res-font'>+92-305-4079045</p></li>
                          <li className='row'><p className='col-lg-4 col-md-3 col d-flex res-font'><i className='bi bi-envelope-at-fill mx-md-1'></i>Email:</p><p className='col-md res-font'>umerfarooq.web.dev@gmail.com</p></li>
                          <li className='row'><p className='col-lg-4 col-md-3 col d-flex res-font'><i className='bi bi-house-door-fill mx-md-1'></i>Address:</p><p className='col-md res-font'>House no.335/LDA,Tanki no.56,Railway Power House,Mughaplura,Lahore</p></li>
                    </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
