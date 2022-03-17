import {Link} from 'react-router-dom';
import './Error404.css';

export default () => {
    return (
        <div className="error-page">
            <div className="error-page__bg"></div>
            <div className="error-page__content">
                <h1 className="error-page__title">Não encontrado</h1>
                <div className="error-page__nyan-saver"></div>
                <p className="error-page__text">
                    Você viajou para outra dimensão.
                    <Link to="/" className="error-page__link">
                        Voltar?
                    </Link>
                </p>
            </div>
        </div>
    );
}