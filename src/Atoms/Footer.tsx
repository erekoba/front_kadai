import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"
import { isPropertySignature } from "typescript"

const Footer = (props: any) => {
    
    const footer: React.CSSProperties = {
        borderTop:"solid #888888",
        borderColor: "#888888",
        display: "flex",
        marginLeft: 30,
        marginRight: 30,
    }
    
    return (
        <div style={footer}><h3>{props.children}</h3></div>
    )
}

export default Footer