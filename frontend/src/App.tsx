import React, { useState } from "react";
import NavBar from './components/NavBar';
import AllEntries from './routes/AllEntries';
import NewEntry from './routes/NewEntry';
import EditEntry from './routes/EditEntry';
import SettingsDialog from './components/SettingsDialog';
import { EntryProvider } from './utilities/globalContext';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  const [darkMode, setDarkMode] = useState(false); // State for dark mode
  const [isDialogOpen, setDialogOpen] = useState(false); // State for settings dialog

  return (
    <section className={darkMode ? 'dark' : ''}>
      <Router>
        <EntryProvider>
          <NavBar />
          {/* Add a settings button */}
          <div className="p-4">
            <button 
              className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded"
              onClick={() => setDialogOpen(true)}
            >
              Open Settings
            </button>
          </div>

          {/* Settings dialog */}
          {isDialogOpen && (
            <SettingsDialog
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              closeDialog={() => setDialogOpen(false)}
            />
          )}

          <Routes>
            <Route path="/" element={<AllEntries />} />
            <Route path="create" element={<NewEntry />} />
            <Route path="edit/:id" element={<EditEntry />} />
          </Routes>
        </EntryProvider>
      </Router>
    </section>
  );
}
