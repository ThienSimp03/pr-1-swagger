import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MethodApi from "../MethodApi";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        success: {
            main: "#E8F6F0",
        },
    },
});

export default function ApiComponents() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className="flex justify-between w-full">
                            <div className="flex flex-row items-center justify-between gap-2">
                                <span className="text-2xl font-bold">Pet</span>
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
                        <MethodApi />
                    </AccordionDetails>
                </Accordion>
            </ThemeProvider>
        </div>
    );
}
