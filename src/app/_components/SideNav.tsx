"use client"
import Image from "next/image"
import { MenuList } from "@/app/_constants"
import { usePathname } from "next/navigation"


export default function SideNav() {

    const path = usePathname()


    return (
        <div className="h-screen p-5 shadow-sm border">
            <div className="flex justify-center">
                <Image
                    className="-mt-[30px] aspect-square"
                    src={'/ailogo3.png'}
                    alt="ai"
                    priority={true}
                    width={80} 
                    height={80} 
                    style={{ width: 'auto', height: 'auto' }} 
                />
            </div>
            <hr className="border my-1" />
            <div className="mt-10">
                {MenuList.map((menu, index) => (
                    <div key={index} className={`flex items-center gap-2 mb-2
                    p-3 hover:bg-primary hover:text-white cursor-pointer
                    rounded-lg hover:backdrop-blur-sm ${path == menu.path && 'bg-primary text-white'}`}>
                        <menu.icon />
                        <h2 className="text-lg">{menu.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}