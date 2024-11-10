import React from 'react'
// import '../Home.css';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">Qualifications</h2>
      <ul className="about-list">
        <li className="about-item">MBBS</li>
        <li className="about-item">MS</li>
        <li className="about-item">FRCS</li>
      </ul>

      <h2 className="about-title">Experience</h2>
      <p className="about-description">36+ years in cardiac surgery.</p>

      <h2 className="about-title">Contact</h2>
      <p className="about-description">For consultations, visit Narayana Health or call 8067506836.</p>

      <h2 className="about-title">About Dr. Devi Shetty</h2>
      <p className="about-description">
        A renowned cardiac surgeon with over 15,000 heart surgeries performed. 
        Founder of Narayana Health, performing 30 major surgeries daily at low cost.
      </p>
      <p className="about-description">
        Conducted over 120,000 heart surgeries, focusing on pediatric cases. 
        First in Asia to perform dynamic cardiomyoplasty and neonatal open-heart surgery.
      </p>

      <h2 className="about-title">Expertise</h2>
      <ul className="about-list">
        <li className="about-item">Paediatric Cardiac Surgery</li>
        <li className="about-item">Valve Repairs</li>
        <li className="about-item">Pulmonary Endarterectomy</li>
        <li className="about-item">Redo Heart Surgery</li>
        <li className="about-item">Surgery for Aortic Aneurysms</li>
      </ul>
    </div>
  )
}

export default About
