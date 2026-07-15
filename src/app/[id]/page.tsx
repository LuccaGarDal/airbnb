interface PageProps {
    id: string
}

export default async function Page(
    {params} : {params: PageProps}
) {
    const dados = await params;

    console.log(dados);
    return (
        <h1>{dados.id}</h1>
    )
}
