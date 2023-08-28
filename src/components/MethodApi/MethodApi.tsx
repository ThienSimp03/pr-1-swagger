import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TitleApi from "./StructMethodApi/TitleApi";
import BodyApi from "./StructMethodApi/BodyApi";
import ResponsesApi from "./StructMethodApi/ResponsesApi";
import ExampleApi from "./StructMethodApi/ExampleApi";
import { TypeMethodApi, ColorMethodApi } from "src/types/TypeMethodApi";

type Props = {
    typeMethod: TypeMethodApi;
};

const color: Record<string, string> = {
    get: "blue",
    delete: "red",
    post: "green",
    put: "yellow",
};

export default function MethodApi(props: Props) {
    const { typeMethod } = props;
    const { nameMethod, colorMethod, descriptionMethod, urlMethod } =
        typeMethod;
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <div className="flex flex-row items-center justify-between gap-2">
                    <div>
                        <Box
                            className={`px-3 py-1 font-semibold text-white bg-${color[nameMethod]}-500 border border-solid rounded`}
                        >
                            {nameMethod}
                        </Box>
                    </div>
                    <div className="flex flex-row gap-2">
                        <span className="font-semibold">{urlMethod}</span>
                        <span>{descriptionMethod}</span>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <TitleApi colorTheme={ColorMethodApi[colorMethod]} />
                <BodyApi colorTheme={ColorMethodApi[colorMethod]} />
                <ResponsesApi />
                <ExampleApi colorTheme={ColorMethodApi[colorMethod]} />
            </AccordionDetails>
        </Accordion>
    );
}
