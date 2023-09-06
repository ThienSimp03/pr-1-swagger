import { useState, useContext } from 'react'
import { AiFillLock, AiOutlineDown, AiFillUnlock } from 'react-icons/ai'
import Stack from '@mui/material/Stack'
import Dialog from '@mui/material/Dialog'
import { Box } from '@mui/material'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import { UserAuthorizedContext } from 'src/App'
import { UserAuthorizedContextType } from 'src/types/UserAuthorizedContextType'

export default function Header() {
    const authorize = useContext(UserAuthorizedContext) as UserAuthorizedContextType
    const [open, setOpen] = useState(false)
    const [valueInput, setValueInput] = useState(localStorage.getItem('token') || '')

    const hideToken = (token: string): string => {
        const length = token.length
        let newTokenHide = ''
        for (let i = 0; i < length; i++) {
            newTokenHide += '*'
        }
        return newTokenHide
    }
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleVerifyToken = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (valueInput.trim().length > 0) {
            authorize.setAuthorize(valueInput)
            localStorage.setItem('token', valueInput)
            handleClose()
        } else event.preventDefault()
    }
    const handleRemoveToken = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        authorize.setAuthorize('')
        setValueInput('')
        localStorage.removeItem('token')
    }

    return (
        <div className='w-full'>
            <div className='bg-[#FAFAFA]'>
                <p className='text-3xl font-extrabold pb-40 pt-14 w-[1420px] mx-auto '>Swagger Petstore</p>
            </div>
            <div className='w-full border-b-2 border-solid border-[#DFDFDF]'>
                <div className='text-sm py-[30px] w-[1420px] mx-auto'>
                    <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={12}>
                        <div>
                            <div className='border-2 border-solid border-gray-800 px-[10px] py-1.5 flex items-center justify-center font-bold rounded text-sm'>
                                HTTPS
                                <span className='pl-10 pr-2'>{<AiOutlineDown />}</span>
                            </div>
                        </div>
                        <div>
                            <div
                                className='text-[#49CC90] border-2 px-8 py-1.5  flex border-[#49CC90] items-center justify-center font-semibold rounded'
                                onClick={handleClickOpen}
                            >
                                Authorize
                                {authorize.authorize === '' && <span className='ml-2'>{<AiFillLock />}</span>}
                                {authorize.authorize !== '' && <span className='ml-2'>{<AiFillUnlock />}</span>}
                            </div>
                            <Dialog open={open} onClose={handleClose}>
                                <Box
                                    component={'form'}
                                    sx={{
                                        minWidth: ' 648px,auto'
                                    }}
                                >
                                    <DialogTitle
                                        id='responsive-dialog-title'
                                        className='flex items-center justify-between'
                                    >
                                        <p className='font-bold'>Avaliable authorizations</p>
                                        <span onClick={handleClose} className='font-bold'>
                                            x
                                        </span>
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText className='grid grid-cols-1 gap-2 px-5 pt-5 border-t border-solid min-w-[522px]'>
                                            <div className='text-lg font-bold'>api_key (apiKey)</div>
                                            {authorize.authorize !== '' && (
                                                <div className='text-xs font-extrabold'>Authorized</div>
                                            )}
                                            <div className='text-xs'>Name: api_key</div>
                                            <div className='text-xs'>In: header</div>
                                            <div>
                                                <div className='text-xs font-bold overflow-auto'>
                                                    Value: {hideToken(authorize.authorize)}
                                                </div>
                                                {authorize.authorize === '' && (
                                                    <input
                                                        type='text'
                                                        className='min-w-[522px] border border-solid border-[#ccc] py-1 px-2 rounded'
                                                        value={valueInput}
                                                        onChange={(e) => setValueInput(e.target.value)}
                                                    />
                                                )}
                                            </div>
                                            <div className='flex items-center justify-center'>
                                                <DialogActions>
                                                    {authorize.authorize === '' && (
                                                        <button
                                                            onClick={(e) => handleVerifyToken(e)}
                                                            className='font-bold text-[#49CC90] border-2 border-solid border-[#49CC90] py-0.5 px-5 rounded'
                                                        >
                                                            Authorize
                                                        </button>
                                                    )}
                                                    {authorize.authorize !== '' && (
                                                        <button
                                                            onClick={(e) => handleRemoveToken(e)}
                                                            className='px-5 py-0.5 font-bold border-2 border-solid rounded border-[#ccc] text-gray-700'
                                                        >
                                                            Logout
                                                        </button>
                                                    )}
                                                    <button
                                                        onClick={handleClose}
                                                        className='px-5 py-0.5 font-bold border-2 border-solid rounded border-[#ccc] text-gray-700'
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
        </div>
    )
}
