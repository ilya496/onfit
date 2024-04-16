import { QRCodeSVG } from "qrcode.react";

function Register() {
  const appStoreLink =
    "https://apps.apple.com/us/app/your-app-name/id1234567890";
  const playStoreLink =
    "https://play.google.com/store/apps/details?id=com.your.app.name";

  return (
    <div className="container">
      <h2 className="section-title">Register</h2>
      <p className="section-text">Register page content</p>
      <div className="qrcode-container">
        <div className="qrcode">
          <h3 className="qrcode__title">App Store:</h3>
          <QRCodeSVG value={appStoreLink} size={256} />
          <a
            href={appStoreLink}
            className="qrcode__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alternatively use this link
          </a>
        </div>

        <div className="qrcode">
          <h3 className="qrcode__title">Play Store:</h3>
          <QRCodeSVG value={playStoreLink} size={256} />
          <a
            href={playStoreLink}
            className="qrcode__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alternatively use this link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
