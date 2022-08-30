
import ModalContainer from "./Atoms/ModalContainer";
import Title from "./Atoms/Title";
import { Main, Header,Footer } from "./Atoms/Main";
import { useNavigate } from "react-router-dom";

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

const Complete = () => {

  const navigate = useNavigate()
  const finish = () => {
    navigate("/")
  }

  return <>
    <div style={modal}>
        <ModalContainer>
          <Header>
              <Title text="商品発送先登録完了" />
          </Header>
        <Main>
          商品発送先の登録が完了しました。<br/>商品を発送いたしますので、しばらくお待ち下さい。
            
        </Main>
        <Footer>
          <button onClick={finish} >ゲームに戻る</button>
        </Footer>
        </ModalContainer>
        <div
          id="overlay"
              style={overlay}
          >
      </div>
      
    </div>
  </>;
};

export default Complete;
