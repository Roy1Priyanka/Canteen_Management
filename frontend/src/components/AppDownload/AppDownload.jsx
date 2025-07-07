import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>For a better experience, do visit <br /> <strong>BCET Cafeteria</strong></p>

      <div className="app-download-platforms">
        <img
          src={assets.play_store}
          alt="Download from Play Store"
          className="app-download-icon"
        />
        <img
          src={assets.app_store}
          alt="Download from App Store"
          className="app-download-icon"
        />
      </div>
    </div>
  );
};

export default AppDownload;
