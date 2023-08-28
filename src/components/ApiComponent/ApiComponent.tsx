import { useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import MethodApi from "../MethodApi";
import { TypeMethodApi } from "src/types/TypeMethodApi";
import { UserAuthorizedContext } from "src/App";
import { UserAuthorizedContextType } from "src/types/UserAuthorizedContextType";

const theme = createTheme({
    palette: {
        success: {
            main: "#E8F6F0",
        },
        info: {
            main: "#ebf3fb",
        },
        warning: {
            main: "#fbf1e6",
        },
        error: {
            main: "#fae7e7",
        },
    },
});

const tmpMethodPost: TypeMethodApi = {
    nameMethod: "post",
    colorMethod: "post",
    descriptionMethod: "Add a new pet to the store",
    urlMethod: "/pet",
    bodyMethod: [],
};

export default function ApiComponents() {
    const authorize = useContext(
        UserAuthorizedContext
    ) as UserAuthorizedContextType;
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Accordion disabled={authorize.authorize === "" ? true : false}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className="flex justify-between w-full">
                            <div className="flex flex-row items-center justify-between gap-2">
                                <span className="text-2xl font-bold">pet</span>
                                <span className="">
                                    Everything about your Pets
                                </span>
                            </div>
                            <div className="flex flex-row items-center justify-between gap-2">
                                <span className="text-blue-700">
                                    Find out more
                                </span>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <MethodApi typeMethod={tmpMethodPost} />
                    </AccordionDetails>
                </Accordion>
            </ThemeProvider>
        </div>
    );
}
