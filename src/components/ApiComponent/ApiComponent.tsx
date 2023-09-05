// import { useContext } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
// import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { createTheme, ThemeProvider } from '@mui/material/styles'

// import { UserAuthorizedContext } from 'src/App'
// import { UserAuthorizedContextType } from 'src/types/UserAuthorizedContextType'
import { ComponentApi } from 'src/types/TypeComponentsApi'
import Method from '../MethodApi'

const theme = createTheme({
    palette: {
        success: {
            main: '#E8F6F0'
        },
        info: {
            main: '#ebf3fb'
        },
        warning: {
            main: '#fbf1e6'
        },
        error: {
            main: '#fae7e7'
        }
    }
})

type Props = {
    value: ComponentApi
}

export default function ApiComponents(props: Props) {
    const { name, description, title, methods } = props.value
    // const authorize = useContext(UserAuthorizedContext) as UserAuthorizedContextType
    return (
        <div className='mb-5'>
            <ThemeProvider theme={theme}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                    >
                        <div className='flex justify-between w-full'>
                            <div className='flex flex-row items-center justify-between gap-2'>
                                <span className='text-2xl font-bold'>{name}</span>
                                <span className=''>{title}</span>
                            </div>
                            <div className='flex flex-row items-center justify-between gap-2'>
                                <span className='text-blue-700'>{description}</span>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        {methods.map((method, index) => (
                            <Method method={method} key={index} />
                        ))}
                    </AccordionDetails>
                </Accordion>
            </ThemeProvider>
        </div>
    )
}
