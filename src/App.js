import Home from './pages/home/Home';
import Login from './pages/login/Login';
import New from './pages/new/New';
import List from './pages/list/List';
import Single from './pages/single/Single';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { productInput, userInput } from './fromSource';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="users">
                            <Route index element={<List />} />
                            <Route path=":usersId" element={<Single />} />
                            <Route path="new" element={<New inputs={userInput} title="Add New User" />} />
                        </Route>
                        <Route path="products">
                            <Route index element={<List />} />
                            <Route path=":productsId" element={<Single />} />
                            <Route path="new" element={<New inputs={productInput} title="Add New Product" />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
