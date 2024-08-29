"use client"

import FormSection from "@/app/_components/FormSection"
import OutputSection from "@/app/_components/OutputSection"
import { Templates } from "@/app/_constants"
import { TEMPLATE } from "@/app/_types/type"
import { Button } from "@/components/ui/button"
import { chatSession } from "@/utils/AImodal"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"


type slugProps = {
    params: {
        'template-slug': string
    }
}



export default function CreateContent({ params }: slugProps) {
    const selectedTemplate: TEMPLATE = Templates?.find((item) => item.slug === params['template-slug']) as TEMPLATE
    const [loading, setLoading] = useState<boolean>(false)
    const [aiOutput, setAiOutput] = useState<string>("")
   
    const GenerateAIContent = async(formData:any)=> {
        setLoading(true)
        const selectedPrompt = selectedTemplate?.aiPrompt;
        const FinalAIPrompt = JSON.stringify(formData)+", "+selectedPrompt;
        const result = await chatSession.sendMessage(FinalAIPrompt)
        setAiOutput(result?.response.text())
        console.log(result.response.text());
        setLoading(false)

    }
    
    return (
        <div className="p-10">
            <Link href={"/dashboard"}>
                <Button><ArrowLeft />Back</Button>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-5">
                {/* Form Section */}
                <FormSection
                    selectedTemplate={selectedTemplate}
                    userFormInput={(v: any) => GenerateAIContent(v)}
                    loading={loading}
                />

                {/* Output Section */}
                <div className="col-span-2">
                    <OutputSection aiOutput={aiOutput} />
                </div>
            </div>
        </div>
    )
}