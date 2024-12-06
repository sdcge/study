'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const linkData = [
    {
        path: '/dashboard/about',
        name: 'About'
    },
    {
        path: '/dashboard/settings',
        name: 'Settings'
    },
]
export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [count, setCount] = useState(0)

    const pathname = usePathname()
    console.log('pathname', pathname)

    return (
        <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10 Root-Dashboard-layout">
            <div className="flex gap-4 font-bold text-lg mb-4">
                {
                    linkData.map((link) => {
                        return (
                            <Link key={link.path} className={pathname === link.path ? 'text-purple-500' : ''} href={link.path}>{link.name}</Link>
                        )
                    })
                }
                {/* <Link className={pathname === '/dashboard/about' ? 'text-purple-500' : ''} href="/dashboard/about">About</Link>
                <Link className={pathname === '/dashboard/settings' ? 'text-purple-500' : ''} href="/dashboard/settings">Settings</Link> */}
            </div>
            <h2>Dashboard Layout {count}</h2>
            <button className="bg-black text-white p-2 my-4 rounded-md" onClick={() => setCount(count + 1)}>Incerement</button>
            {children} {/* 若有 app\dashboard\template.tsx，在此处插入。 (app\dashboard\template.tsx　中又有插入：app\dashboard\page.tsx) 的内容；若无，则在此处插入：app\dashboard\page.tsx　的内容 */}

        </div>


    );
}
