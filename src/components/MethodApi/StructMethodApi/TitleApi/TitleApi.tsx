import Box from "@mui/material/Box";

type Props = {
    colorTheme: string;
};

export default function TitleApi(props: Props) {
    const { colorTheme } = props;
    return (
        <Box
            className="p-5"
            sx={{
                backgroundColor: colorTheme,
            }}
        >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            officia!
        </Box>
    );
}
