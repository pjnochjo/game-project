import React, { Dispatch, SetStateAction } from "react";
import khung from "../../asset/khung1.png";
import { BreakModel } from "../../model/BreakItem";
import BreakItem from "./BreakItem";



interface BreakProps {
    breakModels: BreakModel[];
    setSelectedJam: Dispatch<SetStateAction<BreakModel | undefined>>;
}
export const Break: React.FC<BreakProps> = ({
    breakModels,
    setSelectedJam
}) => {
    return <>
        <div style={{
            width: "80%",
            margin: "0 auto",
            display: "flex",
            flexDirection: 'row',
            justifyContent: "space-between",
        }}>
            {breakModels.map(s => <BreakItem setSelectedJam={setSelectedJam} breakModel={s}/>)}
        </div>
        <image style={{
            width: "80%",
            height: "5vh",
            backgroundRepeat: 'no-repeat',
            backgroundSize: "contain",
            backgroundImage: `url(${khung})`,
            backgroundPosition: "center center",
            marginTop:"-1vh",
            marginBottom:"3vh"
        }} />
    </>
}
export default Break;