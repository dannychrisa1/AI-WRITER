"use client"
import { Search } from "lucide-react";

type SearchInput = {
    onSearchInput : (value:string) => void
}

export default function SearchSection({onSearchInput}:SearchInput) {  
  return (
        <div className="backdrop-blur-xl p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600
        flex flex-col items-center justify-center text-white">
            <h2 className="text-3xl font-bold">Browse All templates</h2>
            <p>What would you like to create today?</p>
            <div className="w-full flex justify-center"> 
                <div className="bg-white my-4 flex gap-2 items-center 
                   p-2 border rounded-md w-full lg:w-[50%]">
                    <Search className="text-primary" />
                    <input
                        type="text"
                        onChange={(event) => onSearchInput(event.target.value)}
                        placeholder="Search"
                        className="w-full bg-transparent outline-none text-black"
                    />
                </div>
            </div>

        </div>
    )
}