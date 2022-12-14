
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Toaster></Toaster>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
