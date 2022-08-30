import ConfirmContainer from "./confirmContainer";
import { VContainer, SBSContainer } from "./Atoms/Container"
import {Label,Text} from "./Atoms/Text"

const confirmArea = (props:any) => {
    const { inputLists } = props.content
    const {count,getValues}=props
    
    type formContent = {
        formId: number,
        labelname: string,
        name: string,
        value:string
    }
    
    return (
        <VContainer>
            <SBSContainer>
                <Label text="キリ番" /><VContainer><Text text={`${count}`} /></VContainer>
            </SBSContainer>
            {inputLists.map((formContent: formContent, index: number) => (
                    index===5?<div key={index}></div>:
                    <div key={index}>
                        <SBSContainer>
                            <Label text={formContent.labelname} />
                            <VContainer>
                                <Text text={getValues(formContent.name)} />
                            </VContainer>
                        </SBSContainer>
                    </div>
                ))}
        </VContainer>
    )
}

export default confirmArea