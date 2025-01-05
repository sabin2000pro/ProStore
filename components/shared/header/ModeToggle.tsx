/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { Button } from "@/components/ui/button";
import { 
    DropdownMenu, 
    DropdownMenuTrigger, 
    DropdownMenuLabel, 
    DropdownMenuSeparator, 
    DropdownMenuContent,
    DropdownMenuCheckboxItem
 } from "@/components/ui/dropdown-menu";

import { useTheme } from "next-themes";
import {SunIcon, MoonIcon, SunMoon} from 'lucide-react'
import { useState, useEffect } from "react";

const ModeToggle = () => { // Component for changing the theme
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    if(!mounted) {
        return null;
    }
    
    return <>

       <DropdownMenu>

          <DropdownMenuTrigger asChild>

                <Button className = 'focus-visible:ring-0 focus-visible:ring-offset-0' variant= 'ghost'>

                    {theme === 'system' ? (

                        <SunMoon />
                    ) : theme === 'dark' ? (

                        <MoonIcon />
                    ) : (
                        <SunIcon />
                    )}
                </Button>

          </DropdownMenuTrigger>

          <DropdownMenuContent>

            <DropdownMenuLabel>Appearance</DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuCheckboxItem 
              onClick = {() => setTheme('system')} 
              checked = {theme === 'system'}>
                System
            </DropdownMenuCheckboxItem>

            <DropdownMenuCheckboxItem 
              onClick = {() => setTheme('dark')} 
              checked = {theme === 'dark'}>
                Dark
            </DropdownMenuCheckboxItem>

            <DropdownMenuCheckboxItem 
              onClick = {() => setTheme('light')} 
              checked = {theme === 'light'}>
                Light
            </DropdownMenuCheckboxItem>

          </DropdownMenuContent>

        </DropdownMenu>  


    </>
}
 
export default ModeToggle;