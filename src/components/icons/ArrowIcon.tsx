import Icon, { IconType } from "./Icon";

export default function ArrowIcon(props: IconType) {
  return (
    <Icon {...props}>
      <path d="M24 40 8 24l2.1-2.1 12.4 12.4V8h3v26.3l12.4-12.4L40 24Z" />
    </Icon>
  );
}
