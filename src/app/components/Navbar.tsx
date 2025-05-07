
export function Navbar() {
    return (
        <div className="w-full bg-transparent px-6 py-4">
            <div className="mx-auto flex items-center justify-between font-[sourceSerif] mt-5 mb-30">
            <div className="flex space-x-6">
                <h1>Home</h1>
                <h1>About</h1>
                <a href="https://blog.lanceriver.com">Blog</a>
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