import { Route, Routes } from 'react-router-dom';
import Home from './component/routes/Home/Home.components';
import Navigation from './component/routes/navigation/navigation.component';
import SignIn from './component/routes/sign-in/sign-in.component';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='signIn' element={<SignIn />} />

      </Route>
    </Routes>
  )
}

export default App;
