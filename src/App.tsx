import React, { useState,useEffect,useRef } from 'react';
import './App.css';
import Modal from "./Modal";
import Button from "./Atoms/Button";
import { useNavigate } from "react-router-dom";
import { Header, Footer } from "./Atoms/Main";
import electronicboard from "./number";



const App = () => {

  //{name:名前}、formタグを使う
  const confirmContents= [
        {
            formId: 0,
            labelname:"名前",
            name: "name",
            value:"",
        },
        {
            formId:1,
            labelname:"名前(カナ)",
            name: "kana",
            value:"",
        },
        {
            formId:2,
            labelname: "発送先住所",
            name: "adress",
            value:"",
        },
        {
            formId:3,
            labelname: "電話番号",
            name: "tel",
            value:"",
        },
        {
            formId:4,
            labelname: "メールアドレス",
            name: "email",
            value:"",
        },
        {
            formId:5,
            labelname: "同意する",
            name: "permission",
            value:false,
        }
  ]

  const zeroArray:string[] = []
  for (let i = 0; i < 7; i++) {
    zeroArray.push("0")
  }
  const zeroArrayN:number[] = []
  for (let i = 0; i < 7; i++) {
    zeroArrayN.push(0)
  }
  //state
  const [modalselect, setModalSelect] = useState<number>(1);
  const [inputLists, setInputLists] = useState(confirmContents)
  const [count, setCount] = useState<number>(0);
  const [stringCount, setStringCount] = useState<string>("0000000");
  const [countArray, setCountArray] = useState(zeroArray);
  const [countArrayN, setCountArrayN] = useState<number[]>(zeroArrayN);
  const [audioBuffer, setAudioBuffer] = useState(null);
  const [image , setImage] = useState('image/item/chips1-1.png')

  const audioContext = useRef<any>(null)
  
  const navigate =useNavigate()
//==============function=============================
  //Modalの中身を変更する
  const selectModal = (id: number) => {
    setModalSelect(id)
  }
  //Modalの中身を変更する
  const nextModal = () => {
    setModalSelect(2)
  }
  //Modalを閉じる
  const closeModal = () => {
    selectModal(0)
  }
  //入力内容をstateに保存
  const updateInputLists = (id:number ,value:string) => {
    setInputLists((prevState) =>
      prevState.map((obj) =>
      (obj.formId === id
        ? {
          formId: obj.formId,
          labelname: obj.labelname,
          name: obj.name,
          value: value
        }
        : obj
      ))
    )
  }
  //入力内容確認
  const confirm = () => {
    setModalSelect(3)
  }
  //戻る
  const backModal = () => {
    selectModal(2)
  }
  //submit関数
  const submit = (data:any) => {
    localStorage.setItem('data', JSON.stringify(data))
    setInputLists(confirmContents)
    navigate("/complete")
  }
  //countup
  const countUp = () => {
    setCount(count + 1);
    setModalSelect(1)
    zeropadding(count + 1)
    selectPlay(count + 1)
    imageChange(count + 1)
  }
  //countdown
  const countDown = () => {
    setCount(count - 1);
    setModalSelect(1)
  }
  //countをzero padding
  const zeropadding = (count: number) => {
   
    const digist = count.toString().length
    const padding: number =  6- digist
    //位ごとの数字に分割
    // zeroArray[padding]= count.toString()
    // setCountArray(zeroArray)
    let zero:string = "0"
    for (let i: number = 0; i < padding; i++) {
      zero = `${zero}0`
    }
    const stringcount = `${zero}${count.toString()}`
    
     //桁ごとに文字列として配列に入れる
    const split = stringcount.split('')
   
    //桁ごとに数値として配列に入れる
    const Nsplit = split.map(Number)
    
    //桁ごろに数値として保存
    setCountArrayN(Nsplit)

    //stringとして保存
    setCountArray(split)

    //一つの文字列として保存
    setStringCount(`${zero}${count.toString()}`)
  }

  useEffect(() => {
    audioContext.current = new AudioContext()
  },[])

   //音を再生
  const selectPlay = (flag: number) => {
    
    const root = Math.floor(flag/4) % 3 +1
    const branch = flag % 4 + 1
    // const _file = sound1.files
    const request = new XMLHttpRequest();
    flag % 10 === 0 &&count!==0
      ?(request.open('GET', `sound/special-${root}.mp3`, true))
      :(request.open('GET', `sound/basic${root}-${branch}.mp3`, true))
    request.responseType = 'arraybuffer';
    //
    request.onload = () => {
      //
      const audioData = request.response;
      //
      const sourceNode = audioContext.current.createBufferSource();
      //
      audioContext.current.decodeAudioData(audioData).then((decodedData:any) => {
        sourceNode.buffer = decodedData;
        // 出力先に接続
        sourceNode.connect(audioContext.current.destination);
        // 再生発火
        sourceNode.start();
      })
    }
    request.send()
  }

  const handleClickPlay= () => {
   // 自動再生ブロックにより停止されたオーディオを再開させる
    if (audioContext.current.state === "suspended") {
      audioContext.current.resume();
    }
    // ソースノード生成 ＋ 音声を設定
    const sourceNode = audioContext.current.createBufferSource();
    sourceNode.buffer = audioBuffer;
    console.log(audioBuffer)
    // 出力先に接続
    sourceNode.connect(audioContext.current.destination);
 
    // 再生発火
    sourceNode.start();
  }

  //ボテトの画像を変える関数
  const imageChange = (flag:number) => {
    const root = Math.floor(flag/4) % 3 +1
    const branch = flag % 4 + 1
    const currentimage = `image/item/chips${root}-${branch}.png`
    setImage(currentimage)
  }
  

//=============type===========================



//=============data============================
  const ModalContents = [
    { id: 0,
      header: "キリ番",
      main: "キリ番",
      button1: "キリ番",
      button2: "キリ番",
      form:false,
    },
    {
      id: 1,
      header: "キリ番ゲット",
      main: `つきましては、商品発送のご登録をお願いします。\n下のボタンより商品配送先ご登録フォームがひらきます。`,
      button1: {
        value: "商品配送先登録フォーム",
        function: nextModal
      },
      button2: {
        value: "今は応募しない",
        function: closeModal
      },
      form: false,
    },
    { id: 2,
      header: "商品配送先登録フォーム",
      main: "以下フォームより必要事項を入力いただき、商品発送のご登録をお願いします。",
      button1: {
        value: "確認画面へ",
        function: confirm
      },
      form: true,
      statefunction: updateInputLists,
      inputLists:inputLists,
    },
    { id: 3,
      header: "入力内容のご確認",
      main: "入力内容をご確認いただき間違いありませんでしたら、下記「登録する」ボタンより入力内容を送信してください。",
      button1: {
        value: "登録する",
        function:submit
      },
      button2: {
        value: "修正する",
        function:backModal
      },
      form: false,
      inputLists:inputLists,
    }
  ]
  
  //キリ番を変える
  const kiriban =10;
  return <>
    <Header>抽選</Header>
    <div style={{ height: 400, padding: 30, textAlign: "center" }}>
      <img
        style={{ height: "200px" }}
        src={image} alt="item/chips1-1.png"
        onClick={countUp}
      />
      {/* <Button onClick={countUp} Name="+" color="PURPLE"></Button>
      <Button onClick={countDown} Name="-" color="PURPLE"></Button> */}
      {/* <Title text={stringCount} /> */}
      {/* <div style={{width:"100%"}}>
        {countArray.map((text,index) => (
          <div key={index} className={`display d${text}`}></div>
        ))}
      </div> */}
      <div style={{ width: "100%",height:"35%",display:"flex",alignItems:"center",justifyContent:"center" }}>
        {countArray.map((number, index) => (
          <div className='back' key={index}>
          {electronicboard[Number(number)].map((data, index) => (
            <div className='row' key={index}>
              {data.map((row, index) => (
                row === 0
                  ?<div className='off' key={index}></div>
                  :<div className='on' key={index}></div>
              ))}
            </div>
          ))}
        </div>
        ))}
      </div>
      {/* <div style={{ width: "100%",position: "relative" }}>
        <div className='backboard'>
          <div className='boardpre'></div>
          <div className='boardpost'></div>
        </div>
        <div className='backboard'></div>
      </div> */}
    </div>
    <Footer>抽選
      {/* <input type="file" onChange={handleChangeFile} />
      <button onClick={()=>selectPlay(count) }>選曲</button>
      <button onClick={handleClickPlay }>再生</button> */}
    </Footer>
    
    {count % kiriban === 0&&count!==0 ? (
      <Modal
      Flag={modalselect}
      selectModal={selectModal}
      closeModal={closeModal}
      contents={ModalContents}
      count={stringCount}
      />)
      : (<></>)}
     
  </>;
};

export default App;
