import './Container.css'

export function Conteiner({children}){
    return (
        <div className="container">
            {children}
        </div>
    )
}