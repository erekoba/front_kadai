import { VContainer,SBSContainer } from "./Atoms/Container";
import { Text, Label } from "./Atoms/Text"

const InputForm = (props:any) => {
    const { count,children } = props

    return (
        <div style={{marginTop:"10px"}}>
            <div style={{
                display: "flex",
                alignItems: "center",
                marginTop: "24px",
                marginBottom: "16px",
                justifyContent: "center"
            }}>
                <Label text="キリ番" /><VContainer><Text text={`${count}`} /></VContainer>
            </div>
            {children}
                {/* {inputLists.map((formContent:formContent,index:number)=>(
                    index === 5
                        ? <SBSContainer key={formContent.formId}>
                            <input type="checkbox"
                                onChange={(e)=>statefunction(5,e.target.checked)}
                            ></input>
                            <Text text={formContent.label}/>
                          </SBSContainer>
                        :<div key={formContent.formId}>
                            <InputContainer
                            formContent={formContent}
                            statefunction={statefunction}
                        />
                    </div>
                ))} */}
                                
        </div>
    )
}

export default InputForm