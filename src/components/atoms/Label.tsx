import { DetailedHTMLProps, LabelHTMLAttributes } from "react";

const Label = (
  props: DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >
) => <label {...props} tabIndex={0} />;

export default Label;
