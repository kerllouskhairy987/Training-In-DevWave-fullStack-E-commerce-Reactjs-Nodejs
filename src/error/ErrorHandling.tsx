import { Button } from "@/components/ui/button";
import { Ban } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type TProps = {
    message?: string;
    goLinkPath?: string;
    goLinkTxt?: string;
}
const ErrorHandling = ({ message, goLinkPath = "/", goLinkTxt = "Go Home" }: TProps) => {
    const { pathname } = useLocation();
    return (
        <div className="flex flex-col items-center text-center gap-4 max-w-[400px] mx-auto">
            <div className="flex justify-center text-red-500">
                <Ban size={100} />
            </div>
            <h2 className="text-2xl font-bold">{message ? message : "Something went wrong"}</h2>
            <p className="text-gray-500">Oops! Something went wrong while processing your request</p>
            <div className="flex gap-4">
                <Button>
                    <Link to={goLinkPath}>{goLinkTxt}</Link>
                </Button>
                <Button variant={"outline"}>
                    <Link to={pathname} reloadDocument>Refresh</Link>
                </Button>
            </div>
        </div>
    )
}

export default ErrorHandling