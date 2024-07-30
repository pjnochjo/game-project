import React, { Dispatch, SetStateAction, useRef } from "react";

interface BrickItemProps {
    src: any;
    setFormPic: Dispatch<SetStateAction<string[]>>;
    setToPic: Dispatch<SetStateAction<string[]>>;

}
export const BrickItem: React.FC<BrickItemProps> = ({
    src,
    setFormPic,
    setToPic
}) => {
    return <div style={{
        marginLeft: "10px",
        visibility: "visible",
        animationDuration: "2s",
        animationDelay: "300ms",
        animationIterationCount: "infinite",
        animationName: "pulse",
        cursor: "pointer"
    }}
        onClick={() => {
            setFormPic(pre => pre.filter(s => s != src));
            setToPic(pre => {
                const newPre = [...pre];
                for(let i = 0; i < 6; i++ ){
                    if(newPre[i]=== ""){
                        newPre[i] = src;
                        break;
                    }
                }
                return newPre;
            });
        }}
    >
        <img src={src} style={{ width: "8vh", height: "8vh", pointerEvents: "none" }} />
    </div>
}