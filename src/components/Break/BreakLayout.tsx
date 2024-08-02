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
import jam from "../../asset/game-dap-hu/1.png";
import jamBreak from "../../asset/game-dap-hu/2.png";
import {
    ReloadOutlined,
} from '@ant-design/icons';

interface BreakLayoutProps {
    setAction: Dispatch<SetStateAction<string>>;
}
export const BreakLayout: React.FC<BreakLayoutProps> = ({
    setAction
}) => {
    const [items, setItems] = useState<BreakModel[]>();
    const [selectedJam, setSelectedJam] = useState<BreakModel>();
    const [reload, setReload] = useState<boolean>(false);
    const [img, setImg] = useState<any>(jam);
    function sleep(ms: any) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        if (selectedJam) {
            const run = async () => {
                await sleep(1000);
                setImg(jamBreak);
                await sleep(1000);
                setImg(selectedJam.src);
            }
            run();
        }
    }, [selectedJam])
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
    }, [reload])

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
            backgroundColor: "green"
        }}>

            <div style={{
                margin: "20vh auto  5vh auto",
                width: "80%",
                height: "500px",
                backgroundRepeat: 'no-repeat',
                backgroundSize: "contain",
                backgroundImage: `url(${LabelBreak})`,
                backgroundPosition: "center center",
                // visibility: "visible",
                // animationDuration: "2s",
                // animationDelay: "300ms",
                // animationIterationCount: "infinite",
                // animationName: "tada",
            }} className={!selectedJam ? "action-break" : undefined}>
            </div>
            <div style={{ position: "absolute", top: window.screen.availHeight / 50, right: 10 }}>
                <ReloadOutlined onClick={() => {
                    setItems(undefined);
                    setSelectedJam(undefined)
                    setImg(jam);
                    setReload(pre => !pre);
                }} className="btn-action-back" />
                <button onClick={() => {
                    setAction("");
                    setSelectedJam(undefined);
                    setImg(jam);
                }} style={{
                }} className="btn-action-back">Quay Lại</button>
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
                {
                    selectedJam && <img style={{
                        width: "75%",
                        height: "30vh",
                        visibility: "visible",
                        animationDuration: "2s",
                        animationDelay: "300ms",
                        animationIterationCount: "infinite",
                        animationName: "tada",
                    }} src={img} />
                }
                {
                    !selectedJam && <>
                        {
                            items && <>
                                <Break setSelectedJam={setSelectedJam} breakModels={items.slice(0, 3)} />
                                <Break setSelectedJam={setSelectedJam} breakModels={items.slice(3, 6)} />
                                <Break setSelectedJam={setSelectedJam} breakModels={items.slice(6, 9)} />
                            </>
                        }
                    </>
                }
            </div>
        </div>
    </>
}
export default BreakLayout;