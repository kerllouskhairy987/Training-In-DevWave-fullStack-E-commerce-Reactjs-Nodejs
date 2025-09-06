
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption, TableFooter } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"

const DashboardProductsTableSkeleton = () => {
  return (
    <Table className="px-2 py-4 bg-blue-700/50">
      <TableCaption className="text-yellow-600 font-bold text-sm">
        Loading your recent products...
      </TableCaption>
      <TableHeader>
        <TableRow>
          {["id", "name", "brand", "description", "price", "category", "stars", "stock", "discount", "image", "actions"].map((heading) => (
            <TableHead
              key={heading}
              className={`${heading === "actions" ? "text-right" : ""} px-2`}
            >
              {heading}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <TableRow key={i} className="even:bg-blue-600/50">
              <TableCell>
                <Skeleton className="h-4 w-12" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-40" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-24" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-40" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-16" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-20" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-12" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-12" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-16" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-12 w-12 rounded-full" />
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center gap-2 justify-end">
                  <Skeleton className="h-8 w-8 rounded-md" />
                  <Skeleton className="h-8 w-8 rounded-md" />
                  <Skeleton className="h-8 w-8 rounded-md" />
                </div>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={10}>Products</TableCell>
          <TableCell className="text-right">
            <Skeleton className="h-4 w-20" />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};



const AllCategoriesSkeleton = () => {
  return (
    <>
      {
        Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex justify-between items-start text-black gap-2 my-2 animate-pulse">
            <div className="flex flex-col gap-2">
              <div className="w-48 h-5 bg-gray-300 rounded"></div>
              <div className="w-64 h-4 bg-gray-300 rounded"></div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="w-20 h-9 bg-gray-300 rounded-lg"></div>
              <div className="w-20 h-9 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        ))
      }
    </>
  )
}



const CartSkeleton = () => {
  return (
    <>
      <ul>
        {[...Array(3)].map((_, i) => (
          <li key={i} className="mb-4">
            <div className="flex gap-6 justify-between border p-3 rounded-md">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <Skeleton className="w-24 h-24 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
              <div className="flex-1 flex items-end justify-end">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-5 w-12" />
                  <Skeleton className="h-9 w-9 rounded-md" />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex flex-col justify-end items-end pt-6 space-y-2">
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-10" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-10" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-10" />
        </div>
      </div>
    </>
  )
}

export { DashboardProductsTableSkeleton, AllCategoriesSkeleton, CartSkeleton }