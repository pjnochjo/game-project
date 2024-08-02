import React, { Dispatch, SetStateAction } from "react";
import jam from "../../asset/game-dap-hu/1.png";
import soundBreak from "../../asset/sound/breakjam.mp3";
import { BreakModel } from "../../model/BreakItem";
interface BreakItemProps {
    breakModel: BreakModel;
    setSelectedJam: Dispatch<SetStateAction<BreakModel| undefined>>;

}

export const BreakItem: React.FC<BreakItemProps> = ({
    breakModel,
    setSelectedJam
}) => {
    const audio = new Audio(soundBreak);
    const handleOnBreak = async () => {
        setSelectedJam(breakModel);
    }
    return <>
        <img src={jam} onClick={() => {
            audio.play();
            handleOnBreak()
        }} style={{ width: "25%", height: "10vh" }} className={`btn-game`} />
    </>

}
export default BreakItem;
