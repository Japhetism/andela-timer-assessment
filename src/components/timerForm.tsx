interface TimerFormInterface {
    onChangeInputValue: (event: any) => void;
}

const TimerForm = ({ onChangeInputValue }: TimerFormInterface) => {
    return (
        <>
            <form action="" method="post">
              <div className="flex flex-col space-y-12">
                <div className="flex flex-row w-3/5 border-b border-blue-800">
                  <div className="w-30 h-20">
                    <input className="w-full h-full flex flex-col outline-none rounded-xl border-none text-6xl bg-white" min={0} max={100} type="number" name="hours" placeholder="00h" id="hours" onChange={(event) => onChangeInputValue(event)} />
                  </div>
                  <div className="w-36 h-20">
                    <input className="w-full h-full flex flex-col outline-none rounded-xl border-none text-6xl bg-white" min={0} max={59} type="number" name="minutes" placeholder="00m" id="minutes" onChange={(event) => onChangeInputValue(event)} />
                  </div>
                  <div className="w-32 h-20">
                    <input className="w-full h-full flex flex-col outline-none rounded-xl border-none text-6xl bg-white" min={0} max={59} type="number" name="seconds" placeholder="00s" id="seconds" onChange={(event) => onChangeInputValue(event)} />
                  </div>
                </div>
              </div>
            </form>
        </>
    )
}

export default TimerForm;