
import TableSimple from "./TableSimple"
import useLeaderTable from "../hooks/useLeaderTable"

const tableHead = [
    {
        label: 'User Id'
    },
    {
        label: 'ID'
    },
    {
        label: 'Title'
    }
]

export default function Todos() {
    const {data} = useLeaderTable('https://jsonplaceholder.typicode.com/todos?_limit=5')

    return (
        <div>
            <h2>Todos</h2>
            <TableSimple
                tableHead={tableHead}
                data={data}
                renderBody={value=>{
                    return(
                        <tr>
                            <td>{value.userId}</td>
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                        </tr>
                    )
                }}
            />
        </div>
    )
}