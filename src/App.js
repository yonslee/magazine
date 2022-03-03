import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PostList from './pages/PostList';
import Grid from './util/Grid';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
      <Fragment>
        <Grid>

          <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<PostList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </Grid>
      </Fragment>
  );
}

export default App;
