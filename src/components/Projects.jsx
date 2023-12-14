import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects'>
        <section className="awesome-feature">
  <div id="feature-text">
    <h1>My Projects</h1>
    
  </div>
</section>
<section id="plan-container">
    <div class="plan-item">
      <div class="plan-money">
        
        <h2>NFT Marketplace</h2>
        
        
      </div>

      <div class="plan-benifit">
        <p>This project is made using blockchain where people can buy and sell NFT with a integrted wallet known as MetaMask</p>
        <a href="https://github.com/Arpan1908/NFT-">Link to project</a>
      </div>
    </div>
    <div class="plan-item">
      <div class="plan-money">
        
        <h2>E-Commerce Website</h2>
        
      </div>

      <div class="plan-benifit">
       <p>This project is a simple e-commerce site with AuthO authentication and using a free api to display products</p>
        <a href="https://github.com/Arpan1908/ecom">Link to project</a>
      </div>
    </div>
    <div class="plan-item">
      <div class="plan-money">
        
        <h2>SaaS Website</h2>
        
      </div>

      <div class="plan-benifit">
       <p>A SaaS website which provides tools like paraphraser, Summariser and QR Code Generator integrated with Auth0 and Google Authentication</p>
        <a href="https://github.com/Arpan1908/SaaS">Link to project</a>
      </div>
    </div>
    <div class="plan-item">
      <div class="plan-money">
        
        <h2>Newsletter</h2>
        
      </div>

      <div class="plan-benifit">
       <p>A Newsletter website which provides a subcription button where people can subcribe to email new everyweek. Made using Mailchimp api</p>
        <a href="https://github.com/Arpan1908/newsletter">Link to project</a>
        <div>
        <p><a href="https://newsletter-zia2.vercel.app">Visit Website</a></p>
        </div>
       
      </div>
    </div>
  </section>
  <section className="container">
  <div className="page-header">
    <h1 id="timeline">Experiences</h1>
  </div>
  <ul className="timeline">
    <li>
      <div className="timeline-badge">
        <i className="glyphicon glyphicon-check" />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4 className="timeline-title">IIC IEDC (frontend web developer )</h4>
          <p>
            <small className="text-muted">
              <i className="glyphicon glyphicon-time" />(Part-time) August 2022 - December-2022
             
            </small>
          </p>
        </div>
        <div className="timeline-body">
          <p>• Discussed site and app requirements with clients to produce
actionable development plans.
<p>• Developed user-friendly web forms with validation and error
handling.</p>
• Coded websites using HTML, CSS, JavaScript, and jQuery
languages.</p>
        </div>
      </div>
    </li>
    <li className='timeline-inverted'>
      <div className="timeline-badge">
        <i className="glyphicon glyphicon-check" />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4 className="timeline-title">Mentorsity (frontend web developer )</h4>
          <p>
            <small className="text-muted">
              <i className="glyphicon glyphicon-time" />(Internship) September 2023 - Current
              
            </small>
          </p>
        </div>
        <div className="timeline-body">
          <p>• Discussed site and app requirements with clients to produce
actionable development plans.
<p>• Developed user-friendly web forms with validation and error
handling.</p>
• Coded websites using HTML, CSS, JavaScript, and jQuery
languages.</p>
        </div>
      </div>
    </li>

  </ul>
</section>

    </div>
  )
}

export default Projects