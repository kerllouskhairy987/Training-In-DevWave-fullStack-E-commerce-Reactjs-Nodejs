import toast from "react-hot-toast";

export const successToast = ({ message }: { message?: string }) => {
    return (
        toast.success(`${message}`, {
            duration: 4000,
            position: 'top-center',

            style: { backgroundColor: 'green', color: 'white' },

            icon: "👏",

            // Additional Configuration
            removeDelay: 1000,
        })
    )
}

export const ErrorToast = ({ message }: { message: string }) => {
    return (
        toast.error(`${message}`, {
            duration: 4000,
            position: 'top-center',

            style: { backgroundColor: 'red', color: 'white' },

            icon: "❌",

            // Additional Configuration
            removeDelay: 1000,
        })
    )
}

let errorToastId: string | undefined;
export const InternetErrorToastFnc = (isOnline: boolean) => {
    if (isOnline) {
        toast.dismiss(errorToastId);
        errorToastId = undefined;
    }
    if (!isOnline) {
        errorToastId = toast.error("You are offline", {
            duration: Infinity,
            position: "top-center",
            style: { backgroundColor: "red", color: "white" },
            icon: "🚫",
        });
    }
};
