import { websiteProductPaginationAction } from "@/app/features/globals";
import { Button } from "../ui/button"
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import type { RootState } from "@/app/store";

type TProps = {
    pages: number | undefined,
}
const WebsiteProductPagination = ({ pages }: TProps) => {
    const { websiteProductPaginationState } = useAppSelector((state: RootState) => state.globals)

    const [currentPage, setCurrentPage] = useState(websiteProductPaginationState);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(websiteProductPaginationAction(currentPage))
    }, [dispatch, currentPage])

    const handlePageDecrease = () => {
        setCurrentPage(prev => prev - 1)
        dispatch(websiteProductPaginationAction(currentPage))
    }

    const handlePageIncrease = () => {
        setCurrentPage(prev => prev + 1)
        dispatch(websiteProductPaginationAction(currentPage))
    }

    return (
        <div className="flex items-center justify-center gap-3 my-5">
            <Button disabled={currentPage === 1} className={currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}
                onClick={handlePageDecrease}
            >Prev</Button>
            <span className="font-semibold text-black">{currentPage} of {pages}</span>
            <Button disabled={currentPage === pages} className={currentPage === pages ? "cursor-not-allowed opacity-50" : ""}
                onClick={handlePageIncrease}
            >Next</Button>
        </div>
    )
}

export default WebsiteProductPagination