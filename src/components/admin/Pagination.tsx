import { Button } from "../ui/button"
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks"
import { currentPage, currentUserPaginationAction } from "@/app/features/globals";
import type { RootState } from "@/app/store";
import { useLocation } from "react-router-dom";

const Pagination = ({ pages }: { pages: number | undefined }) => {

    const { pathname } = useLocation()

    const { currentPage: currentPageNumber, currentUserPagination } = useAppSelector((state: RootState) => state.globals)
    const dispatch = useAppDispatch();

    const handlePageDecrease = () => {
        if (pathname === "/dashboard/users") {
            dispatch(currentUserPaginationAction(currentUserPagination - 1))
            return
        }
        dispatch(currentPage(currentPageNumber - 1))
    }

    const handlePageIncrease = () => {
        if (pathname === "/dashboard/users") {
            dispatch(currentUserPaginationAction(currentUserPagination + 1))
            return
        }
        dispatch(currentPage(currentPageNumber + 1))
    }

    return (
        <div className="flex items-center justify-center gap-3 my-5">

            {
                pathname === "/dashboard/users"
                    ? <>
                        <Button disabled={currentUserPagination === 1} className={currentUserPagination === 1 ? "cursor-not-allowed opacity-50" : ""}
                            onClick={handlePageDecrease}
                        >Prev</Button>
                        <span>{currentUserPagination} of {pages}</span>
                        <Button disabled={currentUserPagination === pages} className={currentUserPagination === pages ? "cursor-not-allowed opacity-50" : ""}
                            onClick={handlePageIncrease}
                        >Next</Button>
                    </>
                    : <>
                        <Button disabled={currentPageNumber === 1} className={currentPageNumber === 1 ? "cursor-not-allowed opacity-50" : ""}
                            onClick={handlePageDecrease}
                        >Prev</Button>
                        <span>{currentPageNumber} of {pages}</span>
                        <Button disabled={currentPageNumber === pages} className={currentPageNumber === pages ? "cursor-not-allowed opacity-50" : ""}
                            onClick={handlePageIncrease}
                        >Next</Button>
                    </>
            }

        </div>
    )
}

export default Pagination