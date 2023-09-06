import { Fragment } from 'react'
import { Box } from '@mui/material'
import { Example } from 'src/types/TypeComponentsApi'

type Props = {
    backgroundColor: string
    example: Example[] | undefined
}

export default function ExampleMethodApi(props: Props) {
    const { backgroundColor, example } = props
    return (
        <div>
            <div className='flex items-center justify-between px-5 py-2 mb-2'>
                <p className='font-bold'>Example</p>
            </div>
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: backgroundColor
                }}
                className=' border-t border-solid border-[#ccc]'
            >
                <div className='grid grid-cols-12 gap-2 px-5 py-6'>
                    <div className='col-span-1 text-xs'>Code</div>
                    <div className='col-span-11 text-xs'>Description</div>
                    <div className='col-span-12 border-[#000] border-solid border-b-[0.5px]'></div>
                    {example &&
                        example.map((item, index) => (
                            <Fragment key={index}>
                                <div className='relative col-span-1'>
                                    <span className='font-bold'>{item.status}</span>
                                </div>
                                <div className='col-span-11'>
                                    <div className='bg-[#333333] text-white p-2 rounded text-xs font-semibold col-span-11 overflow-x-auto'>
                                        {<pre>{JSON.stringify(item.body, null, 2)}</pre>}
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                </div>
            </Box>
        </div>
    )
}
