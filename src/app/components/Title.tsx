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
            <div className="title z-0 ml-5 lg:ml-10">
                <h1 className="font-[sourceSerif] font-[200] text-4xl lg:text-5xl mb-8">
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
                className={`font-[sourceSerif] font-[100] text-lg/tight md:max-w-2xl lg:max-w-sm mb-20 z-0 transition-opacity duration-3000 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0' 
                }`}
                >
                I’m a Computer Science student exploring full-stack development, systems design, and all things code.
                </p>
            </div>
        </div>
    )
}