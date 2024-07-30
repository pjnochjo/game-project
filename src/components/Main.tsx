import React, { Dispatch, SetStateAction } from "react";
import mainBg from "../asset/mainBg.png";
import btnBreak from "../asset/btn_break.png";
import btnBrick from "../asset/btn_brick.png";
import { ACTION_BREAK, ACTION_BRICK } from "../const/state.constant";

interface MainProps {
    setAction: Dispatch<SetStateAction<string>>;
}
export const Main: React.FC<MainProps> = ({
    setAction
}) => {
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
        alignItems: "flex-end"
    }}>
            <img className="btn-game"
                style={{
                    width: "15vh",
                    marginRight: "10vh",
                    marginBottom: "5vh",
                }}
                onClick={() => { setAction(ACTION_BREAK) }}
                src={btnBreak}
            />
            <img className="btn-game"
                style={{
                    width: "15vh",
                    marginBottom: "5vh",

                }}
                onClick={() => { setAction(ACTION_BRICK) }}
                src={btnBrick}
            />
    </div>
}

export default Main;