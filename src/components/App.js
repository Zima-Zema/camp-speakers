import Header from './Header';
import Speakers from "./Speakers";
import Layout from './Layout';

export default function App() {
    return (
        <Layout startingTheme='light'>
            <div>
                <Header />
                <Speakers />
            </div>
        </Layout>
    );
}
