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
        <div className='mb-2'>
            <ThemeProvider theme={theme}>
                <Accordion className='hover:bg-[#faf9f9]'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon fontSize='large' />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                    >
                        <div className='flex justify-between w-full'>
                            <div className='flex flex-row items-center justify-between gap-2'>
                                <span className=' font-semibold text-2xl'>{name}</span>
                                <span className='text-sm'>{title}</span>
                            </div>
                            <div className='flex flex-row items-center justify-between gap-2'>
                                <span className='text-blue-700 text-sm mr-4'>{description}</span>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='flex flex-col gap-2'>
                            {methods.map((method, index) => (
                                <Method method={method} key={index} />
                            ))}
                        </div>
                    </AccordionDetails>
                </Accordion>
            </ThemeProvider>
        </div>
    )
}
