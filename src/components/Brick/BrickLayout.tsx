import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import bg from "../../asset/bg.png"
import LabelBrick from "../../asset/label_brick.png";
import manh1 from "../../asset/game-xep-hinh/part1.png";
import manh2 from "../../asset/game-xep-hinh/part2.png";
import manh3 from "../../asset/game-xep-hinh/part3.png";
import manh4 from "../../asset/game-xep-hinh/part4.png";
import manh5 from "../../asset/game-xep-hinh/part5.png";
import manh6 from "../../asset/game-xep-hinh/part6.png";
import logo from "../../asset/logo.jpg";
import { BrickItem } from "./BrickItem";
import Puzzle from "./Puzzle";
interface BrickLayoutProps {
    setAction: Dispatch<SetStateAction<string>>;
}


export const BrickLayout: React.FC<BrickLayoutProps> = ({
    setAction
}) => {
    const [fromPic, setFormPic] = useState<string[]>([manh4, manh1, manh5, manh3, manh2, manh6]);
    const [toPic, setToPic] = useState<string[]>(["", "", "", "", "", ""]);
    useEffect(() => {
        console.log(toPic);
    }, [toPic]);
    return <>
        <div style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: "contain",
            backgroundImage: `url(${bg})`,
            backgroundPosition: "center center",
            width: "100%",
            height: "100vh",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden"
        }}>
            <div style={{ position: "absolute", top: 10, right: 10 }}>
                <button onClick={() => { setAction("") }} style={{
                }} className="btn-action-back">Quay Lai</button>
            </div>

            <div style={{
                margin: "0 auto  5vh auto",
                width: "85%",
                height: "180px",
                backgroundRepeat: 'no-repeat',
                backgroundSize: "contain",
                backgroundImage: `url(${LabelBrick})`,
                backgroundPosition: "center center",
                // visibility: "visible",
                // animationDuration: "2s",
                // animationDelay: "300ms",
                // animationIterationCount: "infinite",
                // animationName: "tada",
            }}>
            </div>
            <div style={{ display: 'flex', margin: "0 auto", }}>
                {fromPic.map(s => <BrickItem src={s} setFormPic={setFormPic} setToPic={setToPic} />)}
                {fromPic.length === 0 && <div style={{ width: "8vh", height: "8vh" }}>
                </div>}
            </div>
            <div style={{
                margin: "2vh auto 1vh auto",
                width: "85%",
                height: "200px",
                display: 'flex',
                alignItems: "center"
            }}>

                {
                    toPic[0] === manh1
                        && toPic[1] === manh2
                        && toPic[2] === manh3
                        && toPic[3] === manh4
                        && toPic[4] === manh5
                        && toPic[5] === manh6
                        ?
                        <div style={{ margin: "0 auto" }}>
                            <img src={logo} style={{ width: "16vw", height: "16vh", pointerEvents: "none" }} />
                        </div>
                        : <table style={{ margin: "0 auto", borderSpacing: 0 }} >
                            <tr>
                                <td>
                                    {
                                        toPic[0] != "" ? <Puzzle src={toPic[0]} setFormPic={setFormPic} setToPic={setToPic} />
                                            : <div style={{ width: "8vh", height: "8vh", pointerEvents: "none" }} />
                                    }
                                </td>
                                <td>
                                    {
                                        toPic[1] != "" ? <Puzzle src={toPic[1]} setFormPic={setFormPic} setToPic={setToPic} />
                                            : <div style={{ width: "8vh", height: "8vh", pointerEvents: "none" }} />
                                    }
                                </td>
                                <td>
                                    {
                                        toPic[2] != "" ? <Puzzle src={toPic[2]} setFormPic={setFormPic} setToPic={setToPic} />
                                            : <div style={{ width: "8vh", height: "8vh", pointerEvents: "none" }} />
                                    }
                                </td>
                            </tr>
                            <tr style={{ marginTop: "-2px" }}>
                                <td >
                                    {
                                        toPic[3] != "" ? <Puzzle src={toPic[3]} setFormPic={setFormPic} setToPic={setToPic} />
                                            : <div style={{ width: "8vh", height: "8vh", pointerEvents: "none" }} />
                                    }
                                </td>
                                <td >
                                    {
                                        toPic[4] != "" ? <Puzzle src={toPic[4]} setFormPic={setFormPic} setToPic={setToPic} />
                                            : <div style={{ width: "8vh", height: "8vh", pointerEvents: "none" }} />
                                    }
                                </td>
                                <td >
                                    {
                                        toPic[5] != "" ? <Puzzle src={toPic[5]} setFormPic={setFormPic} setToPic={setToPic} />
                                            : <div style={{ width: "8vh", height: "8vh", pointerEvents: "none" }} />
                                    }
                                </td>
                            </tr>
                        </table>
                }

            </div>


        </div >
    </>
}
export default BrickLayout;