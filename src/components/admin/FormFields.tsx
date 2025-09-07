/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IFormField } from "@/interfaces";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import ImageUploadArea from "./ImageUploadArea";

interface IProps extends IFormField {
  error: string;
}

const FormFields = (props: IProps) => {
  const {
    name,
    type,
    placeholder,
    error,
    autoFocus,
    disabled,
    label,
    readOnly,
    maxImages,
    max,
    defaultValue,
    onImagesChange,
  } = props;

  if (type === "image-upload") {
    return (
      <div className="flex flex-col gap-2 w-full">
        <ImageUploadArea
          onImagesChange={onImagesChange || (() => {})}
          maxImages={maxImages || 5}
        />
        {error && <span className="text-red-500">{error}</span>}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        autoFocus={autoFocus}
        disabled={disabled}
        readOnly={readOnly}
        className="border border-yellow-600"
        max={max? max : undefined}
        defaultValue={defaultValue}
      />
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};

export default FormFields;
