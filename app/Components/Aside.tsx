"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Aside() {
    const pathname = usePathname();

    const menu = [
        { title: "Inicio", link: "/settings/account" },
        { title: "Shorts", link: "/settings/account_notifications" },
        { title: "Suscripciones", link: "/settings/account_playback" },
        { title: "Configuración", link: "/settings/account" }
    ];

    return (
        <aside className="min-w-60">
            <div className="fixed top-14 w-60 py-[18px]">
                <div className="flex flex-col pl-2.5">
                    {menu.map((item, index) => {
                        const isActive = pathname === item.link;
                
                        return (
                            <Link
                                key={index}
                                href={item.link}
                                className={`flex items-center w-[216px] h-10 px-4 text-sm rounded-[10px] hover:bg-[#3f3f3f] ${
                                    isActive ? "bg-[#3f3f3f] text-white" : ""
                                }`}
                            >
                                {item.title}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
}
