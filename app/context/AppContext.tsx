'use client'

import {useContext, createContext, useState } from "react";
import { IProps, ContextData } from "@/types/interfaces";
import { useToggle, useHeight, useWidth } from "../hooks";

const GeneralContext = createContext<ContextData>({
    height: 0,
    width: 0,
    menuToggle: false,
    handleToggle: function (): void {
        throw new Error("Function not implemented.");
    },
}) 

export const GeneralAppContext = ({ children }: IProps) => {

    const [ height ] = useHeight()
    const [ width ] = useWidth() 
    const [ menuToggle, handleToggle, setMenuToggle ] = useToggle(false)

  return <GeneralContext.Provider value={{ height,  width, menuToggle, handleToggle, setMenuToggle }}>

            {children}

        </GeneralContext.Provider>
}

export const useGeneralContext = () => useContext(GeneralContext)
