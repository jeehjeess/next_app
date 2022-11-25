function SSR({ especialidades }) {
    return (
        <div>
            <h1> SSR</h1>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        especialidades.map(obj => (
                            <tr key={obj.codigo}>
                                <td>{obj.codigo}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.descricao}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SSR;

export async function getServerSideProps() {
    const res            = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/especialidades`);
    const especialidades = await res.json();

    return {
        props: {
            especialidades
        }
    }
}