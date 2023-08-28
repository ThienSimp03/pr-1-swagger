import { useState } from "react";
import Box from "@mui/material/Box";
import tmp from "src/models/ApiBody";

type Props = {
    colorTheme: string;
};

export default function BodyApi(props: Props) {
    const { colorTheme } = props;
    const [tryApi, setTryApi] = useState<boolean>(false);
    return (
        <>
            <div>
                <div className="flex items-center justify-between px-5 py-2 mb-2">
                    <p className="font-bold">Parameters</p>
                    <button
                        className={`px-5 py-0.5 font-bold border-2 border-solid rounded-md ${
                            tryApi
                                ? "border-red-500 text-red-500"
                                : " border-gray-500"
                        }`}
                        onClick={() => setTryApi((prev) => !prev)}
                    >
                        {tryApi ? "Cancel" : " Try it out"}
                    </button>
                </div>
                <Box
                    sx={{
                        width: "100%",
                        backgroundColor: colorTheme,
                    }}
                >
                    <div className="grid grid-cols-12 gap-2 px-5 pt-6">
                        <div className="col-span-1 text-xs">Name</div>
                        <div className="col-span-11 text-xs">Description</div>
                        <div className="col-span-12 border-[#000] border-solid border-b-[0.5px]"></div>
                        <div className="relative col-span-1">
                            <span className="font-bold">body</span>
                            <span className="absolute top-0 text-xs font-semibold text-red-500 left-[40%]">
                                * required
                            </span>
                        </div>
                        {/* <input
                            type="text"
                            value={JSON.stringify(tmp)}
                            className="col-span-11 min-h-[100px]"
                        /> */}
                        <div className="col-span-11">
                            <span>order placed for purchasing the pet</span>
                            <br />
                            <p className="py-5 text-xs">
                                <span className="font-bold">
                                    Example Value{" "}
                                </span>
                                <span className="font-light">| Model</span>
                            </p>
                            <div className="bg-[#333333] text-white p-2 rounded text-xs font-semibold">
                                {<pre>{JSON.stringify(tmp, null, 2)}</pre>}
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 pb-2 bg-inherit">
                        {tryApi && (
                            <span className="flex justify-center w-full py-1 my-5 font-bold text-white bg-blue-500">
                                Execute
                            </span>
                        )}
                    </div>
                </Box>
            </div>
        </>
    );
}
