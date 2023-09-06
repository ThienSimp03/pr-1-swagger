import { Fragment, useContext, useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, TextField } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import axios from 'axios'
import qs from 'qs'

import { UserAuthorizedContextType } from 'src/types/UserAuthorizedContextType'
import { UserAuthorizedContext } from 'src/App'
import { MethodApi } from 'src/types/TypeComponentsApi'
import { ColorMethodApi, ColorMethodTheme } from 'src/types/TypeMethodApi'
import ResMethodApi from './ResMethodApi'
import ExampleMethodApi from './ExampleMethodApi'
// config()

type Props = {
    method: MethodApi
}

type typeObjectSchema = {
    [key: string]: any
}

export default function Method(props: Props) {
    const { method } = props
    const { nameMethod, title, url, fields, example } = method
    const arrayFields = fields.flatMap((item) => Object.keys(item))
    const [tryItOut, setTryItOut] = useState<boolean>(false)
    const [resApi, setResApi] = useState<any>('')
    const authorize = useContext(UserAuthorizedContext) as UserAuthorizedContextType
    const objectData: typeObjectSchema = {}
    arrayFields.forEach((item, index) => {
        objectData[item] = fields[index][item].default
    })
    const [data, setData] = useState<typeObjectSchema>(objectData)
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // console.log()
        const URLHOST = `${process.env.REACT_APP_ROOT_URL + url}`
        try {
            if (nameMethod === 'POST') {
                if (data.hasOwnProperty('image')) {
                    const { image } = data
                    const formData = new FormData()
                    arrayFields.forEach((item) => {
                        if (item !== 'image') {
                            formData.append(item, data[item])
                        } else {
                            formData.append('image', image[0])
                        }
                    })
                    const result = await axios.post(URLHOST, formData, {
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded',
                            'x-access-token': localStorage.getItem('token')
                        }
                    })
                    setResApi(result)
                } else {
                    const result = await axios.post(URLHOST, qs.stringify(data), {
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded',
                            'x-access-token': localStorage.getItem('token')
                        }
                    })
                    if (result.data?.accessToken !== undefined) {
                        authorize.setAuthorize(result.data.accessToken)
                        localStorage.setItem('token', result.data.accessToken)
                    }
                    setResApi(result)
                }
            } else if (nameMethod === 'GET') {
                console.log(localStorage.getItem('token'))
                const result = await axios.get(URLHOST, {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'x-access-token': localStorage.getItem('token')
                    }
                })
                setResApi(result)
            } else if (nameMethod === 'PUT') {
                const result = await axios.put(URLHOST, qs.stringify(data), {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'x-access-token': localStorage.getItem('token')
                    }
                })
                setResApi(result)
            } else {
                const result = await axios.delete(URLHOST, {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'x-access-token': localStorage.getItem('token')
                    }
                })
                setResApi(result)
            }
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon fontSize='large' />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                    sx={{
                        backgroundColor: ColorMethodTheme[nameMethod],
                        border: 1,
                        borderColor: ColorMethodApi[nameMethod],
                        borderRadius: 1,
                        paddingLeft: 1,
                        maxHeight: 20,
                        '&.Mui-expanded': {
                            minHeight: 40
                        },
                        '&': {
                            minHeight: 40
                        }
                    }}
                    // className='max-h-[10px]'
                >
                    <div className='flex flex-row items-center justify-between gap-2'>
                        <div>
                            <Box
                                className={` py-1 font-semibold text-white border border-solid text-sm rounded min-w-[80px] text-center`}
                                sx={{
                                    backgroundColor: ColorMethodApi[nameMethod],
                                    my: 0
                                }}
                            >
                                {nameMethod}
                            </Box>
                        </div>
                        <span className='text-[13px]'>{title}</span>
                    </div>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        padding: 0
                    }}
                >
                    <Box
                        className='p-5 text-sm'
                        sx={{
                            backgroundColor: ColorMethodTheme[nameMethod]
                        }}
                    >
                        {title}
                    </Box>
                    <div className='flex items-center justify-between px-5 py-2 mb-2'>
                        <p className='font-bold'>Parameters</p>
                        <button
                            className={`px-5 py-0.5 font-bold border-2 border-solid rounded-md text-sm ${
                                tryItOut ? 'border-red-500 text-red-500' : ' border-gray-500'
                            }`}
                            onClick={() => setTryItOut((prev) => !prev)}
                        >
                            {tryItOut ? 'Cancel' : ' Try it out'}
                        </button>
                    </div>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <Box
                            sx={{
                                width: '100%',
                                backgroundColor: ColorMethodTheme[nameMethod]
                            }}
                        >
                            {fields.length === 0 && (
                                <div className='p-5 text-sm max-h-[80px] flex items-center'>No parameters</div>
                            )}
                            {fields.length > 0 && (
                                <div className='grid grid-cols-12 gap-2 px-5 pt-6'>
                                    <div className='col-span-1 text-xs'>Name</div>
                                    <div className='col-span-11 text-xs'>Description</div>
                                    <div className='col-span-12 border-[#000] border-solid border-b-[0.5px]'></div>
                                    {/* Handle body */}
                                    {fields.map((item, index) => {
                                        const { typeInput, required } = item[arrayFields[index]]
                                        return (
                                            <Fragment key={index}>
                                                <div className='col-span-1 '>
                                                    <span className='relative text-xs font-bold'>
                                                        {arrayFields[index]}
                                                        {required && (
                                                            <span className='absolute top-[-10px] text-xs font-semibold text-red-500 left-full'>
                                                                *required
                                                            </span>
                                                        )}
                                                    </span>
                                                </div>
                                                <div className='flex flex-col col-span-11 gap-5'>
                                                    <Box
                                                        sx={{
                                                            width: '100%'
                                                        }}
                                                    >
                                                        {typeInput !== 'file' && (
                                                            <TextField
                                                                type={typeInput}
                                                                size='small'
                                                                fullWidth
                                                                value={
                                                                    item[arrayFields[index]].default !== ''
                                                                        ? item[arrayFields[index]].default
                                                                        : undefined
                                                                }
                                                                label={
                                                                    item[arrayFields[index]].default
                                                                        ? ''
                                                                        : arrayFields[index]
                                                                }
                                                                id={arrayFields[index]}
                                                                disabled={!tryItOut}
                                                                required={required ? true : false}
                                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                                    setData((prev) => ({
                                                                        ...prev,
                                                                        [arrayFields[index]]: e.target.value
                                                                    }))
                                                                }
                                                            />
                                                        )}
                                                        {typeInput === 'file' && (
                                                            <input
                                                                disabled={!tryItOut}
                                                                className='px-1 py-2 border border-gray-500 border-solid rounded'
                                                                type='file'
                                                                placeholder='click to select your image'
                                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                                    if (e.target.files && e.target.files.length > 0) {
                                                                        return setData((prev) => ({
                                                                            ...prev,
                                                                            [arrayFields[index]]: (
                                                                                e.target as HTMLInputElement
                                                                            ).files
                                                                        }))
                                                                    }
                                                                }}
                                                            ></input>
                                                        )}
                                                    </Box>
                                                </div>
                                            </Fragment>
                                        )
                                    })}
                                    {/* End handle body */}
                                </div>
                            )}
                            {tryItOut && (
                                <div className='pt-5 pb-2 bg-inherit'>
                                    <button
                                        className='flex justify-center w-full py-1 my-5 font-bold text-white bg-blue-500'
                                        type='submit'
                                    >
                                        Execute
                                    </button>
                                </div>
                            )}
                        </Box>
                    </form>
                    {/* Responses */}
                    <ResMethodApi resApi={resApi} backgroundColor={ColorMethodTheme[nameMethod]} />
                    <ExampleMethodApi backgroundColor={ColorMethodTheme[nameMethod]} example={example} />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
