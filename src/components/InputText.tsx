import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "./Text";
import Skeleton from "./Skeleton";

export const inputTextVariants = cva(
  `
    border-b border-solid border-gray-200 focus:border-pink-base
    bg-transparent outline-none
  `,
  {
    variants: {
      loading: {
        true: "pointer-events-none",
      },
      size: {
        md: "pb-2 px-2",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
      loading: false,
    },
  }
);

interface InputTextProps
  extends VariantProps<typeof inputTextVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  loading?: boolean;
}

export default function InputText({
  size,
  disabled,
  className,
  loading,
  ...props
}: InputTextProps) {
  if (loading) {
    return (
      <Skeleton rounded="sm" className={inputTextVariants({ loading, size })} />
    );
  }
  return (
    <input
      className={cx(
        inputTextVariants({ size, disabled }),
        textVariants(),
        className
      )}
      {...props}
    />
  );
}
