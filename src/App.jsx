import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContactPage, Homepage, ServicePage } from './pages';
import PublicLayout from './layouts/PublicLayout';

function App() {

  return (
      <>
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<PublicLayout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path='/Servicio' element={<ServicePage/>}/>
                    <Route path='/Contacto' element={<ContactPage/>}/>
                </Route>
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
