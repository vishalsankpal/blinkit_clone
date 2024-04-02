import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import {
  clearCookie,
  getDataFromCookie,
  setDataInCookie,
} from "../services/Cookies.service";

interface UserProfile {
  id: number;
  token: string;
  refreshToken?: string;
  email: string;
  firstName: string;
  gender: string;
  image: string;
  lastName: string;
  username: string;
  // Add other properties if needed
}
interface Props {
  children?: ReactNode;
}
interface AuthContextType {
  onSaveSession: (data: UserProfile) => void;
  onSignOut: () => void;
  userProfile: UserProfile | null;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextProvider = ({ children }: Props): JSX.Element => {
  useEffect(() => {
    loadSession();
  }, []);
  const loadSession = () => {
    try {
      const profileData = getDataFromCookie("profile");
      if (profileData) {
        return JSON.parse(profileData);
      }
      return null;
    } catch (err) {
      return null;
    }
  };

  const [userProfile, setUserProfile] = useState<UserProfile | null>(
    loadSession()
  );
  const onSignOut = useCallback(() => {
    // clearCookie();
    clearCookie("profile");
    clearCookie("isLoggedIn");
    clearCookie("userToken");
    setUserProfile(null);
  }, []);
  const onSaveSession = useCallback((profileData: UserProfile) => {
    // console.log(token);
    // console.log(refreshToken);
    // console.log(profile);
    const { token, refreshToken, ...profile } = profileData;
    setDataInCookie("isLoggedIn", "true");
    setDataInCookie("userToken", token);
    //setDataInCookie("refreshUserToken", refreshToken);
    setDataInCookie("profile", JSON.stringify(profile));
    setUserProfile(profile);
    console.log("context", { userProfile });
  }, []);
  const value: AuthContextType = {
    onSaveSession,
    onSignOut,
    userProfile,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};
export default AuthContextProvider;
