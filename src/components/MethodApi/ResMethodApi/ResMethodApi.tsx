import { Box } from '@mui/material'
import { Fragment } from 'react'

type Props = {
    resApi: any
    backgroundColor: string
}

export default function ResMethodApi(props: Props) {
    const { resApi, backgroundColor } = props
    return (
        <Fragment>
            <div className='flex items-center justify-between px-5 py-2 text-sm'>
                <p className='font-bold'>Response</p>
                <div className='flex items-center gap-5'>
                    <p className='text-xs font-bold'>Response content type</p>
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
