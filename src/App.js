import { Route, Routes } from 'react-router-dom';
import Authentication from './component/routes/authentication/authentication.component';
import Home from './component/routes/Home/Home.components';
import Navigation from './component/routes/navigation/navigation.component';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />

      </Route>
    </Routes>
  )
}

export default App;
