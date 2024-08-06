'use client'

import { Fragment } from "react";
import {IconButton} from './icon-button'
import {X} from 'lucide-react'
import {Dialog, DialogBackdrop, DialogPanel, Transition, TransitionChild} from '@headlessui/react'
import React from "react";
interface ModalProps {
    open:boolean;
    onClose:()=>void;
    children:React.ReactNode;
}

export function Modal({open,onClose,children}:ModalProps){
    return(
        <Transition show={open} appear as={Fragment}>
            <Dialog onClose={onClose} as='div' className='relative z-10'>
                <DialogBackdrop as='div' className='fixed inset-0 bg-black bg-opacity-25'/>
                <div className="fixed inset-0 bg-black bg-opacity-25">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                     <TransitionChild as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo='opacity-100 scale-100' leave="ease-in duration-200" leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
                        <DialogPanel as='div' className='rounded-lg text-left align-middle overflow-hidden w-full max-w-3xl'>
                            <div className="bg-white relative flex items-center overflow-hidden shadow-2xl pt-14 sm:pt-8 md:p-6 lg:p-8 pb-8 px-4">
                                <div className="absolute right-4 top-4">
                                    <IconButton onClick={onClose} icon={<X className="size-4"/>}/>
                                </div>
                                {children}
                            </div>
                        </DialogPanel>
                     </TransitionChild>
                </div>
                </div>
            </Dialog>
        </Transition>
    )
}