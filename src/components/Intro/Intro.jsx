import React from 'react';
import "./Intro.css"
import  bg from '../../assets/ff.jpg'
import { Link } from 'react-scroll';
const Intro = () => {
    return (
        <div>
           <section id="intro">
            <div className="introContent">
                <p className="hello">Hello,</p><br />
                <h1 className="introText">I'm <span className='introName'>Sohag Bhuiyan</span><br/>Web Developer</h1>
                <p className='introPara'> I am a skilled web developer with good experience <br /> in creating visually appealing aand user friendly websites</p>
                <Link > <button className='btn'><img src="" alt="" />Hire Me</button></Link>
            </div>
            <div className='bg1'>
            <img src={bg} alt="profile" className='bg' />
            </div>
            </section> 
        </div>
    );
};

export default Intro;