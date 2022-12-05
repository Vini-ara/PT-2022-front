import { api } from '../services/api/api';
import { useEffect, useState } from 'react';
import TableEdit from '../components/TableEdit';

export default function Questionario() {
  const [pdi, setPdi] = useState([]);
  useEffect(() => {
    api.get('/question').then((response) => {
      const { data } = response;
      setPdi(data);
    });
  }, []);
  return (
    <div className="w-1/2 mx-auto">
      <TableEdit data={pdi} />
    </div>
  );
}
