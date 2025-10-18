import { useToast } from "@/components/ui/toast";
import AppToast from "./Toast";
import { IAppToast } from "./type";

const useAppToast = () => {
  const toast = useToast();
  const show = (opt: IAppToast) => {
    toast.show({
      placement: "top",
      duration: 2000,
      render: () => <AppToast {...opt} />,
    });
  };

  return { show };
};

export default useAppToast;
