
import TableSimple from "./TableSimple";
import useLeaderTable from "../hooks/useLeaderTable";

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

export default function Albums() {
    const {data} = useLeaderTable('https://jsonplaceholder.typicode.com/albums?_limit=5')

    return (
        <div>
            <h2>Albums</h2>
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