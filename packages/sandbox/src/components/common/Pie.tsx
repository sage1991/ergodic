import React, { FC, useEffect, useRef } from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";




interface PieInfos {
    title: string;
    color: string;
    x: number;
    y: number;
}

interface PieProps {
    infos: PieInfos[],
    isTranslate?: boolean;

}

const Pie: FC<PieProps> = (props) => {
    const { infos, isTranslate } = props;
    const canvasRef = useRef<HTMLCanvasElement>(null)
    useEffect(() => {
        draw()
    })
    const classes = useStyle();

    const draw = () => {
        const ctxDiv = canvasRef.current
        const ctxCanvas = ctxDiv?.getContext("2d")!
        const ctxCanvas_width = ctxDiv?.width
        const ctxCanvas_height = ctxDiv?.height
        let angle = (2 * Math.PI) / infos.length;
        const center_x = ctxCanvas_width? ctxCanvas_width / 2 : 0;
        const center_y = ctxCanvas_height? ctxCanvas_height / 2 : 0;

        console.log(Math.cos(30) * 250 );
        for (let i = 0; i < infos.length; i++) {
            const realAngle = (360 / 10) * i + 17;
            const x = Math.round(230 + Math.cos(realAngle * ( Math.PI / 180)) * 100);
            const y = Math.round(230 + Math.sin(realAngle * ( Math.PI / 180)) * 100);
            ctxCanvas.fillStyle = infos[i].color;
            ctxCanvas.beginPath();
            ctxCanvas.moveTo(center_x, center_y);
            ctxCanvas.arc(center_x, center_y, 250, angle * i, angle * (i + 1), false);
            ctxCanvas.lineTo(center_x, center_y);
            ctxCanvas.fill();
            ctxCanvas.textAlign = "center";
            ctxCanvas.fillStyle = "black";
            ctxCanvas.font = "16px Arial";
            ctxCanvas.fillText(infos[i].title, x + 20, y + 20, 500);

        }
    }

    return (
        <canvas ref={canvasRef}
                width={500}
                height={500}
                className={clsx(classes.root, isTranslate ? ".pieTranslate" : "")}>
        </canvas>
    )
}

const useStyle = createUseStyles({
    root: {
        display: "block",
        margin: "0 auto"
    }
})



export default Pie;