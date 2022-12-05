import Checkboxes from './Checkbox';
import TableRow from '@mui/material/TableRow';

function Tabela({ data }) {
  return (
    <body className="p-10">
      <div className="bg-white shadow rounded-md">
        <div>
          <table className="w-full divide-y divide-gray-200 table table-striped">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs  text-grady-500 tracking-wider ">
                  Membros
                </th>
                <th className="pl-10 py-3 text-center text-xs  text-grady-500 tracking-wider ">
                  Data de modificação
                </th>
                <th className="px-5 py-3 text-left text-xs  text-grady-500 tracking-wider ">
                  Admin
                </th>
                <th className="px-6 py-3 text-left text-xs text-grady-500 tracking-wider ">
                  Arquivado
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <TableRow key={user.id}>
                  <td className="px-6 py-1 text-left text-xs  text-grady-500 tracking-wider">
                    {user.name}
                  </td>
                  <td className="pl-10 py-1 text-center text-xs  text-grady-500 tracking-wider">
                    {new Date(user.pdi_updated_at).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-5 py-1 ">
                    <Checkboxes checked={user.is_admin} />
                  </td>
                  <td className="px-8 py-1">
                    <Checkboxes checked={user.archived} />
                  </td>
                </TableRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </body>
  );
}

export default Tabela;
