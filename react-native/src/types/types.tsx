export type RootDrawerParamList = {
    Home: undefined;
    MesCours: undefined;
    Profil: undefined;
  LoginPage: undefined;
    RegisterPage: undefined;
    BottomNav: undefined;
};

//// USER ///
 
export type UserType = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
};

  
///// LOGIN /////

  export type State = {
    isLoading: boolean;
    isSignout: boolean;
    userToken: string | null;
  };
  
 export type Action = 
    | { type: 'RESTORE_TOKEN'; token: string | null }
    | { type: 'SIGN_IN'; token: string }
    | { type: 'SIGN_OUT' };
  