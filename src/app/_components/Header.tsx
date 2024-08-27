import { Search } from "lucide-react";

export default function Header() {
    return (
        <div className="p-5 shadow-sm border bg-white flex justify-between items-center border-b-2">
            <div className="flex gap-2 items-center bg-white p-2 border-rounded-md
           max-w-lg">
                <Search />
                <input
                    className="outline-none"
                    type="text"
                    placeholder="Search..."
                />
            </div>
            <div>
                <h2 className="flex bg-primary p-1 rounded-full text-xs text-white
                px-2">

                    Join Membership just for $9.99/Month
                </h2>
            </div>
        </div>
    )
}