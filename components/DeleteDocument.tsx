'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import React, { useState } from 'react'
import { Button } from "./ui/button"

function DeleteDocument() {
    const [ isOpen, setIsOpen] = useState<boolean>(false)
  return (
<Dialog open={isOpen} onOpenChange={setIsOpen}>
    <Button asChild variant='destructive'>
        <DialogTrigger>Delete</DialogTrigger>
    </Button>
  <DialogTrigger>Open</DialogTrigger>
    <DialogContent>
        <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default DeleteDocument