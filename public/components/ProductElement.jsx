import deleteIcon from "../images/DeleteIcon.png";

const ProductElement = (props) => {

    const { imagen, nombre, precio } = props;

    return (
        <>
            <div className="productos-lista-elemento">
                <div className="productos-lista-elemento-imagen">
                    <img className="productos-lista-elemento-imagen-imagen" src={imagen} alt="imagen" srcset="" />
                </div>
                <div className="productos-lista-elemento-nombre">{nombre}</div>
                <div className="productos-lista-elemento-datos">
                    <div className="productos-lista-elemento-datos-precio">{precio}</div>
                    <div className="productos-lista-elemento-datos-eliminar">
                        <img src={deleteIcon} alt="Borrar" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductElement