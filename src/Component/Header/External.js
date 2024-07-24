import React from 'react'
import Resume from '../../assets/CV_rishabh.pdf'
const External = () => {
  return (
    <div className="cta">
        <a className="btn" href={Resume} download>
          Download CV
        </a>
        <a className="btn btn-primary" href="#contact">
          Let's Talk
        </a>
      </div>
  )
}

export default External
