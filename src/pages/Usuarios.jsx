import { api } from '../services/api/api';
import { useEffect, useState } from 'react';
import Table from '../components/Table';
import { store } from '../services/api/localStorage';

export default function Usuarios() {
  const [users, setUsers] = useState([]);
  
  const { getToken, isExpired } = store;

  useEffect(() => {
    if(getToken() && !isExpired()) {
      api.defaults.headers.common['Authorization'] = 'Bearer ' + getToken();
    }
    api.get('/users').then((response) => {
      const { data } = response;
      setUsers(data);
    });
  }, []);
  return (
    <div className="w-1/2 mx-auto">
      <Table data={users} />
    </div>
  );
}
