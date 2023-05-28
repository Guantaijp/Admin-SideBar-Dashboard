import { useEffect, useState } from "react";
import { Avatar,Table } from "antd";
import { getCustomers,  } from "../API";


const Customers = () => {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        setLoading(true);
        getCustomers().then((res) => {
            setDataSource(res.users);
            setLoading(false);
        });
    }, []);

    return (
        <div className="flex flex-col justify-center ">
            < h1 className="text-xl mt-8 font-bold">Customers</h1>
            <Table
                loading={loading}
                columns={[
                    {
                        title: "Photo",
                        dataIndex: "image",
                        render: (link) => {
                            return <Avatar src={link} />;
                        },
                    },
                    {
                        title: "First Name",
                        dataIndex: "firstName",
                    },
                    {
                        title: "LastName",
                        dataIndex: "lastName",
                    },
                    {
                        title: "Email",
                        dataIndex: "email",
                    },
                    {
                        title: "Phone",
                        dataIndex: "phone",
                    },

                    {
                        title: "address",
                        dataIndex: "address",
                        render: (address) => {
                            return (
                                <span>
                                    {address.address}, {address.city}
                                </span>
                            );
                        },
                    },
                ]}
                dataSource={dataSource}
                pagination={{
                    pageSize: 8,
                }}
            ></Table>
    </div>
    );
}

export default Customers;