import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"

export const Text = (props: { text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
    
    const style = {
        color: "grey",
        fontSize: "medium",
    }
    
    return (
        <a style={style}>{props.text}</a>
    )
}
export const Title = (props: { text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
    
    const title = {
        color: "FF8500",
        fontSize: "large",
        fontWeight:"bold"
    }
    
    return (
        <a style={title}>{props.text}</a>
    )
}
export const Label = (props: { text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
    
    const style = {       
        fontWeight: "bold",
        width:"140px"
    }
    
    return (
        <a style={style}>{props.text}</a>
    )
}

