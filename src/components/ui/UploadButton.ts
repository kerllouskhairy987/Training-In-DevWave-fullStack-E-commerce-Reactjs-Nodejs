import { generateUploadButton } from "@uploadthing/react";
import { serverUrl } from "@/lib/constants";

const UploadButton = generateUploadButton({
    url: ${ serverUrl } / api / uploadthing,
});
// ...

export default UploadButton;