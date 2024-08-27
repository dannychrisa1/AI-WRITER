export type FORM = {
    label:string
    field:string
    name:string
    required?:boolean
}


export type TEMPLATE = {
    name:string
    desc:string
    category:string
    icon:string
    aiPrompt:string
    slug:string
    form?:FORM[]
}