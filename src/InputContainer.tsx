import { Label } from "./Atoms/Text";
import { SBSContainer } from "./Atoms/Container";
import { Input } from "./Atoms/Input";

const InputContainer = (props: any) => {
    const { statefunction } = props
    const setInput = (id:number,value:string) => {
        statefunction(id,value)
    }
    return (
        <SBSContainer>
            <Label text={props.formContent.label}/>
            <Input
                id={props.formContent.formId}
                value={props.formContent.value}
                name={props.formContent.label}
                onChange={(e) => setInput(props.formContent.formId,e.target.value)} />
        </SBSContainer>
    )
}

export default InputContainer