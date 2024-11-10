import React from 'react'
import './Hero.css'

const Hero = ({ image="не загрузилось" , name='сори забыл' , info="не придумал",}) => {
  return (
<>
<section className='hero'>
                <div className="container">
                    <div className="hero__wrapp cf">
                        <div className="hero-img">
                            <img src={image} alt="" className='hero-img' />
                        </div>
                        <div className="hero__wrapp-about">
                            <h2>{name}</h2>
                            <p>{info}</p>
                            <img className='arrow' src="./arrow.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>




</>
)
}

export default Hero