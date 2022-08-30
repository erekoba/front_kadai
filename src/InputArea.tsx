import InputContainer from "./InputContainer";
import { VContainer,SBSContainer } from "./Atoms/Container";
import {Text,Label} from "./Atoms/Text"

const InputArea = (props:any) => {
    const { count } = props
    const { inputLists, statefunction } = props.content
    type formContent = {
        formId: number,
        label: string,
        value:string
    }

    return (
        <VContainer>
            <SBSContainer>
                <Label text="キリ番" />
                <VContainer>
                    <Text text={`${count}`} />
                </VContainer>
            </SBSContainer>
                {inputLists.map((formContent:formContent,index:number)=>(
                    index === 5
                        ? <SBSContainer key={index}>
                            <input type="checkbox"
                                onChange={(e)=>statefunction(5,e.target.checked)}
                            ></input>
                            <Text text={formContent.label}/>
                          </SBSContainer>
                        :<div key={index}>
                            <InputContainer
                            formContent={formContent}
                            statefunction={statefunction}
                        />
                    </div>
                ))}
        </VContainer>
    )
}

export default InputArea