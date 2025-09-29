import { Button, ButtonText } from "@/components/ui/button";
import { InterfaceButtonProps } from "@gluestack-ui/core/lib/esm/button/creator/types";
import { clsx } from "clsx";

export type TPrimaryButton = {
  text?: string;
  containerClassName?: string;
  textClassName?: string;
} & InterfaceButtonProps;

const PrimaryButton = ({
  text,
  containerClassName,
  textClassName,
  ...props
}: TPrimaryButton) => {
  return (
    <Button className={clsx(containerClassName)} {...props}>
      <ButtonText className={clsx("font-bold", textClassName)}>
        {text}
      </ButtonText>
    </Button>
  );
};

export default PrimaryButton;
