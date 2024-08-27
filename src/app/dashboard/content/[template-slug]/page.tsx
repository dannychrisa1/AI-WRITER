import { Metadata } from "next"
import FormSection from "@/app/_components/FormSection"
import OutputSection from "@/app/_components/OutputSection"
import { Templates } from "@/app/_constants"
import { TEMPLATE } from "@/app/_types/type"


type slugProps = {
    params: {
        'template-slug': string
    }
}

export const generateMetadata = async({params}:slugProps):Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(()=> {
            resolve(`${params['template-slug']}`)
        },100)
    })
    return{
        title: `${title}`
    }
}


export default function CreateContent({ params }: slugProps) {

    const selectedTemplate: TEMPLATE = Templates?.find((item) => item.slug === params['template-slug']) as TEMPLATE

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5">
            {/* Form Section */}
            <FormSection selectedTemplate={selectedTemplate} />

            {/* Output Section */}
            <div className="col-span-2">
                <OutputSection />
            </div>

        </div>
    )
}