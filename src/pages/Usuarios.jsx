import { api } from '../services/api/api';
import { useEffect, useState } from 'react';
import Table from '../components/Table';

export default function Usuarios() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
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
