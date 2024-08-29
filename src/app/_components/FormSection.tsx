"use client"
import Image from "next/image";
import { TEMPLATE } from "../_types/type";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

type selectedTemplateProp = {
    selectedTemplate: TEMPLATE
    userFormInput: any
    loading: boolean
}

export default function FormSection({ selectedTemplate, userFormInput, loading }: selectedTemplateProp) {


    const [formData, setFormData] = useState<object>({})

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        userFormInput(formData)
        // console.log(formData);

    }

    return (
        <div className="p-5 shadow-lg border rounded-lg bg-white">
            <Image src={selectedTemplate?.icon} alt="icon" width={100} height={100} />
            <h2 className="font-bold text-2xl mb-2 text-primary">{selectedTemplate?.name}</h2>
            <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>
            <form className="mt-6" onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((item, index) => (
                    <div key={index} className="my-2 flex flex-col gap-2 mb-7">
                        <label className="font-bold">{item.label}</label>
                        {item.field == `input` ?
                            <Input
                                name={item.name}
                                required={item.required}
                                onChange={handleInputChange}
                            />
                            : item.field == `textarea` ?
                                <Textarea
                                    name={item.name}
                                    required={item.required}
                                    onChange={handleInputChange}
                                /> : ''
                        }
                    </div>
                ))}
                <Button
                    type="submit"
                    className="w-full py-6"
                    disabled={loading}
                >
                    {loading && <Loader2Icon className="animate-spin"/>}
                    Generate Content
                </Button>
            </form>
        </div>
    )
}