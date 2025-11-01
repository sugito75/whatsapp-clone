export type RegisterDTO = {
  displayName: string;
  phone: string;
  password: string;
  profilePicture?: { type: string; name: string; uri: string };
  bio?: string;
};

export type LoginDTO = {
  phone: string;
  password: string;
};

export type LoginResponse = {
  message: string;
  data: {
    id: number;
    username: string;
    phone: string;
    profilePicture: string;
    bio: string;
    sessionId: string;
    accessToken: string;
    refreshToken: string;
  };
};
