import { Skills } from "./Skills";

export function About() {
    return (
        <div>
            <h1 className="font-[sourceSerif] text-2xl ml-5 mb-8">About</h1>
            <div className="flex flex-col space-y-4 font-sans text-sm/snug ml-5 mr-5 mb-20">
            <p>I’m a second-year Computer Science student at the University of New South Wales, who just got back from two years of military service in Singapore.
            </p>
            <p>I started learning to code in high school, and was fascinated by its 
            ability to solve many of the problems in our everyday lives. I love developing efficient solutions to them if it makes someone’s life even a tiny bit better. Recently I have began exploring the T3 stack as my introduction into modern full-stack development.
            </p>
            <p>My two years in the military were eye-opening, and my time spent there allowed me to work with heaps of interesting people on a range of different jobs! Not everyone can say they drove a tank :)
            Right now, I’m enjoying university and am an active member of UNSW’s CSESOC (Computer Science and Engineering Society). 
            </p>
            <p>In my free time, I love staying active by going to the gym, going on runs or playing basketball!</p>
            <Skills></Skills>
            </div>
        </div>
    )
}