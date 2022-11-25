import { useState } from "react"

export default function Sobre(){

    const [lista, setLista] = useState(['NextJS', 'SSR', 'ISR', 'React']);

    return (
        <div>
            <h1>Sobre o sistema</h1>
            <h2>Desenvolvido com Next.js</h2>
            {
                lista.map((item) => (
                    <li key={item}>{item}</li>
                ))
            }
        </div>
    )
}