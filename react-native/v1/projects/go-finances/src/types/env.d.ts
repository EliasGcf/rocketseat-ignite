declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string;
    OAUTH_REDIRECT_URI: string;
    OAUTH_GOOGLE_CLIENT_ID: string;
    OAUTH_GOOGLE_URL: string;
    OAUTH_GOOGLE_USER_INFO_URL: string;
  }
}
