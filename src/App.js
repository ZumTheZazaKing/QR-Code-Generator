import { Context } from './Contexts/Context';

import { lazy, Suspense, useState } from 'react';


const Input = lazy(() => import('./Input').then(module => ({default:module.Input})));
const Output = lazy(() => import('./Output').then(module => ({default:module.Output})));

function App() {

  const [link, setLink] = useState("");
  const [qrImage, setQrImage] = useState("");
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("#000000");
  const [bgcolor, setBgcolor] = useState("#ffffff");

  return (
    <div className="App">
      <Suspense fallback={<h2>Loading...</h2>}>
        <Context.Provider value={{
          link, setLink, 
          qrImage, setQrImage,
          open, setOpen,
          color, setColor,
          bgcolor, setBgcolor
        }}>
          <Input/>
          <br/>
          <Output/>
        </Context.Provider>
      </Suspense>
    </div>
  );
}

export default App;
