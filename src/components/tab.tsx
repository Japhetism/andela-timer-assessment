import { useState } from "react";

interface TabInterface {
    steps: any;
    defaultActiveTab: string;
}

const Tab = ({
    steps,
    defaultActiveTab
}: TabInterface) => {

    const [activeTab, setActiveTab] = useState(defaultActiveTab);

    const getClasses = (tab: string) => {
        const activeTabClassName = "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";
        const inactiveTabClassName = "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";
    
        return tab === activeTab ? activeTabClassName : inactiveTabClassName;
    }

    const getActiveTabClassName = (tabName: string) => {
        return tabName === activeTab ? "" : "hidden"
    }

    return (
        <div className="w-2/4 mt-10 ml-20 p-4 border-solid border-2 border-grey-100 rounded-lg">
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                    {steps.map((step: { id: number, name: string }) => (
                        <li className="mr-2" key={step.id}>
                            <button className={getClasses(step.name)} onClick={() => setActiveTab(step.name)}>
                                {step.name.toUpperCase()}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                {steps.map((step: { id: number, name: string, component: React.ReactNode }) => (
                    <div className={getActiveTabClassName(step.name)} key={step.id}>
                        {step.component}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tab;