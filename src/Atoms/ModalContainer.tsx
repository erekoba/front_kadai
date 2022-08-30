import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"

const ModalContainer = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {

    const modalContent: React.CSSProperties = {
        background: "white",
        padding: "10px",
        borderRadius: "3px",
        zIndex: 1,
        width: "75%",
        position: "relative",
        inset: 0,
        margin: "auto",
    };

    return (
        <div style={modalContent}>{ props.children}</div>
    );
};

export default ModalContainer;