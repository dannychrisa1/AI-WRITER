"use client"
import Image from "next/image";
import { TEMPLATE } from "../_types/type";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type selectedTemplateProp = {
    selectedTemplate: TEMPLATE
}

export default function FormSection({ selectedTemplate }: selectedTemplateProp) {
  
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    }

    return (
        <div className="p-5 shadow-lg border rounded-lg bg-white">
            <Image src={selectedTemplate?.icon} alt="icon" width={100} height={100} />
            <h2 className="font-bold text-2xl mb-2 text-primary">{selectedTemplate?.name}</h2>
            <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>
            <form className="mt-6" onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((item, index) => (
                    <div className="my-2 flex flex-col gap-2 mb-7">
                        <label className="font-bold">{item.label}</label>
                        {item.field == `input` ?
                            <Input />
                            : item.field == `textarea` ?
                                <Textarea /> : ''
                        }
                    </div>
                ))}
                <Button type="submit" className="w-full py-6">Generate Content</Button>
            </form>
        </div>
    )
}