
export function Navbar() {
    return (
        <div className="w-full px-6 md:px-10 lg:px-18 sticky top-0 bg-background z-50">
        <div className="mx-auto flex items-center justify-between font-[sourceSerif] mb-20 py-4">
            <div className="flex space-x-6">
                <h1 className="hover:text-white">Home</h1>
                <h1 className="hover:text-white">About</h1>
                <a className="hover:text-white" href="https://blog.lanceriver.com">Blog</a>
            </div>
            <div className="flex space-x-6">
                <a href="https://www.instagram.com/lanceriver1107/">
                <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/lance-rivera-b92bab22a/">
                <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/realproapplez">
                <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://github.com/lanceriver">
                <i className="fa-brands fa-github"></i>
                </a>
            </div>
        </div>
        </div>
        
    )
}