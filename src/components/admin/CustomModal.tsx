import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { useEffect, useRef, useState } from "react"
import { useUpdateCategoryMutation } from "@/app/features/Dashboard/dashboardSlice"
import SpinnerComponent from "../ui/Spinner"
import { ErrorToast, successToast } from "@/notification"

type TProps = {
    id: string;
    children: React.ReactNode;
    nameValue: string;
    descValue: string;
}

const CustomModal = ({ id, children, descValue, nameValue }: TProps) => {

    const formRef = useRef<HTMLFormElement>(null)
    const [openDialog, setOpenDialog] = useState<boolean>();

    // Update Category Redux
    const [updateCategory, { isLoading, data, isSuccess, error }] = useUpdateCategoryMutation()

    const submitHandlerUpdateCategory = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("first", id)

        if (!formRef.current) return;
        const formData = new FormData(formRef.current);
        const data: Record<string, string> = {};
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        console.log(data)

        // Update Category Redux
        updateCategory({ id: id, name: data.name, description: data.description })
    }

    useEffect(() => {
        if (error) {
            console.log(error)
            const err = error as { data: { message: string } }
            ErrorToast({ message: err?.data.message })
        }

        if (isSuccess) {
            successToast({ message: data?.message })

            // close dialog on success
            setOpenDialog(false)
        }
    }, [error, isSuccess, data?.message])

    return (
        <Dialog>
            <DialogTrigger asChild onClick={() => setOpenDialog(true)}>
                {children}
            </DialogTrigger>
            {
                openDialog && (
                    <DialogContent className="sm:max-w-[425px]">
                        <form onSubmit={submitHandlerUpdateCategory} ref={formRef}>
                            <DialogHeader>
                                <DialogTitle>Edit Category</DialogTitle>
                                <DialogDescription>
                                    Make changes to your category here. Click save when you&apos;re
                                    done.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 mt-4">
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" name="name" defaultValue={nameValue} />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="description">Description</Label>
                                    <Input id="description" name="description" defaultValue={descValue} />
                                </div>
                            </div>
                            <DialogFooter className="mt-4">
                                <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button type={isLoading ? "button" : "submit"}>
                                    {isLoading ? <SpinnerComponent /> : "Save changes"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                )
            }
        </Dialog>
    )
}

export default CustomModal