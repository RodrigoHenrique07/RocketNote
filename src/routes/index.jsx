import {BrowserRouter} from 'react-router-dom';
import { New } from '../pages/New';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes(){

    return(

    <BrowserRouter>
        <AuthRoutes/>
        
    </BrowserRouter> 

    )
}