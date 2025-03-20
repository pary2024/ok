import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MasterLayout from "../layout/MasterLayout";
import Dashboard from "../pages/dasboard/Dasboard";
import Category from "../pages/category/Category";
import List from "../pages/news/List/List";
import Create from "../pages/news/Create/Create";
import Edit from "../pages/news/Edit/Edit";
import UserList from"../pages/User/List/UserList";
import UserCreate from "../pages/User/Create/UserCreate";
import UserEdit from "../pages/User/Edit/UserEdit";
import TypeList from "../pages/type/List/TypeList";
import TypeCreate from "../pages/type/Create/TypeCreate";
import TypeEdit from "../pages/type/Edit/TypeEdit";


const BackRoute = () => {
  return (
    
      <Routes>
        <Route path="/" element = {<MasterLayout/>}>


           <Route index element={<Dashboard />} />
           <Route path="/category" element={<Category />} />

           <Route path="/news/list" element={<List/>}/>
           <Route path="/news/create" element={<Create/>}/>
           <Route path="/news/edit" element={<Edit/>}/>

           <Route path="/user/list" element={<UserList/>}/>
           <Route path="/user/create" element={<UserCreate/>}/>
           <Route path="/user/edit" element={<UserEdit/>}/>


           <Route path="/type/list" element={<TypeList/>}/>
           <Route path="/type/create" element={<TypeCreate/>}/>
           <Route path="/type/edit" element={<TypeEdit/>}/>



        </Route>
      </Routes>
    
  )
};

export default BackRoute;
