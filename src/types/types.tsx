export type RootDrawerParamList = {
    Home: undefined;
    MesCours: undefined;
    Contact: { sort: 'latest' | 'top' } | undefined;
    LoginPage: undefined;
    Main: undefined;
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
  