import { useState } from "react";
import { AiFillLock, AiOutlineDown } from "react-icons/ai";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Header() {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="mx-10 mt-14">
            <p className="text-3xl font-extrabold">Swagger Petstore</p>
            <div className="mt-40">
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={12}
                >
                    <div>
                        <Button variant="outlined" color="inherit">
                            HTTPS
                            <span className="ml-2">{<AiOutlineDown />}</span>
                        </Button>
                    </div>
                    <div>
                        <Button variant="outlined" onClick={handleClickOpen}>
                            Authorize
                            <span className="ml-2">{<AiFillLock />}</span>
                        </Button>
                        <Dialog
                            // fullScreen={fullScreen}
                            open={open}
                            onClose={handleClose}
                            // aria-labelledby="responsive-dialog-title"
                        >
                            <Box
                                component={"form"}
                                sx={{
                                    minWidth: " 648px,auto",
                                }}
                            >
                                <DialogTitle
                                    id="responsive-dialog-title"
                                    className="flex items-center justify-between"
                                >
                                    <p className="font-bold">
                                        Avaliable authorizations
                                    </p>
                                    <span
                                        onClick={handleClose}
                                        className="font-bold"
                                    >
                                        x
                                    </span>
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText className="grid grid-cols-1 gap-2 px-5 pt-5 border-t border-solid">
                                        <div className="text-lg font-bold">
                                            api_key (apiKey)
                                        </div>
                                        <div className="text-xs">
                                            Name: api_key
                                        </div>
                                        <div className="text-xs">
                                            In: header
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold">
                                                Value:{" "}
                                            </div>
                                            <input
                                                type="text"
                                                className="min-w-[522px] border border-solid border-[#ccc] py-1 px-2 rounded"
                                            />
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <DialogActions className="">
                                                <button
                                                    onClick={handleClose}
                                                    className="font-bold text-[#49CC90] border-2 border-solid border-[#49CC90] py-0.5 px-5 rounded"
                                                >
                                                    Authorize
                                                </button>
                                                <button
                                                    onClick={handleClose}
                                                    className="px-5 py-0.5 font-bold border-2 border-solid rounded border-[#ccc] text-gray-700"
                                                >
                                                    Close
                                                </button>
                                            </DialogActions>
                                        </div>
                                    </DialogContentText>
                                </DialogContent>
                            </Box>
                        </Dialog>
                    </div>
                </Stack>
            </div>
        </div>
    );
}
