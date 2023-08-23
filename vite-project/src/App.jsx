import React, { useState } from 'react'
import Admin from './Admin'
import User from './User'
import Guest from './Guest'

const ComponentsByRoles = {
  'admin' : Admin,
  'user' : User,
  'guest' : Guest
}

const getUserRole = (params) => ComponentsByRoles[params] || ComponentsByRoles['guest']

export default function App() {
  const [role,setRole] = useState('admin')
  const CurrentUser = getUserRole(role)
  return <CurrentUser/>
}
