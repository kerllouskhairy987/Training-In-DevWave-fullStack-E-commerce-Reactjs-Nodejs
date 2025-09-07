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

type TProps = {
    children: React.ReactNode
    isLoading: boolean;
    title?: string
    description?: string
    okTxt?: string;
    onDelete: () => void
}


const AlertModal = (
    { children, isLoading,
        title = "Are you absolutely sure?",
        description = "This action cannot be undone. This will permanently delete your category and remove your data from our servers.",
        okTxt = "Delete",
        onDelete }
        : TProps) => {

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
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
                        }}>
                        {isLoading ? <SpinnerComponent /> : okTxt}
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default AlertModal