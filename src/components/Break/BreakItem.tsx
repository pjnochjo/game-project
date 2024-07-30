import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import jam from "../../asset/game-dap-hu/1.png";
import jamBreak from "../../asset/game-dap-hu/2.png";
import { BreakModel } from "../../model/BreakItem";

interface BreakItemProps {
    breakModel: BreakModel;
    setCount: Dispatch<SetStateAction<number>>;
    count: number;
    time: number;
}

export const BreakItem: React.FC<BreakItemProps> = ({
    breakModel,
    setCount,
    count,
    time
}) => {
    const [hidden, setIsHidden] = useState<boolean>(false);
    const [img, setImg] = useState<any>(jam);
    function sleep(ms: any) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const handleOnBreak = async (item: BreakModel) => {
        setCount(pre => pre = pre + 1);
        setIsHidden(true);
        await sleep(200);
        setImg(jamBreak);
        await sleep(500);
        setImg(breakModel.src);
    }
    
    return <>
        <img src={img} onClick={() => {
            if (count < time && hidden == false) {
                handleOnBreak(breakModel)
            }
        }} style={{ width: "8vw", height: "10vh" }} className={`${img !== breakModel.src ? "btn-game":""} `} />
    </>

}
export default BreakItem;
