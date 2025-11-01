import { config } from "@/constants/config";
import defaultIcon from "@/assets/images/default_icon.png";

const resolveIconUri = (name: string) => {
  if (!name) return defaultIcon;

  return { uri: `${config.API.BASE_URL}/icons/${name}` };
};

export default resolveIconUri;
