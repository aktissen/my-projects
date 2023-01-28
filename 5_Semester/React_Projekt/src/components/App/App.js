import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home.js";
import BillOverview from "../BillOverview/BillOverview.js";
import VetProfile from "../VetProfile/VetProfile.js";
import AllAnimalsOverview from "../AllAnimalsOverview/AllAnimalsOverview.js";
import AnimalProfile from "../AnimalProfile/AnimalProfile.js";
import BillProfile from "../BillProfile/BillProfile.js";
import Animal from "../Animal/Animal.js";
import ChangeAnimal from "../ChangeAnimal/ChangeAnimal.js";
import AnimalBills from "../AnimalBills/AnimalBills.js";
import AnimalCheckups from "../AnimalCheckups/AnimalCheckups.js";
import ChangeCheckup from "../ChangeCheckup/ChangeCheckup.js";
import AnimalNotes from "../AnimalNotes/AnimalNotes.js";
import ChangeVet from "../ChangeVet/ChangeVet.js";
import Checkups from "../Checkups/Checkups.js";
import Notes from "../Notes/Notes.js";
import ChangeNotes from "../ChangeNotes/ChangeNotes.js";
import AddNewAnimal from "../AddNewAnimal/AddNewAnimal.js";
import AddCheckups from "../AddCheckups/AddCheckups.js";
import AddNotes from "../AddNotes/AddNotes.js";
import AddBills from "../AddBills/AddBills.js";
import ChangeBills from "../ChangeBills/ChangeBills.js";
import styles from "./App.css";
import DatabaseContextProvider from "../../context/databaseContext.js";

function App() {
  return (
    <div className={styles.BgContainer}>
      <DatabaseContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/billoverview" element={<BillOverview />} />
            <Route path="/vetprofile" element={<VetProfile />} />
            <Route path="/changevet" element={<ChangeVet />} />
            <Route
              path="/allanimalsoverview"
              element={<AllAnimalsOverview />}
            />
            <Route path="/animalprofile" element={<AnimalProfile />} />
            <Route path="/billprofile" element={<BillProfile />} />
            <Route path="/animal" element={<Animal />} />
            <Route path="/changeanimal" element={<ChangeAnimal />} />
            <Route path="/addnewanimal" element={<AddNewAnimal />} />
            <Route path="/animalcheckups" element={<AnimalCheckups />} />
            <Route path="/changecheckup" element={<ChangeCheckup />} />
            <Route path="/animalbills" element={<AnimalBills />} />
            <Route path="/animalnotes" element={<AnimalNotes />} />
            <Route path="/checkups" element={<Checkups />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/changenotes" element={<ChangeNotes />} />
            <Route path="/addcheckups" element={<AddCheckups />} />
            <Route path="/addnotes" element={<AddNotes />} />
            <Route path="/addbills" element={<AddBills />} />
            <Route path="/changebills" element={<ChangeBills />} />
          </Routes>
        </BrowserRouter>
      </DatabaseContextProvider>
    </div>
  );
}

export default App;
