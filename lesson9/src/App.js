import { Routes, Route } from "react-router";
import { UseCallBack } from "./pages/useExaples/callBack";
import { Home } from "./pages/home";
import { JustForm } from "./pages/formExaples/justForm";
import HookForm from "./pages/formExaples/hookForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useCallBack" element={<UseCallBack />} />
        <Route path="/form" element={<JustForm />} />
        <Route path="/hook-form" element={<HookForm />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
