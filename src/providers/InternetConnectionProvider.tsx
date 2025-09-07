import { networkMode } from "@/app/features/globals";
import { useAppDispatch } from "@/app/hooks/hooks";
import { InternetErrorToastFnc, successToast } from "@/notification";
import { useEffect, useState } from "react";

const InternetConnectionProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOnline, setIsOnline] = useState<boolean>(true);

    const dispatch = useAppDispatch()

    function onlineFnc() {
        setIsOnline(true)
        dispatch(networkMode(true))
    }

    function offlineFnc() {
        setIsOnline(false)
        dispatch(networkMode(false))
    }

    useEffect(() => {
        window.addEventListener("online", onlineFnc);

        window.addEventListener("offline", offlineFnc);

        // cleanup
        return () => {
            window.removeEventListener("online", onlineFnc);
            window.removeEventListener("offline", offlineFnc);
        }
    }, [])

    useEffect(() => {
        if (isOnline) {
            successToast({ message: "You are online" })
            InternetErrorToastFnc(isOnline)
        } else {
            InternetErrorToastFnc(isOnline)
        }
    }, [isOnline, dispatch])

    return (
        <>
            {children}
        </>
    )

}

export default InternetConnectionProvider