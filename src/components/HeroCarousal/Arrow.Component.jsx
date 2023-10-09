import React from "react";

export function NextArrow(props) {
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style }} //we could add aditional styles for the arrows here
                onClick={props.onClick}
            />
        </>
    )
}

export function PrevArrow(props) {
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style }}
                onClick={props.onClick}
            />
        </>
    )
}