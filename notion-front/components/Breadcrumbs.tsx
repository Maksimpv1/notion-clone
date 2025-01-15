'use client'
import { usePathname } from 'next/navigation'
import React, { Fragment } from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

  
function Breadcrumbs() {
    const path = usePathname()

    const segments = path.split('/').filter(item=> item !== '');

  return (
    <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            {segments.map((segment,index)=>{
                if (!segments) return null;
                const href = `/${segments.slice(0, index + 1).join("/") }`;
                const isLast = index === segments.length - 1
                return (
                    <Fragment key={index}>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem >
                            {isLast ? (
                            <BreadcrumbPage>{segment}</BreadcrumbPage>
                            ) : (
                            <BreadcrumbLink href={href}>{segment}</BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                    </Fragment>

                )
            })}
        </BreadcrumbList>
    </Breadcrumb>

  )
}

export default Breadcrumbs