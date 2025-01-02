import ProductElement from "../components/ProductElement";
import imgPlch from "../images/Placeholder.jpg";

function Home() {

    return (
        <>
            <div className="contenedor-principal">
                <div className="productos">
                    <div className="productos-titulo">
                        Mis Productos:
                    </div>
                    <div className="productos-lista">
                        <ProductElement imagen={imgPlch} nombre="ELEMENTO 1" precio="$150.00" />
                        <ProductElement imagen={imgPlch} nombre="ELEMENTO 2" precio="$510.00" />
                        <ProductElement imagen={imgPlch} nombre="ELEMENTO 3" precio="$530.00" />
                        <ProductElement imagen={imgPlch} nombre="ELEMENTO 4" precio="$450.00" />
                        <ProductElement imagen={imgPlch} nombre="ELEMENTO 4" precio="$450.00" />
                        <ProductElement imagen={imgPlch} nombre="ELEMENTO 4" precio="$450.00" />
                    </div>
                </div>
                <div className="formulario">
                    <div className="formulario-titulo">
                        Agregar Producto:
                    </div>
                    <div className="formulario-campos">
                        <div className="formulario-campos-input">
                            <input type="text" id="nombre" name="nombre" placeholder="Nombre..." />
                        </div>
                        <div className="formulario-campos-input">
                            <input type="text" id="precio" name="precio" placeholder="Precio..." />
                        </div>
                        <div className="formulario-campos-input">
                            <input type="text" id="imagen" name="imagen" placeholder="Imagen..." />
                        </div>
                        <div className="formulario-campos-input">
                            <div className="formulario-campos-input-boton">Enviar</div>
                            <div className="formulario-campos-input-boton">Limpiar</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home