import {HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from '../MenuTodo/Menu';
import { HomePage } from '../Routes/HomePage';
import { BlogPage } from '../Routes/BlogPage';
import { BlogPost } from '../Routes/BlogPost';
import { ProfilePage } from '../Routes/ProfilePage';
import { AuthProvider } from '../Auth/auth';
import { LoginPage } from '../Auth/login';
import { LogoutPage } from '../Auth/logout';
import { Todos } from '../Routes/Todo';

function App() {

    return (
      <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
              <Route path='/' element={ <HomePage/> } />

              <Route path='/blog' element={ <BlogPage/> } >
                <Route path='/blog/:slug' element={ <BlogPost/> } />
              </Route>
              <Route path='/todos' element={<Todos/>}/>
              
              <Route path='/login' element={ <LoginPage/> } />
              <Route path='/logout' element={ <LogoutPage/> } />
              <Route path='/profile' element={ <ProfilePage/> } />
              <Route path='*' element={ <p>No Found </p> } />
          </Routes>
        </AuthProvider>
      </HashRouter>

          </>
    )

}

export default App;