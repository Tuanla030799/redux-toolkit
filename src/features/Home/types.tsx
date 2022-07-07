export interface Profile {
    id: string;
    name: string;
    gender: string;
    age: number
  }
  
  export interface State {
    loading: boolean;
    profiles: Profile[];
    errors: Errors;
  }
  
  export interface Errors {
    [key: string]: string | undefined;
  }