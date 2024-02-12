import './Pendu.css';
import Layout from '../components/Layout/Layout';
import Keyboard from '../components/keyboard/keyboard';
import handleKeyPress from '../hook/useKeyboard.ts'


const Pendu: React.FC = () => {
    return (
        <div className="Pendu">
            <Layout>
            </Layout>
            <h1>Pendu</h1>
            <Keyboard onKeyPress={handleKeyPress} />
        </div>
    );
};

export default Pendu;