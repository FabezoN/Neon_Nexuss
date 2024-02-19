import Layout from "../components/Layout/Layout";
import Stat from "../components/Statistique/stat.tsx"
import './Statistique.css'

const Statistique: React.FC = () => (
    <div className="Statistique">
        <Layout>
        </Layout>
        <Stat></Stat>
        <div className="BtnHome">
            <a href="/">
                <button type="button" className="btn custom-primary-btn custom-hover">Accueil</button>
            </a>
        </div>
    </div>

);

export default Statistique;
