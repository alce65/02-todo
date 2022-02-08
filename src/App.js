import './app.css';
import { Header } from './components/core/header';
import { Footer } from './components/core/footer';
import { ToDo } from './components/todo/todo';
import { About } from './components/about/about';

export function App() {
    const title = 'TODO List';
    const author = title ? 'Alejandro' : '';
    const brand = 'ISDI Coders';
    return (
        <div className="app">
            <Header mainTitle={title}>Esta es mi aplicación en React</Header>
            <main className="app-main">
                <ToDo></ToDo>
                <About></About>
            </main>

            <Footer author={author.toUpperCase()} brand={brand}></Footer>
        </div>
    );
}
