interface TimerInterface {
    hours: number;
    minutes: number;
seconds: number;
}

interface TimerDisplayInterface {
    timer: TimerInterface;
}

const TimerDisplay = ({ timer }: TimerDisplayInterface) => {
    return (
        <>
            {timer.hours > 0 && ( 
                <span className="h-20 text-black text-6xl p-2">
                    {timer.hours}
                    <small className="text-2xl">
                        h
                    </small>
                </span>
            )}
            {(timer.hours > 0 || timer.minutes > 0) && (
                <span className="h-20 text-black text-6xl p-2">{
                    timer.minutes}
                    <small className="text-2xl">
                        m
                    </small>
                </span>
            )}
            <span className="h-20 text-black text-6xl p-2">
                {timer.seconds}
                <small className="text-2xl">
                    s
                </small>
            </span>
        </>
    )
}

export default TimerDisplay;