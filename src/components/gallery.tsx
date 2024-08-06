'use client'

import {TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/react'

import { Image as ImageType } from "@/types";
import Image from 'next/image';
import { GalleryTab } from './gallery-tab';

interface GalleryProps{
    images:ImageType[];
}

export function Gallery({images}:GalleryProps){
    return(
        <TabGroup as="div" className="flex flex-col-reverse gap-x-2">
            <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
                <TabList as="div" className="grid grid-cols-4 gap-6">
                    {images.map((image)=>(
                        <GalleryTab key={image.id} image={image}/>
                    ))}
                </TabList>
            </div>
            <TabPanels as="div" className="aspect-square w-full">
                {images.map((image)=>(
                    <TabPanel key={image.id} className="aspect-square bg-white rounded-md overflow-hidden relative flex items-center justify-center cursor-pointer">
                        <div className='aspect-auto relative w-full h-full sm:rounded-lg overflow-hidden'>
                            <Image
                            src={image.url}
                            alt={image.url}
                            fill
                            className="object-cover object-center"
                            />
                        </div>
                    </TabPanel>
                ))}
            </TabPanels>
        </TabGroup>
    )
}