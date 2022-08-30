import { ChangeEventHandler } from "react"


export const Input = (props: { name: string | undefined; id: string | undefined; value: string | undefined;onChange: ChangeEventHandler<HTMLInputElement> | undefined }) => {
        const form = {
        width: "100%",
        height: "20px",
        }
    return (
        <input
            style={form}
            type="text"
            name={props.name}
            value={props.value}
            id={props.id}
            onChange={props.onChange}
        />
    )
}