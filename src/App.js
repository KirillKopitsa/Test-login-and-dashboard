import LoginPage from './pages/Login';
import {Redirect, Route, Switch} from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path={'/'}>
                    <LoginPage/>
                </Route>
                <Route exact path={'/menu'}>
                    <Redirect  to={'/menu/home'} />
                </Route>
                <Route path={'/menu/:section'}>
                    <Dashboard/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
