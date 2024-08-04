import React, { Dispatch, SetStateAction} from "react";
import mainBg from "../asset/mainBg.png";
import btnBreak from "../asset/btn_break.png";
import btnBrick from "../asset/btn_brick.png";
import { ACTION_BREAK, ACTION_BRICK } from "../const/state.constant";
import xskt from "../asset/sound/SXKT.mp3";
interface MainProps {
    setAction: Dispatch<SetStateAction<string>>;
    isPlaying: boolean
    setIsPlaying:Dispatch<SetStateAction<boolean>>;
}
export const Main: React.FC<MainProps> = ({
    setAction,
    isPlaying,
    setIsPlaying
}) => {
    const audio = new Audio(xskt);
    audio.loop = true;
    return <div style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: "contain",
        backgroundImage: `url(${mainBg})`,
        backgroundPosition: "center center",
        width: "100vw",
        height: "100vh",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: "green"
    }}>
        
            <img className="btn-game"
                style={{
                    width: "40%",
                    marginRight: "5vh",
                    marginBottom: "11vh",
                }}
                alt={""}
                onClick={() => { 
                    setAction(ACTION_BREAK) 
                    if(isPlaying ){
                        // audio.play();
                        setIsPlaying(false);
                    }
                }}
                src={btnBreak}
            />
            <img className="btn-game"
                style={{
                    width: "40%",
                    marginBottom: "11vh",

                }}
                alt={""}
                onClick={() => { 
                    setAction(ACTION_BRICK)
                    if(isPlaying ){
                        // audio.play();
                        setIsPlaying(false);
                    }
                }}
                src={btnBrick}
            />
    </div>
}

export default Main;