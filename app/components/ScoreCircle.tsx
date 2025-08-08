const ScoreCircle = ({score = 75} : {score: number}) => {
    const radius = 40
    const stroke = 8
    const normalizeRadius = radius - stroke / 2
    const circumference = 2 * Math.PI * normalizeRadius
    const progress = score / 100
    const strokeDashoffset = circumference * (1 - progress)


    return (
        <div className={"relative w-[100px] h-[100px]"}>
            <svg
                height={"100%"}
                width={"100%"}
                viewBox={"0 0 100 100"}
                className={"transform -rotate-90"}
            >
                {/* background circle */}
                <circle
                    cx={"50"}
                    cy={"50"}
                    r={normalizeRadius}
                    stroke={"#e5e7eb"}
                    strokeWidth={stroke}
                    fill={"transparent"}
                />
                {/* partial circle with gradient */}
                <defs>
                    <linearGradient id={"grad"} x1={"1"} y1={"0"} x2={"1"} y2={"1"}>
                        <stop offset={"0%"} stopColor={"#FF97AD"}/>
                        <stop offset={"100%"} stopColor={"#5171FF"}/>
                    </linearGradient>
                </defs>
                <circle
                    cx={"50"}
                    cy={"50"}
                    r={normalizeRadius}
                    stroke={"url(#grad)"}
                    strokeWidth={stroke}
                    fill={"transparent"}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap={"round"}
                />
            </svg>

            {/* score and issues */}
            <div className={"absolute inset-0 flex flex-col items-center justify-center"}>
                <span className={"font-semibold text-sm "}>{`${score}/100`}</span>
            </div>
        </div>
    )
}

export default ScoreCircle