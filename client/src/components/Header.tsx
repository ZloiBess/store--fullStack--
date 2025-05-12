import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <nav>
                <Link to="/">Main</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
};
