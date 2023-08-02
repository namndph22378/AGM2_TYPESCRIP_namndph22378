import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './componets/user'
import Home from './pages/user/home'
import Products_detail from './pages/user/detail'
import Login from './pages/user/login'
import Signup from './pages/user/signin'
import Dashbroad from './pages/admin/dashbroad'
import Add from './pages/admin/add'
import ProductUpdate from './pages/admin/update'
import AdminLayout from './componets/adminlayout'
import AdminLayoutADD from './componets/adminlayoutAdd'
import ProductDetail from './pages/user/detail'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path='product/:id' element={<Products_detail />}/>
      </Route>
      <Route path='/admin' element={<AdminLayout />}>
      <Route index element={<Dashbroad/>} />
      <Route path='product/:id' element={<ProductUpdate/>}/>

      </Route>

      <Route path='/admin/product/add' element={<AdminLayoutADD />}>
      <Route index element={<Add/>} />
      </Route>

      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
    </Routes>
  </BrowserRouter>
}

export default App