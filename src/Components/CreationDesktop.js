import React, { useState } from 'react'
import data from '../data-desktop'
const Creations = () => {
    const [cards, setCards] = useState(data) 
    return (
        <section className='creation-desktop'>
            <div>
            <div className='title'>
            <h2>Our Creations</h2>
            </div>
            <div className='btn-container'>
                <button className="btn">See All</button>
            </div>
            </div>

            <section>
                {cards.map((card)=>{
                    const {id, image,title} = card
                    return(
                        <article key={id}>
                            <img src={image} alt="creation cards" srcset="" />
                            <h3>{title}</h3>
                        </article>
                    )
                })}
            </section>
        </section>
    )
}

export default Creations
