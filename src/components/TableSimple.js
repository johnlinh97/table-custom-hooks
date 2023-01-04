import Table from 'react-bootstrap/Table';

export default function TableSimple({ tableHead, data, renderBody }) {
    return (

        <Table striped>
            <thead>
                <tr>
                    {tableHead.map((head) => {
                        return (
                            <th key={head.label}>{head.label}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map(value => renderBody(value))}
            </tbody>
        </Table>
    )
}