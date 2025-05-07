import { ExperienceCard } from "./ExperienceCard";

export function ExperienceFeed() {
    const experiences = [{
        title: "Bachelor of Science (Computer Science)",
        date: "February 2022 - Present",
        company: "University of New South Wales",
        description: "Took two years of program leave for National Service. Member of CSESOC Marketing Subcommittee: Promoted society events to over 9,000 followers by managing Instagram and Facebook accounts, increasing engagement and reach across platforms. Created and scheduled informational posts."
    },
    {
        title: "Administrative Assistant",
        date: "November 2022 - November 2024",
        company: "Singapore Armed Forces",
        description: "Maintained accurate training records for over 300 personnel by logging assessment outcomes in Excel, supporting data-driven tracking of completed and outstanding training requirements. Coordinated the implementation of VBA macros to automate data entry, reducing processing time and improving efficiency by 90%. Developed a Telegram chatbot to automate a previously manual communication process, utilising Google Apps Script, JavaScript and the Telegram API."
    },
    {
        title: "Food and Beverage Attendant",
        date: "April 2022 - November 2022",
        company: "PARKROYAL Parramatta",
        description: "Set up function rooms for conferences, seminars, and banquets according to client specifications, contributing to smooth event execution and high guest satisfaction. Delivered food and beverage service during events, actively attending to guest needs and maintaining a professional, welcoming atmosphere. Maintained cleanliness and readiness of dining and event spaces, contributing to overall guest comfort and smooth daily operations."
    }
    ];
    return (
        <div className="flex flex-col space-y-4 font-sans ml-5 mr-5 mb-20">
            <h1 className="font-[sourceSerif] text-2xl mb-8">Experience</h1>
            {experiences.map((experience, index) => (
                <ExperienceCard key={index} data={experience}></ExperienceCard>
            ))}
        </div>
    )
}