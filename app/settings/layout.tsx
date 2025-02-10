"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    const pathname = usePathname();

    const menu = [
        { title: "Cuenta", link: "/settings/account" },
        { title: "Notificaciones", link: "/settings/account_notifications" },
        { title: "Reproducción y rendimiento", link: "/settings/account_playback" },
        { title: "Privacidad", link: "/settings/account_privacy" },
        { title: "Aplicaciones conectadas", link: "/settings/account_sharing" },
        { title: "Opciones de pago", link: "/settings/account_billing" },
        { title: "Configuración avanzada", link: "/settings/account_advanced" }
    ];

    return (
        <div className="relative flex">
            <aside className="min-w-60 min-h-screen bg-[#0f0f0f] z-20">
                <div className="fixed top-14 w-60 py-[18px]">
                    <div className="pb-5 pl-6 text-[19px] text-[#aaa] font-medium">Configuración</div>
                    
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

            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}
