import React, { useEffect, useState } from "react";
import { Product } from "../model/product";
import { GetConfigure } from "../api/GetConfigure";
import { Button, Form, FormProps, Input, notification } from "antd";


export const Configuration: React.FC = () => {
    const [api, contextHolder] = notification.useNotification();
    const [products, setProducts] = useState<Product[]>([]);
    const [edit, setEdit] = useState<boolean>(false);
    const openNotification = () => {
        api.success({
            message: 'Cài Đặt Cấu Hình thành công !',
            duration: 2
        });
    };
    const onFinish: FormProps['onFinish'] = (values: any) => {
        const newProduct: Product[] = products.map(s => {
            return {
                id: s.id,
                name: s.name,
                weight: values[s.id]
            } as Product;
        })
        console.log(newProduct);
        openNotification();
        setEdit(false);
    }
    useEffect(() => {
        const initial = async () => {
            const data = await GetConfigure();
            setProducts(data);
        }
        initial();
    }, [])
    return <>
        <h3>Cấu Hình Tỷ Lệ</h3>
        {contextHolder}
        <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
        >
            {products.map(s => {
                return <Form.Item
                    label={s.name}
                    name={s.id}
                    rules={[{ required: true, message: 'Only number' }]}
                    initialValue={s.weight}
                >
                    <Input type="number" min={0} onChange={() => setEdit(true)} />
                </Form.Item>
            })}

            <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
                <Button type="primary" htmlType="submit" disabled={!edit} style={{ float: "right" }}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </>
}
export default Configuration