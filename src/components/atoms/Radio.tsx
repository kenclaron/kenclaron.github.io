import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export const Radio = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => <input {...props} type="radio" hidden />;

export default Radio;
