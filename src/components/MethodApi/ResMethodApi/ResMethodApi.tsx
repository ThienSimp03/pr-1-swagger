import { Box } from '@mui/material'
import { Fragment, useState } from 'react'
import { TfiAngleDown } from 'react-icons/tfi'

type Props = {
    resApi: any
    backgroundColor: string
}

const contentTypeRes: string[] = ['application/json', 'application/xml']

export default function ResMethodApi(props: Props) {
    const [typeRes, setTypeRes] = useState<string>(contentTypeRes[0])
    const [switchTypeRes, setSwitchTypeRes] = useState<boolean>(false)

    const switchTypeResOn = () => {
        setSwitchTypeRes((prev) => !prev)
    }
    const handleSwitchType = (content: string) => {
        setSwitchTypeRes(true)
        setTypeRes(content)
    }
    const { resApi, backgroundColor } = props
    return (
        <Fragment>
            <div className='flex items-center justify-between px-5 py-2 text-sm'>
                <p className='font-bold'>Response</p>
                <div className='flex items-center gap-5'>
                    <p className='text-xs font-bold'>Response content type</p>
                    <div
                        className='flex items-center gap-2 w-[230px] px-[10px] border-2 border-black border-solid rounded justify-between hover:bg-[#ccc] font-semibold relative'
                        onClick={switchTypeResOn}
                    >
                        {typeRes}
                        <span>
                            <TfiAngleDown />
                        </span>
                        {switchTypeRes && (
                            <div className='absolute left-0 right-0 top-full border-2 border-solid bg-[#F7F7F7] border-[#000]'>
                                {contentTypeRes.map((content, index) => {
                                    return (
                                        <button
                                            key={index}
                                            className='flex items-center w-full px-[10px] hover:bg-blue-500 hover:text-white font-semibold'
                                            onClick={() => handleSwitchType(content)}
                                        >
                                            {content}
                                        </button>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {resApi !== '' && (
                <Box
                    sx={{
                        width: '100%',
                        backgroundColor: backgroundColor
                    }}
                    className=' border-t border-solid border-[#ccc]'
                >
                    <div className='grid grid-cols-12 gap-2 px-5 py-6'>
                        <div className='col-span-1 text-sm'>{resApi.status}</div>
                        <div className='bg-[#333333] text-white p-2 rounded text-xs font-semibold col-span-11 overflow-x-auto'>
                            {resApi.status !== 404 && <pre>{JSON.stringify(resApi.data, null, 2)}</pre>}
                            {parseInt((resApi.status / 100).toString()) === 4 && <p>{resApi.message}</p>}
                        </div>
                    </div>
                </Box>
            )}
        </Fragment>
    )
}
