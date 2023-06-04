interface TimerLayoutInterface {
    showTimerInput: boolean;
    timerCompleted: boolean;
    setShowTimerInput: (showTimerInput: boolean) => void
    resetTimer: () => void;
    startTimer: () => void;
    buttonName: string;
    onChangeInputValue: (event: any) => void;
    content: React.ReactNode;
}

const TimerLayout = ({
    showTimerInput,
    timerCompleted,
    setShowTimerInput,
    resetTimer,
    startTimer,
    buttonName,
    content,
}: TimerLayoutInterface) => {
    return (
        <>
            <div className="text-sm font-medium text-gray-500 mt-10 mb-10 dark:text-gray-400">
                {content}
            </div>
            <div className="text-sm font-medium text-center text-gray-500 border-t border-gray-200 dark:text-gray-400 dark:border-gray-700" onClick={() => showTimerInput && setShowTimerInput(!showTimerInput)}>
                <div className="flex flex-wrap -mb-px mt-4">
                    {!timerCompleted && (
                        <button className="mr-6 bg-blue-800 p-1 w-20 border-solid border-2 border-blue-800 text-white rounded-sm" onClick={() => startTimer()}>
                            {buttonName}
                        </button>
                    )}
                    <button className="mr-6 border-solid border-2 p-1 w-20 text-blue-800" onClick={() => resetTimer()}>RESET</button>
                </div>
            </div>
        </>
    );
}

export default TimerLayout;