import { NextPage } from 'next';

const LandingPage: NextPage = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Just Legal Solutions</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #0B132B;
        }
        .card {
            background-color: #1C2541;
            padding: 25px;
            border-radius: 15px;
            text-align: left;
            max-width: 420px;
            width: 100%;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5);
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }
        .top-profile-section {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }
        .logo-container {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 15px;
            flex-shrink: 0;
            background-color: white;
        }
        .business-logo {
            width: 100%;
            height: 100%;
            object-fit: contain;
            display: block;
        }
        .business-info {
            text-align: left;
        }
        .business-name {
            font-size: 26px;
            font-weight: bold;
            color: #FFFFFF;
            margin-bottom: -15px;
        }
        .business-title {
            font-size: 16px;
            color: #A8A8A8;
        }
        .info-section {
            text-align: left;
            padding-left: 4px;
            margin-bottom: 10px;
        }
        .info-section h1 {
            font-size: 28px;
            color: #FFFFFF;
            margin-bottom: 11px;
        }
        .tag-section {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: flex-start;
            padding-left: 5px;
            margin-bottom: 1px;
        }
        .tag-btn {
            display: inline-block;
            padding: 6px 12px;
            background-color: #374151;
            color: #E5E7EB;
            border-radius: 20px;
            font-size: 14px;
            margin-bottom: 5px;
        }
        .button-section {
            padding: 0;
        }
        .btn-container {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        .btn {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 25px;
            background-color: #2D3748;
            color: #fff;
            text-decoration: none;
            border-radius: 10px;
            font-size: 16px;
            transition: background-color 0.3s;
            border: none;
            cursor: pointer;
            position: relative;
            height: auto;
            min-height: 0;
            text-align: left;
        }
        .btn:hover {
            background-color: #4A5568;
        }
        .btn-icon {
            position: absolute;
            left: -20px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
        }
        .btn-icon img {
            width: 60px;
            height: 60px;
            display: block;
        }
        .btn-text {
            flex-grow: 1;
            text-align: left;
            padding-left: 50px;
            font-size: 16px;
        }
        .btn-arrow {
            color: #fff;
            font-size: 20px;
            transition: transform 0.3s;
            z-index: 2;
        }
        .btn:hover .btn-arrow {
            transform: translateX(5px);
        }
        .icon-contact img {
            width: 65px;
            height: 65px;
        }
        .icon-mail img {
            width: 60px;
            height: 60px;
        }
        .icon-phone img {
            width: 56px;
            height: 66px;
        }
        .icon-calendar img {
            width: 62px;
            height: 62px;
        }
        .icon-website img {
            width: 65px;
            height: 65px;
        }
    </style>
</head>
<body>
    <div class="card">
        <div class="top-profile-section">
            <div class="logo-container">
                <img src="/favicon1.svg" alt="Just Legal Solutions Logo" class="business-logo">
            </div>
            <div class="business-info">
                <div class="business-name">Just Legal Solutions</div>
            </div>
        </div>

        <div class="info-section">
            <h1>Joseph Iannazzi</h1>
            <div class="tag-section">
                <span class="tag-btn">Process Server</span>
                <span class="tag-btn">Legal Support</span>
            </div>
        </div>

        <div class="button-section">
            <div class="btn-container">
                <a href="/contact-details.vcf" download class="btn">
                    <span class="btn-icon icon-contact"><img src="/landingpage/icons/contact.svg" alt="Contact Icon"></span>
                    <span class="btn-text">Download my contact details</span>
                    <span class="btn-arrow">→</span>
                </a>
                <a href="mailto:Info@JustLegalSolutions.org" class="btn">
                    <span class="btn-icon icon-mail"><img src="/landingpage/icons/mail.svg" alt="Mail Icon"></span>
                    <span class="btn-text">Email</span>
                    <span class="btn-arrow">→</span>
                </a>
                <a href="tel:+15393676832" class="btn">
                    <span class="btn-icon icon-phone"><img src="/landingpage/icons/phone.svg" alt="Phone Icon"></span>
                    <span class="btn-text">Call</span>
                    <span class="btn-arrow">→</span>
                </a>
                <a href="/Landingpage/calendar" class="btn">
                    <span class="btn-icon icon-calendar"><img src="/landingpage/icons/calendar-reminder-icon.svg" alt="Calendar Icon"></span>
                    <span class="btn-text">Add a Reminder</span>
                    <span class="btn-arrow">→</span>
                </a>
                <a href="https://justlegalsolutions.org/" class="btn">
                    <span class="btn-icon icon-website"><img src="/landingpage/icons/website1.svg" alt="Website Icon"></span>
                    <span class="btn-text">Website</span>
                    <span class="btn-arrow">→</span>
                </a>
            </div>
        </div>
    </div>
</body>
</html>
    `}} />
  );
};

export default LandingPage;