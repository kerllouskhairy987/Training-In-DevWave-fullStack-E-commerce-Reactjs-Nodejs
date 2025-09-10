
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


const UserSkeleton = () => {
  return (
    <>
      <div className="flex-1 px-2 py-4 !overflow-hidden">
        <Table className="bg-blue-700/50 overflow-x-auto">
          <TableHeader className="w-full">
            <TableRow>
              <TableHead className="px-2">ID</TableHead>
              <TableHead className="px-2">Email</TableHead>
              <TableHead className="px-2">Role</TableHead>
              <TableHead className="px-2 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(5)].map((_, i) => (
              <TableRow key={i} className="even:bg-blue-600/50 w-full">
                <TableCell className="font-medium overflow-hidden">
                  <Skeleton className="h-4 w-32 bg-blue-400/50" />
                </TableCell>
                <TableCell className="whitespace-pre-wrap line-clamp-3 pb-0 my-5">
                  <Skeleton className="h-4 w-52 bg-blue-400/50" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-20 bg-blue-400/50" />
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Skeleton className="h-8 w-24 rounded-md bg-violet-400/50" />
                    <Skeleton className="h-8 w-10 rounded-md bg-red-400/50" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

const WebsiteProductSkeleton = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          {
            Array.from({ length: 5 }).map((_, index) => (
              <div key={index}>
                {/* image */}
                < div className="h-[200px] bg-gray-200 rounded-md" />

                {/* title */}
                <div className="space-y-2" >
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>

                {/* stars + rating */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-[2px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-gray-200 rounded" />
                    ))}
                  </div>
                  <div className="h-4 w-12 bg-gray-200 rounded" />
                </div>

                {/* price */}
                <div className="space-y-1">
                  <div className="h-5 bg-gray-200 rounded w-1/2" />
                  <div className="h-3 bg-gray-200 rounded w-2/3" />
                </div>

                {/* delivery */}
                <div className="space-y-1">
                  <div className="h-3 bg-gray-200 rounded w-2/3" />
                  <div className="h-3 bg-gray-200 rounded w-1/3" />
                  <div className="h-3 bg-gray-200 rounded w-1/4" />
                </div>

                {/* button */}
                <div className="h-9 bg-gray-300 rounded-md" />
              </div>
            ))
          }
        </div>
      </div >
    </>

  )
}

const SingleProductSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">

      {/* Left Image Section */}
      <div className="flex-1 flex justify-center items-center">
        <Skeleton className="w-full max-w-md h-[300px] rounded-lg" />
      </div>

      {/* Middle Product Info */}
      <div className="flex-1 max-w-xl space-y-4">
        <Skeleton className="w-32 h-4" /> {/* Brand */}
        <Skeleton className="w-full h-10" /> {/* Title */}
        <Skeleton className="w-3/4 h-6" /> {/* Description */}

        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="w-5 h-5 rounded" />
          ))}
          <Skeleton className="w-16 h-4 ml-2" />
        </div>

        <hr />

        {/* Price */}
        <Skeleton className="w-32 h-8" />
        <Skeleton className="w-40 h-4" />
        <Skeleton className="w-60 h-4" />

        {/* Small Icons Row */}
        <div className="flex gap-6 mt-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center text-center text-sm gap-2">
              <Skeleton className="w-10 h-10 rounded-full" />
              <Skeleton className="w-20 h-4" />
            </div>
          ))}
        </div>

        <hr />

        {/* About Item */}
        <Skeleton className="w-40 h-6" />
        <div className="space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="w-full h-4" />
          ))}
        </div>
      </div>

      {/* Right Cart Section */}
      <div className="w-full md:w-64 border rounded-lg shadow-md p-4 space-y-3">
        <Skeleton className="w-28 h-8" /> {/* Price */}
        <Skeleton className="w-40 h-4" /> {/* Delivery */}
        <Skeleton className="w-20 h-4" />
        <Skeleton className="w-52 h-4" /> {/* Location */}
        <Skeleton className="w-44 h-4" /> {/* Ships info */}
        <Skeleton className="w-full h-10 rounded-md" /> {/* Add to Cart */}
        <Skeleton className="w-full h-10 rounded-md" /> {/* Buy Now */}
        <div className="flex gap-3">
          <Skeleton className="w-20 h-4" />
          <Skeleton className="w-20 h-4" />
        </div>
        <Skeleton className="w-full h-10" /> {/* Add to List */}
      </div>
    </div>
  )
}

export {
  DashboardProductsTableSkeleton,
  AllCategoriesSkeleton,
  CartSkeleton,
  UserSkeleton,
  WebsiteProductSkeleton,
  SingleProductSkeleton
} 