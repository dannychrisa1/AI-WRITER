import { Templates } from "@/app/_constants";
import { TEMPLATE } from "@/app/_types/type";
import TemplateCard from "./TemplateCard";
import { useEffect, useState } from "react";

type inputProps ={
    userSearchInput: string
}
export default function TemplateListSection({userSearchInput}:inputProps) {
 
    const [templateList, setTemplateList] = useState(Templates)

    useEffect(() => {
        if(userSearchInput){
            const filteredData = Templates.filter(item => item.name.toLowerCase().includes(userSearchInput.toLowerCase()));
            console.log(filteredData);
            setTemplateList(filteredData);
        }else{
            setTemplateList(Templates)
        }
    }, [userSearchInput])

   

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5
        p-10">
            {templateList.map((template: TEMPLATE, index:number) => (
                <div key={index}>
                    <TemplateCard {...template} />
                </div>
            ))}
        </div>
    )
}