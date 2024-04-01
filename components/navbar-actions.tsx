"use client"

import { ShoppingBag } from "lucide-react"
import Button from "./ui/Button"
import { useEffect, useState } from "react"
import useCart from "@/hooks/use-cart"
import { useRouter } from "next/navigation"
import { on } from "events"


const NavbarActions = () => {

    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();
    const router = useRouter();


    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    };



  return (
    <div
        className="flex gap-x-4 ml-auto items-center">
        <Button
            onClick={() => router.push("/cart")}  
            className="flex rounded-full items-center bg-black px-4 py-2">
            <ShoppingBag
                size={20}
                color="white"
            />
            <span className="ml-2 text-sm font-medium text-white">
                {cart.items.length}
            </span>
        </Button>
    </div>
  )
}

export default NavbarActions

