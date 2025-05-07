"use client"
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

export function Title() {
    const [isVisible, setIsVisisble] = useState(false);

    useEffect(() => {
        setIsVisisble(true);
    },[]);
    return (
        <div>
            <div className="title">
                <h1 className="font-[sourceSerif] font-[200] text-4xl ml-5 mb-8">
                <Typewriter
                words={["Hi, I'm Lance Rivera!"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                />
                </h1>
                <p
                className={`font-[sourceSerif] font-[100] text-lg md:max-w-2xl lg:max-w-sm ml-5 mb-40 transition-opacity duration-3000 ease-in-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' 
                }`}
                >
                I’m a Computer Science student exploring full-stack development, systems design, and all things code.
                </p>
            </div>
        </div>
    )
}