import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import SideMenu from './SideMenu'
import TopHeader from './Topheader'
import Home from './home/Home'
import UserList from './user-manage/UserList'
import RoleList from './right-manage/RoleList'
import RightList from './right-manage/RightList'
import Nopermission from './Nopermission/Nopermission'

export default function NewsSandBox() {
  return (
    <>
      <SideMenu></SideMenu>
      <TopHeader></TopHeader>

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/user-manager/list" component={UserList} />
        <Route path="/role-manager/role/list" component={RoleList} />
        <Route path="/right-manager/right/list" component={RightList} />
        <Redirect exact from="/" to="home" />
        <Route path="*" component={Nopermission} />
      </Switch>
    </>
  )
}