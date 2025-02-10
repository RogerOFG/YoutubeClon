"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const progressStyles = `
    #nprogress {
        pointer-events: none;
    }
    #nprogress .bar {
        background: red; /* Color rojo de YouTube */
        height: 2px; /* Grosor de la barra */
    }
    #nprogress .peg {
        box-shadow: 0 0 10px red, 0 0 5px red; /* Brillo rojo */
    }
`;

export default function LoadingBar() {
    const pathname = usePathname(); // Detecta el cambio de ruta

    useEffect(() => {
        const handleStart = () => NProgress.start();
        const handleStop = () => NProgress.done();

        handleStart(); // Iniciar progreso al cambiar de página
        handleStop(); // Detener progreso al cargar

    }, [pathname]); // Se ejecuta cada vez que cambia la ruta

    return <style>{progressStyles}</style>; // Inserta los estilos personalizados
}