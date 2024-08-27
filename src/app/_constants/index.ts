import { FileClock, Home, Settings, WalletCards, } from "lucide-react";

export const MenuList = [
    {
        name: 'Home',
        icon: Home,
        path: '/dashboard'
    },
    {
        name: 'History',
        icon: FileClock,
        path: '/dashboard/history'
    },
    {
        name: 'Billing',
        icon: WalletCards,
        path: '/dashboard/billing'
    },
    {
        name: 'Setting',
        icon: Settings,
        path: '/dashboard/setting'
    }
]



export const Templates = [

    {
        name: 'Blog Content',
        desc: 'An AI tool that generate blog title depending on your blog information',
        category: 'Blog',
        icon: '/title.png',
        aiPrompt: 'Give me 5 blog topic idea in a bullet wise and only based on given niche and outline topic and give me result in rich text edited format',
        slug: 'generate-blog-content',
        form: [
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
                required:true
            }
        ]
    },
    {
        name: 'Blog Title',
        desc: 'An AI tool that generate blog title depending on your blog information',
        category: 'Blog',
        icon: '/title.png',
        aiPrompt: 'Give me 5 blog topic idea in a bullet wise and only based on given niche and outline topic and give me result in rich text edited format',
        slug: 'generate-blog-title',
        form: [
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
                required:true
            }
        ]
    },
    {
        name: 'Youtube-Content',
        desc: 'An AI tool that generate blog title depending on your blog information',
        category: 'Blog',
        icon: '/title.png',
        aiPrompt: 'Give me 5 blog topic idea in a bullet wise and only based on given niche and outline topic and give me result in rich text edited format',
        slug: 'generate-youtube-content',
        form: [
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
                required:true
            }
        ]
    },
    {
        name: 'Youtube-Seo',
        desc: 'An AI tool that generate blog title depending on your blog information',
        category: 'Blog',
        icon: '/title.png',
        aiPrompt: 'Give me 5 blog topic idea in a bullet wise and only based on given niche and outline topic and give me result in rich text edited format',
        slug: 'generate-youtube-seo',
        form: [
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
                required:true
            }
        ]
    }


]