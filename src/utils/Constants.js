
import { AdminRouter, AppRouter } from '../Routes/Routes'

export const APPS =[
    {
        subdomain: "www",
        app : AppRouter,
        main : true,
    },
    {
        subdomain: "admin",
        app : AdminRouter,
        main : false,
    },
];

export default APPS
