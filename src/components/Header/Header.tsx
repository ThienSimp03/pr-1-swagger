import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AiFillLock, AiOutlineDown } from "react-icons/ai";

export default function Header() {
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
                        <Button variant="contained" color="success">
                            Authorize
                            <span className="ml-2">{<AiFillLock />}</span>
                        </Button>
                    </div>
                </Stack>
            </div>
        </div>
    );
}
