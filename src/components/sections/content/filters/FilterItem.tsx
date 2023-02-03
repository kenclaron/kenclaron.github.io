import { ChipButton } from "components/atoms/Chips";
import Label from "components/atoms/Label";
import Radio from "components/atoms/Radio";

export const FilterItem = ({
  children,
  itemId,
  value,
  onChange,
  checked,
  setScrolling,
}: {
  children: string;
  itemId: number;
  value: string;
  onChange: any;
  checked?: boolean;
  setScrolling?: any;
}) => {
  return (
    <ChipButton
      onMouseDown={() => setScrolling(0)}
      onClick={() => onChange(value)}
    >
      <Radio
        name="filter"
        id={`item-${itemId}`}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <Label
        htmlFor={`item-${itemId}`}
        onKeyDown={(event) => {
          if (event.key === "Enter") onChange(value);
        }}
      >
        {children}
      </Label>
    </ChipButton>
  );
};
