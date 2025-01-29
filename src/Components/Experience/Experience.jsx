import './Experience.css'

export default function Experience() {

  return (
    <div className="Experience">
      <div className='Experience-section'>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className='Experience-box'>
            <p className='Experience-title'>Projects</p>
            <p>Completed: 3</p>
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className='Experience-box'>
            <p className='Experience-title'>Portfolios</p>
            <p>Completed: 1</p>
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className='Experience-box'>
            <p className='Experience-title'>Coding Experience</p>
            <p>Months: 14+</p>
          </div>
        </div>
      </div>
    </div>
  )
}