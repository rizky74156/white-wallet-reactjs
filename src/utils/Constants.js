import AppRouter from "../Routes/Subdomain";

export const APPS = [
  {
    subdomain: "www",
    app: AppRouter,
    main: true,
  },
  {
    subdomain: "admin",
    app: AppRouter,
    main: false,
  },
];

export default APPS;
