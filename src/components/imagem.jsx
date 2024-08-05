function Imagem(props){
    return(
        <div className={props.orientation}>
            <div className="galeriaItem">
                <div className="imagemItem">
                    <img src={props.source} />
                </div>
                <div className="textoItem">
                    <p>{props.imagemTexto}</p>
                </div>
            </div>
        </div>
    )
}

export default Imagem