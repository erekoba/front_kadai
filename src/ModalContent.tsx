import Button from "./Atoms/Button";

import InputForm from "./InputForm";
import ConfirmArea from "./confirmArea";
import ModalContainer from "./Atoms/ModalContainer";
import Title from "./Atoms/Title";
import { Main, Header, Footer} from "./Atoms/Main";
import { SBSContainer,VContainer } from "./Atoms/Container";
import { useForm } from 'react-hook-form';

type input = {
    formId: number;
    labelname: string;
    name: string;
    value: string;
}


const adress= [
        {
            labelname:"郵便番号",
            name: "adressNumber",
            value:"",
        },
        {
            labelname:"都道府県",
            name: "adress1",
            value:"",
        },
        {
            labelname: "市区町村",
            name: "adress2",
            value:"",
        },
        {
            labelname: "町名番地",
            name: "adress3",
            value:"",
        },
        {
            formId:4,
            labelname: "建物・部屋番号",
            name: "adress4",
            value:"",
        },

  ]

const ModalContent = (props: any) => {
    const { content, count } = props
    const {
        register,
        handleSubmit,
        getValues,
        formState: {  isValid,errors},
    } = useForm({
        mode:"onBlur"
    });
    
    const onSubmit = (data: any) => {
        console.log(getValues());
        content.button1.function()
    }
    return (
            <ModalContainer>
                <Header>
                    <Title text={content.header} />
                </Header>
                
                {content.id === 2 ? (
                <><Main>{content.main}
                    <form onSubmit={handleSubmit(onSubmit)}>
                         <SBSContainer>
                            <input style={form} id="kiriban" value={count} type="hidden" {...register("kiriban")}/>
                        </SBSContainer>
                        <InputForm content={content} count={count} >
                            {content.inputLists.map((data: input, index: number) => (
                                index === 5
                                    ?(<>
                                    <SBSContainer key={index}>
                                        <label style={label} >{data.labelname }</label>
                                        <input type="checkbox" id={data.name} {...register(data.name,{required:true})} />
                                    </SBSContainer>
                                    </>)
                                    :index === 2? (<>        
                                    {errors[data.name] && <div style={{fontSize:"smaller"}}>入力が必須の項目です</div>}
                                    <SBSContainer key={index}>
                                        <label style={label} htmlFor="email">{data.labelname}</label>
                                        <VContainer>
                                        {adress.map((a, b) => (
                                            <SBSContainer key={b}>
                                            <label style={label} htmlFor="email">{a.labelname }</label>
                                            <input style={form} id={a.name} {...register(a.name,{required:true})} />
                                            </SBSContainer>
                                        ))}
                                        </VContainer>
                                    </SBSContainer>
                                    </>)
                                    :(<>        
                                    {errors[data.name] && <div style={{fontSize:"x-small"}}>入力が必須の項目です</div>}
                                    <SBSContainer key={index}>
                                        <label style={label} htmlFor="email">{data.labelname }</label>
                                        <input style={form} id={data.name} {...register(data.name,{required:true})} />
                                    </SBSContainer>
                                    </>)
                            ))}
                            {/* <SBSContainer>
                                <label style={label} htmlFor="email">TEST</label>
                                <input style={form} id="test" {...register("test", { required: true })} />
                                {errors.test && <div>入力が必須の項目です</div>}
                            </SBSContainer> */}
                            
                        <button type="submit" disabled={!isValid}>確認画面へ</button>
                        </InputForm>
                    </form>
                </Main>
                </>)
                : content.id === 3
                    ? (
                    <>
                    <form>
                    <Main>{content.main}
                        <ConfirmArea content={content} count={count} getValues={getValues} />
                            </Main>
                    
                    <Footer>
                        <Button
                                onClick={() => content.button1.function(getValues())}
                                color="YELLOW"
                                Name={content.button1.value}
                            />
                            {content.button2 ? (
                                <Button
                                    color="BLUE"
                                    onClick={() => content.button2.function()}
                                    Name={content.button2.value} />
                            ) : (<></>)}
                        </Footer></form></>)
                    : (<>
                        <Main>{content.main}</Main>
                        <Footer>
                            <Button
                                onClick={() => content.button1.function(getValues())}
                                color="YELLOW"
                                Name={content.button1.value}
                            />
                            {content.button2 ? (
                                <Button
                                    color="BLUE"
                                    onClick={() => content.button2.function()}
                                    Name={content.button2.value} />
                            ) : (<></>)}
                        </Footer>
                        </>)}
            </ModalContainer>
    );
};

const form = {
        width: "100%",
        height: "24px",
}
const label = {       
        fontWeight: "bold",
        width:"140px"
    }

export default ModalContent