import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Decentralized.png'
import IMG2 from '../../assets/todo.png'
import IMG3 from '../../assets/spotify.png'

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG1} alt="Decentralized" />
          </div>
          <h3>A Decentralized Voting Web Application</h3>
          <a href="https://github.com/abhishektripathi007" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/AbhishekTripathi" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG2} alt="todo" />
          </div>
          <h3>A ToDo List Site</h3>
          <a href="https://github.com/abhishektripathi007" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/AbhishekTripathi" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG3} alt="Spotify" />
          </div>
          <h3>A Spotify Clone</h3>
          <a href="https://github.com/abhishektripathi007" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/AbhishekTripathi" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

      </div>
    </section>
  )
}

export default  Portfolio