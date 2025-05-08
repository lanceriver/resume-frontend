import type { Metadata } from "next";
import { About, Navbar, Title, ExperienceFeed, VisitorCount } from './components';


export const metadata: Metadata = {
  title: "Lance Rivera - Software Developer",
  description: 'Personal website of Lance Rivera, a Software Developer and Computer Science student at UNSW.',
  openGraph: {
    title: 'Lance Rivera - Software Developer',
    url: 'https://example.com',
  },
};

export default function Home() {
  return (
    <div className="bg-[#FFEBD6]">
      <Navbar></Navbar>
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 md:ml-8 mr-8">
        <div className="lg:fixed">
          <Title></Title>
        </div>
        <div>
        </div>     
        <div className="lg:ml-0 lg:mr-20">
          <About></About> 
          <ExperienceFeed></ExperienceFeed>
        </div> 
      </div>
    </div>
      
  );
}
