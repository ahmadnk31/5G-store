'use client'

import { Color, Size } from "@/types";
import { useState } from "react";
import { Button } from "./ui/Button";
import { Plus, X } from "lucide-react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { IconButton } from "@/components/ui/icon-button";
import {Filter} from '@/components/ui/filter'

interface MobileFilterProps {
    sizes:Size[];
    colors:Color[]
}

export function MobileFilter({sizes,colors}:MobileFilterProps){
    const [open,setOpen] = useState(false);
    function onOpen(){
        setOpen(true);
    }
    function onClose(){
        setOpen(false);
    }
    return(
        <>
        <Button
        onClick={onOpen}
         className='flex rounded-full items-center gap-x-2 lg:hidden'>
            Filters
            <Plus className="size-4"/>
        </Button>
        <Dialog

         open={open} as="div" className="relative z-10 lg:hidden focus:outline-none transition-all" onClose={onClose}>
            <DialogBackdrop as="div" className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-10 bg-black bg-opacity-25">
          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="w-full max-w-xs ml-auto flex h-full flex-col overflow-y-auto bg-white  py-4 pb-6 shadow-xl"
            >
             
              <div className="flex items-center justify-end px-4">
                
                  <IconButton
                  onClick={onClose}
                   icon={<X className="size-4" />} />
                
              </div>
              <div className="p-4">
                <Filter 
                valueKey="sizeId"
                name='sizes'
                data={sizes}

                />
                <Filter 
                valueKey="colorId"
                name='colors'
                data={colors}

                />
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
        </>
    )
}