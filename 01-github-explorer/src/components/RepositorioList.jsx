import { RepositorioItem } from "./RepositorioItem";

const propriedades = {
    name: 'Forms',
    description: 'Forms in repositorio',
    link: 'http://github/forms/form'
}

export function RepositorioList(){
    return(
        <div className="container">
            <section className="repository-list">
                <h1>Lista de repositorios</h1>

                <ul>
                    <RepositorioItem repository={propriedades}/>
                    <RepositorioItem repository={propriedades}/>
                    <RepositorioItem repository={propriedades}/>
                    <RepositorioItem repository={propriedades}/>
                </ul>
            </section>
        </div>
    )
}