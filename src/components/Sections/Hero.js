import React from 'react'
import mePhoto from '../../assets/img/files/intro-me.png';

function Hero() {
    return (
        <div id="hero" className="section -mt-14 w-full h-screen flex flex-col">
            <div className="container flex-1 grid grid-cols-5 gap-20 justify-end items-center mx-auto">
              
                <div className="col-span-2 h-full relative">
                    <img
                        src={mePhoto}
                        alt='Cristina Soler'
                        className='profile-photo absolute bottom-0 z-0'
                    />
                </div>
                
                <div className="content col-span-3 col-start-3 col-end-5">
                    <div className="">
                        <div className="text-gray-400 text-lg">Hola, </div>
                        <h2 className="text-5xl font-bold my-4">Soy <span className="text-primary">Cristina</span> Soler</h2>
                        <div className="text-gray-400 text-lg">Programadora web especializada en el mundo del comercio electrónico cuyo objetivo es convertirme en FullStack.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;