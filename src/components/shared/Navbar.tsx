"use client"

import Link from "next/link"
import { Switch } from "@/components/ui/switch"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Button } from "../ui/button"

import { usePathname } from "next/navigation";

import MobileMenu from "./MobileMenu"


const Navbar = () => {
    const pathname = usePathname()
    
    return (
        <header className="py-4 shadow-md">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center ">
                {/* logo */}
                <div className="text-xl font-bold">
                    <Link href="/">Daily News</Link>
                </div>

                {/* desktop */}

                <NavigationMenu className="hidden lg:flex items-center space-x-4">
                    <NavigationMenuList>

                        {/* News */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/news" className={`hover:text-red-500 ${pathname === "/news" ? "text-green-700 font-bold bg-amber-200 px-4" : ''}`}>News</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* Services */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger >Services</NavigationMenuTrigger>

                            <NavigationMenuContent>
                                <ul className="p-4 space-y-2">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href="/services/web" className="hover:text-red-500">Web Development</Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href="/services/apps">Mobile Apps</Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href="/services/seo">SEO</Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* About */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/about" className={`hover:text-red-500 ${pathname === "/about" ? "text-green-700 font-bold bg-amber-200 px-4" : ''}`}>About</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* Contact */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/contact" className={`hover:text-red-500 ${pathname === "/contact" ? "text-green-700 font-bold bg-amber-200 px-4" : ''}`}>Contact</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>

                {/* theme change */}

                <div className=" items-center space-x-4 hidden lg:flex ">
                    <div className="flex items-center">
                        <span className="mr-2">Dark Mode</span>
                        <Switch />
                    </div>
                    <Button variant="default">Login</Button>
                </div>
                {/* mobile hamburger */}
               <MobileMenu></MobileMenu>
            </nav>
        </header>
    )
}

export default Navbar