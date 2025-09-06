import { generateUploadButton } from "@uploadthing/react";
// import { serverUrl } from "@/lib/constants";

const UploadButton = generateUploadButton({
  url: `${"https://training-in-dev-wave-full-stack-e-c.vercel.app"} / api / uploadthing`,
});
// ...

export default UploadButton;
