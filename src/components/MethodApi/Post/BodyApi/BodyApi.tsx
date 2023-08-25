import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import tmp from "src/models/ApiBody";

export default function BodyApi() {
    const [tryApi, setTryApi] = useState<boolean>(false);
    const colorBtn = tryApi ? "error" : "inherit";
    return (
        <>
            <div>
                <div className="flex items-center justify-between mb-2">
                    <p className="font-bold">Parameters</p>
                    <Button
                        color={colorBtn}
                        variant="outlined"
                        size="small"
                        onClick={() => setTryApi((prev) => !prev)}
                    >
                        {tryApi ? "Cancel" : " Try it out"}
                    </Button>
                </div>
                <Box
                    sx={{
                        width: "100%",
                        backgroundColor: "success.main",
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
