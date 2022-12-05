import { api } from '../services/api/api';
import { useEffect, useState } from 'react';
import TableEdit from '../components/TableEdit';
import { store } from '../services/api/localStorage';

export default function Questionario() {
  const [pdi, setPdi] = useState([]);

  const { getToken, isExpired} = store;
  
  useEffect(() => {
    if(getToken() && !isExpired()) {
      api.defaults.headers.common['Authorization'] = 'Bearer ' + getToken();
    }
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
