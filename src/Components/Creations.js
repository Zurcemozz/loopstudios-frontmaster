import React, { useState } from 'react'
import data from '../data-mobile'
const Creations = () => {
    const [cards, setCards] = useState(data) 
    return (
        <section className='creation-mobile'>
        <h2>Our Creations</h2>
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
            <div className='btn-container'>
                <button className="btn">See All</button>
            </div>
        </section>
    )
}

export default Creations
