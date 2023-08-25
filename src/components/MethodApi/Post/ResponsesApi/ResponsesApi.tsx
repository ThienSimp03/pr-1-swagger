import { useEffect, useState } from "react";
import { TfiAngleDown } from "react-icons/tfi";

const contentTypeRes: string[] = ["application/json", "application/xml"];

export default function ResponsesApi() {
    const [typeRes, setTypeRes] = useState<string>(contentTypeRes[0]);
    const [switchTypeRes, setSwitchTypeRes] = useState<boolean>(false);

    const switchTypeResOn = () => {
        setSwitchTypeRes((prev) => !prev);
    };
    const handleSwitchType = (content: string) => {
        setSwitchTypeRes(true);
        setTypeRes(content);
    };
    useEffect(() => {
        console.log(switchTypeRes);
    }, [switchTypeRes]);
    return (
        <div className="flex items-center justify-between my-2 font-bold">
            <p>Response</p>
            <div className="flex items-center gap-5">
                <p className="text-xs">Response content type</p>
                <div
                    className="flex items-center gap-2 w-[230px] px-[10px] border-2 border-black border-solid rounded justify-between hover:bg-[#ccc] font-semibold relative"
                    onClick={switchTypeResOn}
                >
                    {typeRes}
                    <span>
                        <TfiAngleDown />
                    </span>
                    <div className="absolute left-0 right-0 top-full border border-solid border-[#000]">
                        {switchTypeRes &&
                            contentTypeRes.map((content, index) => {
                                return (
                                    <button
                                        key={index}
                                        className="flex items-center w-full px-[10px] hover:bg-blue-500 hover:text-white font-semibold"
                                        onClick={() =>
                                            handleSwitchType(content)
                                        }
                                    >
                                        {content}
                                    </button>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}
