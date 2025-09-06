/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IFormField } from "@/interfaces";
import { Input } from "../ui/input"
import { Label } from "../ui/label"

interface IProps extends IFormField {
    error: string
}

const FormFields = (props: IProps) => {
    const { name, type, placeholder, error, autoFocus, disabled, label, readOnly } = props;
    return (
        <div className="flex flex-col gap-2 w-full">
            <Label htmlFor={name}>{label}</Label>
            <Input
                name={name} id={name} type={type} placeholder={placeholder}
                autoFocus={autoFocus} disabled={disabled} readOnly={readOnly}
                className="border border-yellow-600"
            />
            {error && <span className="text-red-500">{error}</span>}
        </div>
    )
}

export default FormFields