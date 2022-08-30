
import { Text,  Label } from "./Atoms/Text";
import { SBSContainer,VContainer } from "./Atoms/Container";

const ConfirmContainer = (props: any) => {
    return (
        <SBSContainer>
            <Label text={props.formContent.label} />
            <VContainer>
                <Text text={props.formContent.value} />
            </VContainer>
        </SBSContainer>
    )
}

export default ConfirmContainer