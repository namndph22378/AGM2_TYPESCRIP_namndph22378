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
import Dashbroad_cate from './pages/admin_cate/dashbroad'
import AddCategoryForm from './pages/admin_cate/add_cate'
import CategoryUpdate from './pages/admin_cate/update'
import Dashbroad_user from './pages/admin_user/dashbroad'
import AddUserFrom from './pages/admin_user/add_user'
import UserUpdate from './pages/admin_user/update'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path='product/:id' element={<Products_detail />} />
      </Route>
      <Route path='/admin' element={<AdminLayout />}>
        <Route index element={<Dashbroad />} />
        <Route path='category'  element={<Dashbroad_cate />}/>
        <Route path='user'  element={<Dashbroad_user />}/>

        <Route path='product/:id' element={<ProductUpdate />} />
        <Route path='categorys/:id' element={<CategoryUpdate />} />
        <Route path='users/:id' element={<UserUpdate />} />

      </Route>
      <Route path='/admin/categorys/add'  element={<AddCategoryForm />}/>
      <Route path='/admin/users/add'  element={<AddUserFrom />}/>
      
      <Route path='/admin/product/add' element={<AdminLayoutADD />}>
        <Route index element={<Add />} />
      </Route>

      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
    </Routes>
  </BrowserRouter>
}

export default App