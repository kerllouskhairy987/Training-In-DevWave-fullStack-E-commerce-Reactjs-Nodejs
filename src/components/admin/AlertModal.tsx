import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "../ui/button"
import SpinnerComponent from "../ui/Spinner";
import { memo, useState } from "react";

type TProps = {
    children: React.ReactNode
    isLoading: boolean;
    title?: string
    description?: string
    okTxt?: string;
    onDelete: () => void
}


const AlertModal = (
    {
        children, isLoading,
        title = "Are you absolutely sure?",
        description = "This action cannot be undone. This will permanently delete your category and remove your data from our servers.",
        okTxt = "Delete",
        onDelete
    }: TProps) => {

    const [open, setOpen] = useState(false)

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild onClick={() => setOpen(!open)}>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>{description}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <Button type={isLoading ? "button" : "submit"}
                        variant={okTxt === "Delete" ? "destructive" : "default"}
                        className={okTxt === "Delete" ? "" : "bg-green-500 hover:bg-green-600"}
                        onClick={() => {
                            if (isLoading) return;
                            onDelete()
                            setOpen(false)
                        }}>
                        {isLoading ? <SpinnerComponent /> : okTxt}
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default memo(AlertModal)