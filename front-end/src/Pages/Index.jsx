import Header from '../Components/Header/Header';
import Helmet from 'react-helmet';

function renderTask() {
    return (
        <>
            <Helmet>
                <script>
                    document.title = "Traveller Co.";
                </script>
            </Helmet>
            <Header /> 
            <footer className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-center" style={{color:"#0db9dc",TextShadow: "0 0 0 white, 2px 2px 3px rgba(255,255,255,0.83)"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{Transform:"rotateX(30deg) rotateZ(-40deg) scaleX(1.5) scaleY(1.5)",Color:"#F78B28"}}>
                        <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor"></path>
                    </svg>Traveller Co.
                </h1>
                <h6 style={{Color: "rgba(144,179,190,0.31)"}}>&nbsp;</h6>
                <span id="rights" style={{Color: "rgb(255,255,255)", TextShadow: "1px 1px 2px rgba(0,0,0,0.58)", Position: "relative", zIndex: "1"}}>
                    Criado com ❤️ e ☕ por <a href="https://github.com/Bryceed" style={{Color: "white", FontWeight: "bold", Position: "relative"}} target="_blank" rel="noreferrer">Wellington N.</a>
                </span>
            </footer>
            <Helmet>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta3/js/bootstrap.bundle.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
            </Helmet>
        </>
    )
}

export default renderTask;