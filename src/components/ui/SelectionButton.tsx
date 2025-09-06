import { getQuantityForShoppingCart } from "@/app/features/globals";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import type { RootState } from "@/app/store";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const quantities = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];

export default function MultipleSelect() {
  const { quantityInCart } = useAppSelector((state: RootState) => state.globals)
  const dispatch = useAppDispatch();


  const handleChange = (value: string) => {
    dispatch(getQuantityForShoppingCart(value));
  };

  return (
    <div>
      <Select value={quantityInCart} onValueChange={handleChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>my quantity</SelectLabel>
            {
              quantities.map((quantity) => (
                <SelectItem key={quantity} value={String(quantity)}>
                  {quantity}
                </SelectItem>
              ))
            }
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
