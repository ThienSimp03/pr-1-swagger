import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Post from "./Post";

export default function MethodApi() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className="flex flex-row items-center justify-between gap-2">
                        <div>
                            <div className="px-3 py-1 font-semibold text-white bg-green-500 border border-solid rounded">
                                POST
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <span className="font-semibold">
                                '/store/order'
                            </span>
                            <span>Place an order for a pet</span>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Post />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
