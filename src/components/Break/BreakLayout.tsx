import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import BreakBg from "../../asset/bg.png";
import LabelBreak from "../../asset/label_break.png";
import Break from "./Break";

import { BreakModel } from "../../model/BreakItem";
import { GetConfigure } from "../../api/GetConfigure";
import { Product } from "../../model/product";
import qua1 from "../../asset/price/hop_tra.png";
import qua2 from "../../asset/price/li.png";
import qua3 from "../../asset/price/Voucher.png";
import qua4 from "../../asset/price/nhan.png";
import qua5 from "../../asset/price/ro.png";
import qua6 from "../../asset/price/tui.png";
import WeightedRandom from "../function/WeightedRandom";


interface BreakLayoutProps {
    time: number;
    setAction: Dispatch<SetStateAction<string>>;
}
export const BreakLayout: React.FC<BreakLayoutProps> = ({
    time,
    setAction
}) => {
    const [count, setCount] = useState<number>(0);
    const [items, setItems] = useState<BreakModel[]>();
    useEffect(() => {
        const initial = async () => {
            const listProduct: Product[] = await GetConfigure();
            const listRandomPrice: Product[] = []
            for (let i = 0; i < 9; i++) {
                const result = WeightedRandom(listProduct);
                listRandomPrice.push(result?.item);
            }
            const listItem = listRandomPrice.map(p => {
                let src = "";
                if (p.id === "qua1") {
                    src = qua1;
                } else if (p.id === "qua2") {
                    src = qua2
                } else if (p.id === "qua3") {
                    src = qua3
                } else if (p.id === "qua4") {
                    src = qua4
                } else if (p.id === "qua5") {
                    src = qua5
                } else if (p.id === "qua6") {
                    src = qua6
                }
                return {
                    src: src,
                    value: p.name
                } as BreakModel
            })
            setItems(listItem);
        };
        initial();
    }, [])

    return <>
        <div style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: "contain",
            backgroundImage: `url(${BreakBg})`,
            backgroundPosition: "center center",
            width: "100%",
            height: "100vh",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        }}>

            <div style={{
                margin: "20vh auto  5vh auto",
                width: "80%",
                height: "500px",
                backgroundRepeat: 'no-repeat',
                backgroundSize: "contain",
                backgroundImage: `url(${LabelBreak})`,
                backgroundPosition: "center center",
                visibility: "visible",
                animationDuration: "2s",
                animationDelay: "300ms",
                animationIterationCount: "infinite",
                animationName: "tada",
            }}>
            </div>
            <div style={{ position: "absolute", top: 10, right: 10 }}>
                <button onClick={() => { setAction("") }} style={{
                }} className="btn-action-back">Quay Lai</button>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: "column",
                margin: "0 auto",
                width: '80%',
                height: "70vh",
                alignItems: "center",
                justifyContent: "center"
            }}>
                {items && <>
                    <Break time={3} count={count} setCount={setCount} breakModels={items.slice(0, 3)} />
                    <Break time={3} count={count} setCount={setCount} breakModels={items.slice(3, 6)} />
                    <Break time={3} count={count} setCount={setCount} breakModels={items.slice(6, 9)} />
                </>}

            </div>
        </div>
    </>
}
export default BreakLayout;