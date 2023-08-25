import Box from "@mui/material/Box";
import tmp from "src/models/ApiBody";

export default function ExampleApi() {
    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "success.main",
            }}
        >
            <div className="grid grid-cols-12 gap-2 px-5 py-6">
                <div className="col-span-1 text-xs">Code</div>
                <div className="col-span-11 text-xs">Description</div>
                <div className="col-span-12 border-[#000] border-solid border-b-[0.5px]"></div>
                <div className="relative col-span-1">
                    <span className="font-bold">200</span>
                </div>
                <div className="col-span-11">
                    <span>order placed for purchasing the pet</span>
                    <br />
                    <p className="py-5 text-xs">
                        <span className="font-bold">Example Value </span>
                        <span className="font-light">| Model</span>
                    </p>
                    <div className="bg-[#333333] text-white p-2 rounded text-xs font-semibold">
                        {<pre>{JSON.stringify(tmp, null, 2)}</pre>}
                    </div>
                </div>
                <div className="relative col-span-1">
                    <span className="font-bold">400</span>
                </div>
                <div className="col-span-11">
                    <span>Invalid Order</span>
                </div>
            </div>
        </Box>
    );
}
