import React, { Dispatch, SetStateAction } from "react";
import khung from "../../asset/khung1.png";
import { BreakModel } from "../../model/BreakItem";
import BreakItem from "./BreakItem";



interface BreakProps {
    time: number;
    breakModels: BreakModel[];
    count: number
    setCount: Dispatch<SetStateAction<number>>;
}
export const Break: React.FC<BreakProps> = ({
    time,
    breakModels,
    count,
    setCount
}) => {
    return <>
        <div style={{
            width: "35%",
            margin: "0 auto",
            display: "flex",
            flexDirection: 'row',
            justifyContent: "space-between",
        }}>
            {breakModels.map(s => <BreakItem breakModel={s} setCount={setCount} count={count} time={time} />)}
        </div>
        <image style={{
            width: "35%",
            height: "5vh",
            backgroundRepeat: 'no-repeat',
            backgroundSize: "contain",
            backgroundImage: `url(${khung})`,
            backgroundPosition: "center center",
            marginTop:"-1vh",
            marginBottom:"3vh"
        }} onClick={()=>{

        }} />
    </>
}
export default Break;