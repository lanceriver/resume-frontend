interface ExperienceData {
    date: string;
    title: string;
    company: string;
    description: string;
}

export function ExperienceCard({data}: {data: ExperienceData}) {
    return (
        <div className="mb-10">
            <h5 className="text-sm mb-0.5">{data.date}</h5>
            <h5 className="font-[sourceSerif] text-lg/tight mb-2">{data.title} · {data.company}</h5>
            <div className="text-sm/snug"> 
                <p>{data.description}</p>
            </div>
        </div>
    )
}