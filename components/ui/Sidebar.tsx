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
  const menuOptions = (
    <>
      <NewDocumentButton/>
    </>
  )
  return (    
    <div className="p-2 md:p-5 bg-green-200">
      <div className="md:hidden">
        <Sheet>
        <SheetTrigger>
            <MenuIcon className="hover:opacity-30 rounded-lg" size={25}/>
        </SheetTrigger>
        <SheetContent side={'left'}>
            <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <div>{menuOptions}</div>
            </SheetHeader>
        </SheetContent>
        </Sheet>
      </div>
        <div className='hidden md:inline'>{menuOptions}</div>
    </div>
  )
}

export default Sidebar