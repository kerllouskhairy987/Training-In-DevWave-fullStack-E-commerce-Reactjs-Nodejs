import { useChangeRoleMutation, useDeleteUserMutation, useSearchUsersQuery } from "@/app/features/Dashboard/dashboardSlice"
import { useAppSelector } from "@/app/hooks/hooks"
import type { RootState } from "@/app/store"
import AlertModal from "@/components/admin/AlertModal"
import Pagination from "@/components/admin/Pagination"
import { UserSkeleton } from "@/components/skeleton"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import MultipleSelect from "@/components/ui/SelectionButton"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import ErrorHandling from "@/error/ErrorHandling"
import { ErrorToast, successToast } from "@/notification"
import { Edit, Trash } from "lucide-react"
import { useEffect, useState } from "react"

const DashboardUsers = () => {
    const [searchEmail, setSearchEmail] = useState("")

    const { currentUserPagination, valueInSelected, network } = useAppSelector((state: RootState) => state.globals)

    const tableHeading = ["id", "email", "role", "actions"];


    // Get All Users
    const { isLoading: isLoadingGetUsers, data: dataGetUsers, isError: isErrorGetUsers, isSuccess: isSuccessGetUsers }
        = useSearchUsersQuery({ searchTerm: searchEmail, limit: Number(valueInSelected || 10), page: currentUserPagination })
    console.log({ isLoadingGetUsers, dataGetUsers, isErrorGetUsers, isSuccessGetUsers })

    const searchEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchEmail(e.target.value)
    }

    // Change User Role
    const [changeUserRole, { isLoading: isLoadingChangeUserRole, error: errorChangeUserRole, isSuccess: isSuccessChangeUserRole }]
        = useChangeRoleMutation()

    const userSelection = [
        { id: "10", name: "10 users" },
        { id: "20", name: "20 users" },
        { id: "30", name: "30 users" },
        { id: "40", name: "40 users" },
        { id: "50", name: "50 users" },
        { id: "60", name: "60 users" },
        { id: "70", name: "70 users" },
        { id: "80", name: "80 users" },
        { id: "90", name: "90 users" },
        { id: "100", name: "100 users" },
    ]


    // Delete User
    const [deleteUser, { isLoading: isLoadingDeleteUser, error: errorDeleteUser, isSuccess: isSuccessDeleteUser }]
        = useDeleteUserMutation();

    const changeUserRoleHandler = (id: string, role: "admin" | "user") => changeUserRole({ userId: id, role })

    const deleteUserHandler = (id: string) => deleteUser({ userId: id });

    useEffect(() => {
        if (errorChangeUserRole) {
            const err = errorChangeUserRole as { message: string }
            ErrorToast({ message: err.message })
        }

        if (isSuccessChangeUserRole) {
            successToast({ message: "User role changed successfully" })
        }
    }, [errorChangeUserRole, isSuccessChangeUserRole])

    useEffect(() => {
        if (errorDeleteUser) {
            const err = errorDeleteUser as { message: string }
            ErrorToast({ message: err.message })
        }

        if (isSuccessDeleteUser) {
            successToast({ message: "User deleted successfully" })
        }
    }, [errorDeleteUser, isSuccessDeleteUser])

    if (isErrorGetUsers) return <div className="flex items-center bg-black w-full h-screen justify-center"><ErrorHandling /></div>

    return (
        <div className="flex-1 px-2 py-4 overflow-x-auto bg-[#15283c] min-h-screen ">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-5 sm:mb-0">
                <div className="flex-1 w-full">
                    <Label className="mb-2 cursor-pointer" htmlFor="search">
                        Search by email
                    </Label>
                    <Input name="search" id="search" placeholder="Search by email" defaultValue={searchEmail} onChange={searchEmailHandler} className="w-full md:max-w-[400px] mb-5" />
                </div>

                <MultipleSelect dataToMap={userSelection} />
            </div>
            {
                isLoadingGetUsers || !network
                    ? <UserSkeleton />
                    :
                    <>
                        <Table className="bg-[#15283c] overflow-x-auto ">
                            <TableCaption className=" text-yellow-600 font-bold text-sm">A list of your recent products.</TableCaption>
                            <TableHeader className="w-full">
                                <TableRow>
                                    {
                                        tableHeading.map((link) => (
                                            <TableHead key={link}
                                                className={`
                                ${link === "actions" ? "text-right" : ""}
                                px-2`}
                                            >{link}</TableHead>
                                        ))
                                    }
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {dataGetUsers && dataGetUsers?.data.length > 0
                                    ? dataGetUsers?.data.map((user) => (
                                        <TableRow key={user._id} className="even:bg-blue-600/50 w-full">
                                            <TableCell className="font-medium overflow-hidden">{user._id}</TableCell>
                                            <TableCell className="  whitespace-pre-wrap line-clamp-3 pb-0 my-5">{user.email}</TableCell>
                                            <TableCell>{user.role}</TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex items-center justify-end gap-2">

                                                    <AlertModal
                                                        isSuccess={isSuccessChangeUserRole}
                                                        isLoading={isLoadingChangeUserRole} onDelete={() => changeUserRoleHandler(user._id, user.role === "admin" ? "user" : "admin")}
                                                        description="This will permanently to change user role"
                                                        okTxt="Change Role"
                                                    >
                                                        <Button className="bg-violet-600 text-white hover:bg-violet-700">
                                                            <Edit /> Change Role
                                                        </Button>
                                                    </AlertModal>

                                                    <AlertModal
                                                    isSuccess={isSuccessDeleteUser}
                                                        isLoading={isLoadingDeleteUser} onDelete={() => deleteUserHandler(user._id)}>
                                                        <Button variant={"destructive"}>
                                                            <Trash />
                                                        </Button>
                                                    </AlertModal>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                    : <tr className="w-full"><td colSpan={4} className="text-center text-red-500 text-xl font-semibold py-5">No Users Found</td></tr>
                                }
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={3}>Users</TableCell>
                                    <TableCell className="text-right">{dataGetUsers?.total} Products</TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>

                        {/*  Pagination */}
                        <Pagination pages={dataGetUsers?.pages} />
                    </>
            }
        </div>
    )
}

export default DashboardUsers