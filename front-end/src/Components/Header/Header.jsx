import './Header.css'
import 'aos';
import Helmet from 'react-helmet';

function componentReturn() {
    return (
        <>
            <div className="d-flex flex-column justify-content-between fluidBackground">
                <nav className="navbar navbar-light navbar-expand-md sticky-top shadow-sm" data-aos="fade-down" data-aos-duration="100" data-aos-offset="0">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <strong>&nbsp;</strong>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                                <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor"></path>
                            </svg>
                            <strong>&nbsp; &nbsp;Traveller Co.</strong>
                        </a>
                        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                            <span className="visually-hidden">
                                Toggle navigation
                            </span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">Início</a>
                                </li> 
                                <li className="nav-item">
                                    <a className="nav-link" href="/destinations">Destinos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/promotions">Promoções</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contato</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard/login">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid text-center" style={{Display: "flex", flexFlow: "column"}}>
                    <h2 className="display-4" data-aos="zoom-in-up" data-aos-offset="0" data-aos-delay="550" style={{color: "rgb(13,185,220)", textShadow: "0 0 white, 2px 2px 3px white", fontFamily: 'Alatsi', fontWeight: "bolder"}}>
                        Próximo destino: Aventura!
                    </h2>
                    <h2 data-aos="zoom-in" data-aos-offset="0" data-aos-delay="1650" style={{color: "#F78B28"}}>
                        <strong>Conte com a Traveller para que isso aconteça</strong>
                    </h2>
                    <button className="btn btn-primary border rounded-circle border-light shadow" data-aos="zoom-in-up" data-aos-offset="700" id="toTop" onClick={() => {window.location.href = "#"}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                        <path d="M17.6568 8.96219L16.2393 10.3731L12.9843 7.10285L12.9706 20.7079L10.9706 20.7059L10.9843 7.13806L7.75404 10.3532L6.34314 8.93572L12.0132 3.29211L17.6568 8.96219Z" fill="currentColor"></path>
                    </svg>Topo</button>
                </div> 
            </div>
        </>
    )
}

export default componentReturn;