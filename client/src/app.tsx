import React from 'react';
import LoginForm from './sections/login/form';
import UserManagement from './sections/user-management';

const App = () => {
  if (document.cookie) return <UserManagement />;
  return <LoginForm />;
};

export default App;
