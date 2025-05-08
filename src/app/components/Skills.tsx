import { Tooltip } from "flowbite-react";


export function Skills() {
    return (
        <div>
            <h1 className="font-[sourceSerif] text-2xl md:text-4xl mt-8 mb-3">Skills</h1>
            <div className="flex flex-row space-x-4 text-3xl md:text-4xl">
            <Tooltip content="Python was the first language I learnt, I love how readable the syntax is! I mainly use it for my backend Lambdas." style="light"
            className="sm:max-w-1/2 lg:max-w-1/4"
            >
                <i className="fa-brands fa-python"></i>
            </Tooltip>
            <Tooltip content="React was my first front-end framework; splitting everything into components made development
            so much cleaner." style="light" className="sm:max-w-1/2 lg:max-w-1/4">
                <i className="fa-brands fa-react"></i>
            </Tooltip>
            <Tooltip content="Despite all its quirks, I still haven't found a reason to use anything other than Javascript
            for frontend scripts. Though I'm currently learning Typescript!" style="light" 
            className="sm:max-w-1/2 lg:max-w-1/4 max-h-1/6">
                <i className="fa-brands fa-square-js"></i>
            </Tooltip>
            <Tooltip content="I learned AWS primarily by deploying this website on S3 and writing a simple backend with Lambda
            and DynamoDB for the visitor counter! Very keen to try out more products on future projects :)" style="light"
            className="sm:max-w-1/4 lg:max-w-1/4 max-h-1/6">
                <i className="fa-brands fa-aws"></i>
            </Tooltip>
            <Tooltip content="Next.js, currently learning this as an introduction to full-stack web apps." style="light"
            className="sm:max-w-1/4 lg:max-w-1/4 max-h-1/6">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z"></path></svg>
            </Tooltip>
            <Tooltip content="Learning Tailwind CSS made styling responsive websites so much easier." style="light" className="sm:max-w-1/2 lg:max-w-1/4 max-h-1/6">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12"></path></svg>
            </Tooltip>
            </div>
        </div>
    )
}