import {Billboard as BillboardType} from '@/types'
interface BillboardProps{
    data:BillboardType
}

export function Billboard({data}:BillboardProps) {
    return (
        <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'>
            <div 
            className='rounded-xl aspect-square bg-cover overflow-hidden md:aspect-[2.4/1] relative'
            style={{backgroundImage:`url(${data?.imageUrl})`}}>
                <div className='h-full w-full bg-black/30 flex  flex-col items-center justify-center gap-y-4 text-center'>
                    <div className='font-bold  text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl text-white max-w-xs'>
                        {data?.label}
                    </div>
                </div>
            </div>
        </div>
    )
}