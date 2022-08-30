import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"

export const Main = (props: { children: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined }) => {
    const main: React.CSSProperties = {
        marginLeft: 30,
        marginRight: 30,
        whiteSpace: "pre-wrap"
    }    
    return (
        <div style={main}><h5>{ props.children}</h5></div>
    )
}

export const Header = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
    const style:React.CSSProperties = {
        borderBottom:"solid #888888",
        borderColor: "#888888",
        color:"#FF8500",
        textAlign: "center",
        marginLeft: 30,
        marginRight: 30,
    }
    
    return (
        <div style={style}>
            <h3>{props.children}</h3>
        </div>
    )
}

export const Footer = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
    
    const footer: React.CSSProperties = {
        borderTop:"solid #888888",
        borderColor: "#888888",
        display: "flex",
        color:"#FF8500",
        marginLeft: 30,
        marginRight: 30,
    }
    
    return (
        <div style={footer}><h3>{props.children}</h3></div>
    )
}




