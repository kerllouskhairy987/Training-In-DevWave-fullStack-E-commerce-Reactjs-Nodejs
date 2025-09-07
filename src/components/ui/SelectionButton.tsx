import { selectedValue } from "@/app/features/globals";
import { useAppDispatch } from "@/app/hooks/hooks";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


interface IProps {
  dataToMap?: Record<string, string>[]
}

const initialState = [
  {
    id: "1",
    name: "one",
  },
  {
    id: "2",
    name: "two",
  },
  {
    id: "3",
    name: "three",
  },
  {
    id: "4",
    name: "four",
  },
  {
    id: "5",
    name: "five",
  },
  {
    id: "6",
    name: "six",
  },
  {
    id: "7",
    name: "seven",
  },
  {
    id: "8",
    name: "eight",
  },
  {
    id: "9",
    name: "nine",
  }
]

export default function MultipleSelect({ dataToMap = initialState }: IProps) {
  const dispatch = useAppDispatch();


  const handleChange = (value: string) => {
    console.log(value)
    dispatch(selectedValue(value));
  };

  return (
    <div>
      <Select onValueChange={handleChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>my quantity</SelectLabel>
            {
              dataToMap.map((select, index: number) => (
                <SelectItem key={index} value={select.id}>
                  {select.name}
                </SelectItem>
              ))
            }
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
