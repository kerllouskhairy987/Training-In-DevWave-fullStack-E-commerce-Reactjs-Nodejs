import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { useAppDispatch } from "@/app/hooks/hooks"
import { currentPage } from "@/app/features/globals"

const Pagination = ({ pages }: { pages: number | undefined }) => {
    const [page, setPage] = useState(1)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(currentPage(page))
    }, [page, dispatch])

    const handlePageDecrease = () => {
        setPage(prev => prev - 1)
    }

    const handlePageIncrease = () => {
        setPage(prev => prev + 1)
    }

    return (
        <div className="flex items-center justify-center gap-3 my-5">
            <Button disabled={page === 1} className={page === 1 ? "cursor-not-allowed opacity-50" : ""}
                onClick={handlePageDecrease}
            >Prev</Button>

            <span>{page} of {pages}</span>

            <Button disabled={page === pages} className={page === pages ? "cursor-not-allowed opacity-50" : ""}
                onClick={handlePageIncrease}
            >Next</Button>
        </div>
    )
}

export default Pagination