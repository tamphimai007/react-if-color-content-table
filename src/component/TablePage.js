import React from 'react'
import { Table, Badge, Alert } from 'reactstrap';


const data = [
    { id: 1, name: "2021", status: "NMC", type: "BELL" },
    { id: 2, name: "2022", status: "FMC", type: "BELL" },
    { id: 3, name: "2023", status: "PMC", type: "BELL" },
    { id: 4, name: "2024", status: "NMC", type: "BELL" },
    { id: 5, name: "2025", status: "NMC", type: "BELL" },
    { id: 6, name: "2026", status: "FMC", type: "BELL" },
    { id: 7, name: "2027", status: "NMC", type: "BELL" },
    { id: 8, name: "2028", status: "PMC", type: "BELL" },
    { id: 9, name: "2029", status: "NMC", type: "BELL" },
]

const TablePage = () => {
    return (
        <div>
            <h1>table</h1>
            <Table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>status</th>
                        <th>type</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item =>
                        <tr>
                            <th>{item.id}</th>
                            <th>{item.name}</th>
                            {item.status == "NMC"
                                ? <th><Alert color="primary">{item.status}</Alert ></th>
                                : item.status == "PMC"
                                    ? <th><Alert color="success">{item.status}</Alert ></th>
                                    : <th><Alert color="danger">{item.status}</Alert ></th>
                            }
                            <th>{item.type}</th>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default TablePage
