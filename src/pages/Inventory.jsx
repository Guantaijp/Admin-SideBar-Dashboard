import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../API";


const Inventory = () => {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        setLoading(true);
        getInventory().then((res) => {
            setDataSource(res.products);
            setLoading(false);
        });
    }, []);

    return (
        <div className="flex flex-col justify-center ">
            < h1 className="text-xl mt-8 font-bold">Inventory</h1>
            <Table
                loading={loading}
                columns={[
                    {
                        title: "Thumbnail",
                        dataIndex: "thumbnail",
                        render: (link) => {
                            return <Avatar src={link} />;
                        },
                    },
                    {
                        title: "Title",
                        dataIndex: "title",
                    },
                    {
                        title: "Price",
                        dataIndex: "price",
                        render: (value) => <span>${value}</span>,
                    },
                    {
                        title: "Rating",
                        dataIndex: "rating",
                        render: (rating) => {
                            return <Rate value={rating} allowHalf disabled />;
                        },
                    },
                    {
                        title: "Stock",
                        dataIndex: "stock",
                    },

                    {
                        title: "Brand",
                        dataIndex: "brand",
                    },
                    {
                        title: "Category",
                        dataIndex: "category",
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
export default Inventory;
