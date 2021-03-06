import 'bootstrap/dist/css/bootstrap.min.css'
import {GlobalStyle} from './components/GlobalStyle/styles'
import store from './store'
import {Provider} from 'react-redux'
import Home from './views/Home';
import Header from './components/Header';

const App = ()=>(
    <>
        <Provider store={store}>
            <GlobalStyle/>
            <Header/>
            <div className="content">
                <Home/>
            </div>
        </Provider>
    </>
)

export default App;
