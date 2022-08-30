import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"

const Title = (props: { text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
    
    const style = {
        color: "FF8500",
        fontSize: "large",
        fontWeight:"bold"
    }
    
    return (
        <a style={style}>{props.text}</a>
    )
}

export default Title