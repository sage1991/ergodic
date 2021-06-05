import React, { FC, useEffect, useRef } from "react";
import { createUseStyles } from "react-jss";




interface PieInfos {
    title: string;
    color: string;
    x: number;
    y: number;
}

interface PieProps {
    infos: PieInfos[]
}

const Pie: FC<PieProps> = (props) => {
    const { infos } = props;
    const canvasRef = useRef<HTMLCanvasElement>(null)
    useEffect(() => {
        draw()
    })

    const draw = () => {
        console.log(infos);
        const ctxDiv = canvasRef.current
        const ctxCanvas = ctxDiv?.getContext("2d")!
        const ctxCanvas_width = ctxDiv?.width
        const ctxCanvas_height = ctxDiv?.height
        let angle = (2 * Math.PI) / infos.length;
        const center_x = ctxCanvas_width? ctxCanvas_width / 2 : 0;
        const center_y = ctxCanvas_height? ctxCanvas_height / 2 : 0;

        for (let i = 0; i < infos.length; i++) {
            ctxCanvas.fillStyle = infos[i].color;
            ctxCanvas.beginPath();
            ctxCanvas.moveTo(center_x, center_y);
            ctxCanvas.arc(center_x, center_y, 250, angle * i, angle * (i + 1));
            ctxCanvas.lineTo(center_x, center_y);
            ctxCanvas.fill();
            ctxCanvas.textAlign = "center";
            ctxCanvas.fillStyle = "black";
            console.log(center_x);
            ctxCanvas.fillText(infos[i].title, infos[i].x , infos[i].y);
        }
    }

    return (
        <canvas ref={canvasRef} width={500} height={500}>
        </canvas>
    )
}



export default Pie;