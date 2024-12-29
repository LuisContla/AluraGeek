import LogoOscuro from "../images/Logo Oscuro.png";
import LogoClaro from "../images/Logo Claro.png";

function Footer() {

    return (
        <>
            <footer>
                <img src={LogoClaro} alt="Logo" className="footer-logo"/>
                <div className="footer-desarrollado">Desarrollado por <a target="_blanc" href="https://www.linkedin.com/in/luis-andr%C3%A9s-contla-mota-b2782a313/" className="footer-desarrollado-link">Luis Andrés Contla Mota</a></div>
                <div className="footer-derechos">Alura LATAM - 2024</div>
            </footer>
        </>
    )
}

export default Footer