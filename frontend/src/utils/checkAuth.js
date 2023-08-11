import { redirect } from 'react-router-dom';

export default function checkAuth() {
  const isLoggedIn = !!localStorage.getItem('userInfo');
  if (!isLoggedIn) {
    return redirect('/sing-in');
  }
  return null;
}
