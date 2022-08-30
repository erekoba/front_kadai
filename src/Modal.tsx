import React from "react";
import ModalContent from "./ModalContent"


const overlay: React.CSSProperties = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };
const modal: React.CSSProperties = {
        animationName: "fadeIn",
        animationDuration: "1s",
        position: "fixed",
        top: 40,
        left: 0,
        width: "100%",
        height: "100%",
    }

const Modal = (props: { Flag: number; selectModal: any; contents: any; closeModal?: any; count:string}) => {
    const {Flag,selectModal,closeModal,contents,count}=props
    
    return (
        <>
            <style>
                { `@keyframes fadeIn {
                0% {
                    opacity:0
                }
                100%{
                    opacity:1
                }
                }`}
            </style>
            {Flag === 1 ? (
                <div style={modal}>
                    <ModalContent
                        selectModal={selectModal}
                        closeModal={closeModal}
                        content={contents[Flag]}
                        count={count}
                    />
                    <div
                    id="overlay"
                        style={overlay}
                        onClick={closeModal}
                    >
                    </div>
                </div>
            ) : Flag === 2 ? (
                <div style={modal}>
                        <ModalContent
                            selectModal={selectModal}
                            closeModal={closeModal}
                            content={contents[Flag]}
                            count={count}
                        />
                    <div
                    id="overlay"
                    style={overlay}
                    onClick={closeModal }
                    >
                    </div>
                </div>
            ) : Flag === 3 ? (
                    <div style={modal}>
                            <ModalContent
                                selectModal={selectModal}
                                closeModal={closeModal}
                                content={contents[Flag]}
                                count={count}
                            />
                    <div
                    id="overlay"
                    style={overlay}
                    onClick={closeModal }
                    >
                    </div>
                </div>
            ) : (
                <></>)}
        </>
    );
};

export default Modal