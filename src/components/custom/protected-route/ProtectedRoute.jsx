import Navigation from '../navigation/Navigation';
import { Outlet } from 'react-router-dom';


 const ProtectedRoute = () => {
  return ( 
  <div className='flex '>
    <div className='flex-[1.2] ring-1 ring-slate-200 min-h-screen text-white'>
 <Navigation/>
    </div>
    <div className='flex-[10.2] min-h-screen'>
       <Outlet/>
     </div>
  </div>
  )
};
export default ProtectedRoute;
