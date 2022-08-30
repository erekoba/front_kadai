import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"

export const SBSContainer = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {

    const ContainerStyle = {
        display: "flex",
        alignItems: "center",
        marginBottom: "8px",
        justifyContent:"center"
    }
    return (
        <div style={ContainerStyle}>{ props.children}</div>
    );
};

export const VContainer = (props:any) => {

    const ContainerStyle = {

        
        width:"100%",
    }

    return (
        <div style={ContainerStyle}>{ props.children}</div>
    );
};
