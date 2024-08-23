import Calendary from "./Components/Calendary/Calendary";
import Header from "./Components/Users/Header";
import style from "./App.module.css";
import Modal from "./Components/Users/Modal";
import Footer from "./Components/Users/Footer";

function App () {
    return (
        <div className={style.container}>
            <div className={style.main}>
                <Modal />
                <Header />
                <Calendary/>
                <Footer />
            </div>
        </div>

    );
}

export default App;

console.log('Hola');
