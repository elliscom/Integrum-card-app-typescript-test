import React from 'react';

interface SettingsDialogProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  closeDialog: () => void;
}

const SettingsDialog: React.FC<SettingsDialogProps> = ({ darkMode, setDarkMode, closeDialog }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Settings</h2>
        <div className="flex items-center justify-between mb-4">
          <label className="text-black dark:text-white">Dark Mode</label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={closeDialog}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SettingsDialog;
