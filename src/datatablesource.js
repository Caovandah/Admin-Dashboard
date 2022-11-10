export const userColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'user',
        headerName: 'User',
        width: 300,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    { field: 'email', headerName: 'Email', width: 290 },
    {
        field: 'age',
        headerName: 'Age',
        width: 120,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 170,
        renderCell: (params) => {
            return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
        },
    },
];

//temporary data

export const userRows = [
    {
        id: 1,
        username: 'Snow',
        img: 'https://i.pravatar.cc/300',
        status: 'active',
        email: '1sow@gmail.com',
        age: 35,
    },
    {
        id: 2,
        username: 'Jaime Lannister',
        img: 'https://i.pravatar.cc/300',
        status: 'passive',
        email: '2sow@gmail.com',
        age: 35,
    },
    {
        id: 3,
        username: 'Lannister',
        img: 'https://i.pravatar.cc/300',
        status: 'pending',
        email: '3sow@gmail.com',
        age: 45,
    },
    {
        id: 4,
        username: 'Stark',
        img: 'https://i.pravatar.cc/300',
        status: 'active',
        email: '4sow@gmail.com',
        age: 16,
    },
    {
        id: 5,
        username: 'Targaryen',
        img: 'https://i.pravatar.cc/300',
        status: 'passive',
        email: '5sow@gmail.com',
        age: 22,
    },
    {
        id: 6,
        username: 'Melisandre',
        img: 'https://i.pravatar.cc/300',
        status: 'active',
        email: '6sow@gmail.com',
        age: 15,
    },
    {
        id: 7,
        username: 'Clifford',
        img: 'https://i.pravatar.cc/300',
        status: 'passive',
        email: '7sow@gmail.com',
        age: 44,
    },
    {
        id: 8,
        username: 'Frances',
        img: 'https://i.pravatar.cc/300',
        status: 'active',
        email: '8sow@gmail.com',
        age: 36,
    },
    {
        id: 9,
        username: 'Roxie',
        img: 'https://i.pravatar.cc/300',
        status: 'pending',
        email: '9sow@gmail.com',
        age: 65,
    },
    {
        id: 10,
        username: 'Jon',
        img: 'https://i.pravatar.cc/300',
        status: 'pending',
        email: '10sow@gmail.com',
        age: 45,
    },
];
