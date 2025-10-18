export type RegisterDTO = {
  displayName: string;
  phone: string;
  password: string;
  profilePicture?: { type: string; name: string; uri: string };
  bio?: string;
};
