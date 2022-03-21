import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Decentralized.png'
import IMG2 from '../../assets/todo.png'
import IMG3 from '../../assets/spotify.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "A Decentralized Voting Web Application",
    git: "https://github.com/abhishektripathi007",
    demo: "https://dribbble.com/AbhishekTripathi"
  },

  {
    id: 2,
    image: IMG2,
    title: "A ToDo List Site",
    git: "https://github.com/abhishektripathi007",
    demo: 'ToDoList.html'
  },

  {
    id: 3,
    image: IMG3,
    title: "A Spotify Clone",
    git: "https://github.com/abhishektripathi007",
    demo: "https://dribbble.com/AbhishekTripathi"
  },

]

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, git, demo }) => {
            return (
              <article key={id} className="portfolio-item">
                <div className="portfolio-item-image">
                  <img src={image} alt="Decentralized" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_cta">
                  <a href={git} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio