import React, { Dispatch, SetStateAction } from "react";

interface PuzzleProps {
    src: any;
    setFormPic: Dispatch<SetStateAction<string[]>>;
    setToPic: Dispatch<SetStateAction<string[]>>;

}

export const Puzzle: React.FC<PuzzleProps> = ({
    src,
    setFormPic,
    setToPic
}) => {
    return <>
        <div style={{
            cursor: "pointer"
        }}
            onClick={() => {
                setToPic(pre => {
                    const newPre = [...pre];
                    for (let i = 0; i < 6; i++) {
                        if(newPre[i] === src){
                            newPre[i]= "";
                            break;
                        }
                    }
                    return newPre;
                });
                setFormPic(pre => {
                    const newPre = [...pre];
                    newPre.push(src);
                    return newPre;
                });
            }}
        >
            <img src={src} style={{ width: "8vh", height: "8vh", pointerEvents: "none" }} />
        </div>
    </>
}
export default Puzzle;