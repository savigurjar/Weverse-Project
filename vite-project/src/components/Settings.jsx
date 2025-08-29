import "../css/Settings.css";

function Settings() {
  return (
    <div className="settings-page">
      <h2 className="settings-title">Settings</h2>

      {/* Language Section */}
      <div className="settings-section">
        <label>Service Language</label>
        <select>
          <option>English</option>
          <option>Korean</option>
          <option>Japanese</option>
        </select>

        <label>Translated Language</label>
        <select>
          <option>English</option>
          <option>Korean</option>
          <option>Japanese</option>
        </select>

        <div className="toggle-row">
          <span>Translate (auto)</span>
          <input type="checkbox" defaultChecked />
        </div>
        <p className="hint">
          Some of the content posted by artists and fans will be auto-translated into the language selected.
        </p>
      </div>

      {/* Notification Section */}
      <div className="settings-section">
        <h3>Notification and service settings</h3>

        <div className="toggle-row">
          <span>Event & promotional alert settings</span>
          
        </div>

        <div className="toggle-row">
          <span>Display personalized ads and services</span>
          
        </div>
      </div>
    </div>
  );
}

export default Settings;
