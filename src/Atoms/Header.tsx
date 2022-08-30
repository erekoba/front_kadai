import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"

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

export default Header