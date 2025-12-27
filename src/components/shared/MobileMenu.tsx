"use client"

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { MdClose, MdMenu } from "react-icons/md";

const MobileMenu = () => {
    const [isOpen, setIsOpen] =useState(false);

    const togglemenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div>
         <div className="lg:hidden">
                    <Button 
                    onClick={togglemenu}
                    variant="outline">
                        {
                            isOpen ? (
                                <MdMenu size={24} />
                            ) : (
                                <MdClose size={24} />
                            )
                        }
                        
                    </Button>
                </div>
    </div>
  )
}

export default MobileMenu