import tmpApiComponent from 'src/models/tmpApiComponent'
import ApiComponent from '../ApiComponent'

export default function ContainerApi() {
  return (
    <div>
      <div className='mt-5 border-t-2 border-solid w-[1420px] mx-auto'>
        <div className='mt-5'></div>
        {tmpApiComponent.map((component, index) => {
          return <ApiComponent key={index} value={component} />
        })}
      </div>
    </div>
  )
}
