import React from 'react'
import NewDocumentButton from './NewDocumentButton'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react'
  
  

function Sidebar() {
  return (    
    <div className="p-2 md:p-5 bg-green-200">
        <Sheet>
        <SheetTrigger>
            <MenuIcon className="hover:opacity-30 rounded-lg" size={25}/>
        </SheetTrigger>
        <SheetContent side={'left'}>
            <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <div>

            </div>
            </SheetHeader>
        </SheetContent>
        </Sheet>

        <div className='hidden md:inline'>
            <NewDocumentButton/>
        </div>
    </div>
  )
}

export default Sidebar