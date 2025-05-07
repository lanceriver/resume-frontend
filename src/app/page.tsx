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
    <div className="min-h-screen bg-[#FFEBD6]">
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Title></Title>
      <div>
        <About></About>
        <ExperienceFeed></ExperienceFeed>
      </div> 
      <VisitorCount></VisitorCount>
      </div>
    </div>
      
  );
}
