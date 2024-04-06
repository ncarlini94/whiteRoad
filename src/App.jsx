import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from './pages';
import PublicLayout from './layouts/PublicLayout';

function App() {

  return (
      <>
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<PublicLayout/>}>
                    <Route index element={<Homepage/>}/>
                </Route>
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
