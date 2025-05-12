import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Header from './components/Header';
export default () => {
    return (
        <div>
            <div>
                <Header />
            </div>

            <div className="body">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </div>
    );
};
