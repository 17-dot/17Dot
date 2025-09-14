<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>17 Dot - Digital First Creative Agency</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body {
      margin: 0;
      font-family: 'Montserrat', Arial, sans-serif;
      background: linear-gradient(90deg, #0A0A0A 0%, #1C3C72 50%, #FF6B00 100%);
      color: #F9F9F9; /* White text for dark theme */
    }
    header {
      background: linear-gradient(90deg, #0A0A0A 0%, #1C3C72 50%, #FF6B00 100%);
      padding: 12px 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 2px 12px rgba(0,0,0,0.4);
    }
    .logo {
      font-size: 2.2rem;
      background: linear-gradient(90deg, #FF6B00, #F4C542);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
      letter-spacing: -2px;
    }
    .header-right {
      display: flex;
      align-items: center;
      gap: 24px;
    }
    .header-social a {
      margin-right: 10px;
      text-decoration: none;
      color: #F9F9F9; /* White */
      font-size: 1.15rem;
    }
    .header-social a:hover {
      color: #1C3C72; /* Hover color */
    }
    .header-hiring {
      font-weight: bold;
      color: #111;
      background: #fffbe5;
      border-radius: 5px;
      padding: 2px 12px;
      font-size: 1rem;
      display: flex;
      align-items: center;
      gap: 2px;
    }
    .header-hiring .dot {
      width: 8px;
      height: 8px;
      background: #29d918;
      border-radius: 50%;
      display: inline-block;
    }
    .hamburger {
      margin-left: 18px;
      width: 32px;
      height: 32px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 6px;
    }
    .hamburger .bar {
      width: 28px;
      height: 4px;
      background: #FF6B00; /* Orange */
      border-radius: 2px;
    }
    /* Hero Styles - Updated for dark theme */
    .hero {
      position: relative;
      width: 100%;
      min-height: 65vh;
      background: url('bg-city.jpg') center/cover no-repeat;
      padding: 60px 30px 40px 30px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.65); /* Dark overlay for better text visibility */
      pointer-events: none;
    }
    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 650px;
    }
    .hero-title {
      font-size: 3.8rem;
      font-weight: 900;
      margin-bottom: 8px;
      color: #F9F9F9; /* White */
    }
    .hero-title .creative {
      background: linear-gradient(90deg, #FF6B00, #F4C542);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero-desc {
      font-size: 1.3rem;
      color: #F9F9F9; /* White */
      margin-bottom: 25px;
      margin-top: 30px;
    }
    /* Video/Image Preview With X Button */
    .hero-media {
      width: 250px;
      height: 150px;
      margin-top: 18px;
      border-radius: 14px;
      overflow: hidden;
      display: inline-block;
      box-shadow: 0 2px 20px rgba(0,0,0,0.13);
      position: relative;
      background: #fa4;
    }
    .hero-media img,
    .hero-media video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .hero-media .close-media {
      position: absolute;
      top: 8px;
      right: 10px;
      background: rgba(255,255,255,0.75);
      border: none;
      border-radius: 50%;
      width: 28px;
      height: 28px;
      font-size: 1.25rem;
      color: #d91f37;
      cursor: pointer;
      z-index: 2;
      line-height: 28px;
      text-align: center;
    }
    /* Social Links Vertical */
    .social-vertical {
      position: absolute;
      right: 12px;
      top: 32vh;
      z-index: 10;
      height: 110px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: center;
    }
    .social-vertical span {
      font-size: 1rem;
      font-family: Arial, sans-serif;
      color: #F9F9F9; /* White */
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      margin-bottom: 10px;
      font-weight: 700;
      letter-spacing: 1px;
    }
    /* Chat Popup - Updated for theme */
    .chat-popup {
      position: fixed;
      right: 24px;
      bottom: 18px;
      background: #1C3C72; /* Dark blue */
      border-radius: 16px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.08);
      padding: 16px 20px;
      font-size: 1rem;
      color: #F9F9F9; /* White */
      z-index: 99;
      min-width: 230px;
      max-width: 330px;
      display: flex;
      align-items: center;
      gap: 14px;
      animation: fadeIn 0.5s;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px);}
      to   { opacity: 1; transform: translateY(0);}
    }
    .chat-popup .chat-img {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: #f7fbff;
      margin-right: 8px;
      object-fit: cover;
      border: 2px solid #eee;
    }
    .chat-popup .chat-close {
      position: absolute;
      top: 4px;
      right: 6px;
      background: #eee;
      border-radius: 50%;
      border: none;
      font-size: 1.1rem;
      cursor: pointer;
      padding: 1px 6px;
      color: #888;
    }
    @media (max-width:800px) {
      .hero-title { font-size: 2.4rem;}
      header { padding: 10px 12px;}
      .hero-content { max-width:95vw;}
    }

      @keyframes marquee {
    0% { transform: translateX(0);}
    100% { transform: translateX(-50%);}
  }
  #marquee {
    animation: marquee 30s linear infinite;
    will-change: transform;
    white-space: nowrap;
  }

    /* Performance Stats Section - Updated for theme */
    section[style*="background:#fff; text-align:center; padding:40px 10px 10px;"] {
      background: linear-gradient(90deg, #0A0A0A 0%, #1C3C72 50%, #FF6B00 100%);
      padding: 40px 10px 10px;
    }
    section[style*="background:#fff; text-align:center; padding:40px 10px 10px;"] span[style*="color:#F7B533;"] {
      color: #F4C542; /* Yellow accent */
    }
    section[style*="background:#fff; text-align:center; padding:40px 10px 10px;"] span[style*="color:#888;"] {
      color: #F9F9F9; /* White */
    }

    /* Intro & Description Section - Updated for theme */
    section[style*="background:#fff; text-align:center; padding:35px 12px 25px;"] {
      background: #1C3C72; /* Dark blue */
      padding: 35px 12px 25px;
    }
    section[style*="background:#fff; text-align:center; padding:35px 12px 25px;"] h2 {
      background: linear-gradient(90deg, #FF6B00, #F4C542);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    section[style*="background:#fff; text-align:center; padding:35px 12px 25px;"] p {
      color: #F9F9F9; /* White */
    }

    /* Showreel Stats Section - Updated for theme */
    section[style*="background:linear-gradient(90deg,#FF512F 0%,#F7B533 100%); color:#fff; padding:35px 0 0 0;"] {
      background: linear-gradient(90deg, #0A0A0A 0%, #1C3C72 50%, #FF6B00 100%);
      color: #F9F9F9;
    }

    /* Core Offerings Section - Updated for theme */
    section[style*="background:#fafafa; padding:32px 0;"] {
      background: #1C3C72;
    }
    section[style*="background:#fafafa; padding:32px 0;"] h2 {
      background: linear-gradient(90deg, #FF6B00, #F4C542);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    section[style*="background:#fafafa; padding:32px 0;"] p {
      color: #F9F9F9;
    }

    /* Services Icons Section - Updated for theme */
    section[style*="background:#fff; text-align:center; padding:38px 0;"] {
      background: linear-gradient(90deg, #0A0A0A 0%, #1C3C72 50%, #FF6B00 100%);
    }
    section[style*="background:#fff; text-align:center; padding:38px 0;"] h2 {
      background: linear-gradient(90deg, #FF6B00, #F4C542);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    section[style*="background:#fff; text-align:center; padding:38px 0;"] div[style*="color:#444;"] {
      color: #F9F9F9;
    }
    section[style*="background:#fff; text-align:center; padding:38px 0;"] div[style*="border-top:4px solid #F54D23;"] {
      border-top:4px solid #FF6B00; /* Orange */
    }

    /* Scorecard CTA - Updated for theme */
    section[style*="background:linear-gradient(90deg,#FF512F 0%,#F7B533 100%);padding:34px;text-align:center;"] {
      background: linear-gradient(90deg, #FF6B00, #F4C542);
    }
    section[style*="background:linear-gradient(90deg,#FF512F 0%,#F7B533 100%);padding:34px;text-align:center;"] button {
      background: transparent;
      border: 2px solid #F9F9F9;
      color: #F9F9F9;
    }
    section[style*="background:linear-gradient(90deg,#FF512F 0%,#F7B533 100%);padding:34px;text-align:center;"] button:hover {
      background: #1C3C72;
    }

    /* Brands Who Trust Us - Updated for theme */
    section[style*="background:#fff;padding:44px 0 20px 0;text-align:center;"] {
      background: #1C3C72;
    }
    section[style*="background:#fff;padding:44px 0 20px 0;text-align:center;"] h2 {
      background: linear-gradient(90deg, #FF6B00, #F4C542);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    /* Testimonials - Updated for theme */
    section[style*="background:#fff; padding:36px 0 32px 0;"] {
      background: linear-gradient(90deg, #0A0A0A 0%, #1C3C72 50%, #FF6B00 100%);
    }
    section[style*="background:#fff; padding:36px 0 32px 0;"] h2 {
      background: linear-gradient(90deg, #FF6B00, #F4C542);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    section[style*="background:#fff; padding:36px 0 32px 0;"] p {
      color: #F9F9F9;
    }

    /* Our Work - Updated for theme */
    section[style*="background:#fafafa;padding:44px 0 15px 0;text-align:center; max-width:1200px; margin:0 auto;"] {
      background: #1C3C72;
    }
    section[style*="background:#fafafa;padding:44px 0 15px 0;text-align:center; max-width:1200px; margin:0 auto;"] h2 {
      background: linear-gradient(90deg, #FF6B00, #F4C542);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    section[style*="background:#fafafa;padding:44px 0 15px 0;text-align:center; max-width:1200px; margin:0 auto;"] div[style*="color:#444;"] {
      color: #F9F9F9;
    }

    /* Industry Wise Case Studies - Updated for theme */
    section[style*="text-align:center; padding:40px 30px;"] {
      background: linear-gradient(90deg, #0A0A0A 0%, #1C3C72 50%, #FF6B00 100%);
    }
    section[style*="text-align:center; padding:40px 30px;"] h2 {
      background: linear-gradient(90deg, #FF6B00, #F4C542);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    section[style*="text-align:center; padding:40px 30px;"] div[style*="max-width:100px;"] div {
      color: #F9F9F9;
    }

    /* Connect With Us - Updated for theme */
    section[style*="display:flex;justify-content:space-between;align-items:center; padding:30px 60px; background:#f9f9fb;"] {
      background: #1C3C72;
    }
    section[style*="display:flex;justify-content:space-between;align-items:center; padding:30px 60px; background:#f9f9fb;"] h2 {
      color: #F4C542; /* Yellow */
    }
    section[style*="display:flex;justify-content:space-between;align-items:center; padding:30px 60px; background:#f9f9fb;"] ul li {
      color: #F9F9F9;
    }
    section[style*="display:flex;justify-content:space-between;align-items:center; padding:30px 60px; background:#f9f9fb;"] a {
      background: linear-gradient(90deg, #FF6B00, #F4C542) !important;
    }

    .gradient-text {
  /* font-size: 2.6rem; */
  font-size:1.1rem;
  font-weight: bold;
  /* background: linear-gradient(90deg, #0A0A0A 0%, #1C3C72 50%, #FF6B00 100%); */
  background:linear-gradient(90deg, #FF6B00, #F4C542);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

  </style>
</head>
<body>
  
  <!--Navbar!-->
  <div id="navbar-container"></div>
  
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="hero-title">
        Digital First <br>
        <span class="creative">Creative Agency</span>
      </div>
      <div class="hero-desc">
        A full suite digital marketing agency
      </div>
      <div class="hero-media" id="mediaPreview">
        <!-- <video src="./assets/images/17dott.mp4" alt="Preview Media"> -->
            <video src="./assets/images/17dott.mp4" style="width:100%;height:100%;object-fit:cover;"  autoplay muted loop playsinline></video>
        <button class="close-media" onclick="document.getElementById('mediaPreview').style.display='none'">&#10006;</button>
        <!-- If you use video, replace <img> with <video> -->
      </div>
    </div>
    <!-- <div class="social-vertical">
      <span>social links</span>
      <a href="#"><img src="instagram.png" alt="IG" width="22"></a>
      <a href="#"><img src="linkedin.png" alt="LI" width="22"></a>
    </div> -->
  </section>
  <div class="chat-popup">
    <img src="chat-photo.png" class="chat-img" alt="Chat">
    <span>Hi! I am Deep, Co-Founder of 17 Dot.<br>Let me help you :)</span>
    <button class="chat-close" onclick="this.parentElement.style.display='none'">&times;</button>
  </div>

  <div style="background:#fff; padding: 29px 40px; overflow: hidden; display:flex; align-items:center; height: 20vh;">
  <div style="border-left: 4px solid #1e90ff; padding-left: 10px; color: #444; font-weight: 600; white-space: nowrap; font-family: Arial, sans-serif; font-size: 1rem; flex-shrink: 0;">
    Our Clients From Different Sector : 
  </div>
  <div style="flex-grow: 1; overflow: hidden; margin-left: 40px; white-space: nowrap;">
    <div id="marquee" style="display: flex; gap: 60px; animation: marquee 40s linear infinite;">
      <img src="./assets/images/logo1png.png" style="height: 150px; width: 200px;" />
      <img src="./assets/images/logo2png.png" alt="ctrl" style="height: 150px; width: 200px;" />
      <img src="./assets/images/logo1png.png" alt="welink" style="height: 150px; width: 200px;" />
      <img src="./assets/images/logo2png.png" alt="mama" style="height: 150px; width: 200px;" />
      <img src="./assets/images/logo1png.png" alt="moha" style="height: 150px; width: 200px;"/>
      <!-- Repeat logos for seamless loop -->
      <img src="./assets/images/logo2png.png" alt="dellcube" style="height: 150px; width: 200px;" />
      <img src="./assets/images/logo1png.png" alt="ctrl" style="height: 150px; width: 200px;" />
      <img src="./assets/images/logo2png.png" alt="welink" style="height: 150px; width: 200px;" />
      <img src="./assets/images/logo1png.png" alt="mama" style="height: 150px; width: 200px;" />
      <img src="./assets/images/logo2png.png" alt="moha" style="height: 150px; width: 200px;" />
    </div>
  </div>
  <style>
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  </style>
</div>

<!-- Showreel Stats Section -->
<section style="background: linear-gradient(90deg, #0A0A0A 0%, #1C3C72 50%, #FF6B00 100%); color: #fff; padding: 35px 0 0 0; margin-bottom: 45px;">
  <div style="max-width: 1300px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;">
    <div style="min-width: 350px; padding-left: 35px;">
      <h2 style="font-size: 2.3rem; font-weight: 900; margin-bottom: 8px;">WATCH<br>OUR SHOWREEL</h2>
      <div style="display: flex; flex-wrap: wrap; gap: 32px; margin-top: 24px; font-size: 1.45rem;">
        <div>
          <strong style="color: #F4C542;">9+</strong><br><span style="font-size:1rem; color: #F9F9F9;">Years</span>
        </div>
        <div>
          <strong style="color: #F4C542;">65+</strong><br><span style="font-size:1rem; color: #F9F9F9;">Team Strength</span>
        </div>
        <div>
          <strong style="color: #F4C542;">400+</strong><br><span style="font-size:1rem; color: #F9F9F9;">Clients Served</span>
        </div>
        <div>
          <strong style="color: #F4C542;">5</strong><br><span style="font-size:1rem; color: #F9F9F9;">Continents served</span>
        </div>
        <div>
          <strong style="color: #F4C542;">25</strong><br><span style="font-size:1rem; color: #F9F9F9;">Brands Launched</span>
        </div>
        <div>
          <strong style="color: #F4C542;">30</strong><br><span style="font-size:1rem; color: #F9F9F9;">Global Clients</span>
        </div>
      </div>
    </div>
    <div style="min-width: 380px; margin-left: 20px;">
      <!-- Video or image preview placeholder -->
      <div style="position:relative; width:330px; height:200px; border-radius:22px; overflow:hidden; margin:0 auto; box-shadow:0 4px 22px rgba(255, 107, 0, 0.2);">
        <!-- <video src="./assets/images/17dott.mp4" alt="Showreel Preview" style="width:100%;height:100%;object-fit:cover;"></video> -->
                    <video src="./assets/images/17dott.mp4"style="width:100%;height:100%;object-fit:cover;"  autoplay muted loop playsinline></video>
        <!-- <button style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;border:none;border-radius:50%;width:54px;height:54px;font-size:2rem;color:#FF6B00;cursor:pointer;">
          ▶
        </button> -->
      </div>
    </div>
  </div>
</section>

<!--Our Services -->
<section style="padding: 1px 20px 40px 20px; background: #fffbe5; color: #1C3C72; width: 1351px; box-sizing: border-box;">
  <h2 style="font-weight: 700; font-size: 2.4rem; margin-bottom: 31px; text-align: center;">Our Services</h2>
  <div style="position: relative; max-width: 1300px; margin: 0 auto;">
    <button id="prevBtn"
      style="position: absolute; left: 0; top: 50%; transform: translateY(-50%); background: transparent; color: #1C3C72; border: none; font-size: 2rem; line-height: 1; cursor: pointer; padding: 0; z-index: 10;"
      aria-label="Previous">&#8592;</button>
    <div id="cardContainer" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; overflow: hidden;">
      <!-- Cards will be dynamically injected here -->
    </div>
    <button id="nextBtn"
      style="position: absolute; right: 0; top: 50%; transform: translateY(-50%); background: transparent; color: #1C3C72; border: none; font-size: 2rem; line-height: 1; cursor: pointer; padding: 0; z-index: 10;"
      aria-label="Next">&#8594;</button>
  </div>
</section>
<style>
  .service-card {
    background: #fff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: none;
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: default;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    min-height: 150px;
  }
  .service-card:hover {
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    transform: translateY(-5px);
  }
  .service-icon {
    font-size: 36px;
    color: #1C3C72;
    flex-shrink: 0;
    margin-right: 8px;
  }
  .service-content {
    flex-grow: 1;
  }
  .service-title {
    font-weight: 700;
    margin-bottom: 6px;
    font-size: 1.1rem;
  }
  .service-desc {
    font-weight: 400;
    font-size: 0.95rem;
    color: #555;
    margin-bottom: 12px;
  }
  .service-btn {
    background: #1C3C72;
    color: white;
    border-radius: 6px;
    padding: 11px 23px;
    font-weight: 700;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s;
    box-shadow: none;
  }
  .service-btn:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 12px rgba(28, 60, 114, 0.2);
  }
  #prevBtn, #nextBtn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    color: #1C3C72;
    border: none;
    font-size: 2rem;
    line-height: 1;
    cursor: pointer;
    padding: 0;
    z-index: 10;
  }
  #prevBtn { left: 0; }
  #nextBtn { right: 0; }
  #prevBtn:hover, #nextBtn:hover {
    color: #FF6B00;
    z-index: 11;
  }
</style>
<script>
  const servicesData = [
    { icon: "⚕", title: "Run a Clinic?", desc: "Manage appointments, digital records and more to modernize your clinic with Servora.", btnText: "See What Servora Offers" },
    { icon: "🚚", title: "In Logistics?", desc: "Fleet tracking, route optimization and delivery dashboards made simple.", btnText: "Explore Services" },
    { icon: "🛒", title: "Own a Store or Brand?", desc: "POS, inventory and Shopify automation to power your retail experience.", btnText: "Check Solutions" },
    { icon: "👕", title: "Tailoring Unit?", desc: "Manage orders, customer measurements and production with ease.", btnText: "See Features" },
    { icon: "🎓", title: "In Education?", desc: "Class scheduling, student portals and academic tools built for institutes.", btnText: "Check Tools" },
    { icon: "🍴", title: "Run a Restaurant?", desc: "Menus, orders and table management made effortless with Servora.", btnText: "See How It Works" },
    { icon: "⚙", title: "Service 7", desc: "Description for service 7", btnText: "Learn More" },
    { icon: "💼", title: "Service 8", desc: "Description for service 8", btnText: "Discover" },
    { icon: "🔧", title: "Service 9", desc: "Description for service 9", btnText: "See Details" },
        { icon: "⚕", title: "Run a Clinic?", desc: "Manage appointments, digital records and more to modernize your clinic with Servora.", btnText: "See What Servora Offers" },
    { icon: "🚚", title: "In Logistics?", desc: "Fleet tracking, route optimization and delivery dashboards made simple.", btnText: "Explore Services" },
    { icon: "🛒", title: "Own a Store or Brand?", desc: "POS, inventory and Shopify automation to power your retail experience.", btnText: "Check Solutions" },
    { icon: "👕", title: "Tailoring Unit?", desc: "Manage orders, customer measurements and production with ease.", btnText: "See Features" },
    { icon: "🎓", title: "In Education?", desc: "Class scheduling, student portals and academic tools built for institutes.", btnText: "Check Tools" },
    { icon: "🍴", title: "Run a Restaurant?", desc: "Menus, orders and table management made effortless with Servora.", btnText: "See How It Works" }
  ];
  const cardContainer = document.getElementById('cardContainer');
  let currentIndex = 0;
  const cardsPerPage = 9;
  function renderCards(index) {
    cardContainer.innerHTML = '';
    for (let i = index; i < index + cardsPerPage && i < servicesData.length; i++) {
      const s = servicesData[i];
      const card = document.createElement('div');
      card.className = 'service-card';
      card.innerHTML = `
        <span class="service-icon">${s.icon}</span>
        <div class="service-content">
          <h3 class="service-title">${s.title}</h3>
          <p class="service-desc">${s.desc}</p>
          <button class="service-btn">${s.btnText}</button>
        </div>
      `;
      cardContainer.appendChild(card);
    }
  }
  document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex -= cardsPerPage;
    if (currentIndex < 0) currentIndex = 0;
    renderCards(currentIndex);
  });
  document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex + cardsPerPage < servicesData.length) {
      currentIndex += cardsPerPage;
    }
    renderCards(currentIndex);
  });
  renderCards(currentIndex);
</script>


  <!-- Performance Stats Section -->
<section style="background:linear-gradient(90deg,#0A0A0A 0%,#1C3C72 50%,#FF6B00 100%);  text-align:center; padding:40px 10px 40px;">
  <div style="max-width:1100px; margin:0 auto; display:flex; gap:40px; justify-content:center; flex-wrap:wrap;">
    <div>
      <span style="font-size:2.6rem; font-weight:bold; color:#F4C542;">200K</span><br>
      <span style="font-size:1.1rem; color:#F9F9F9;">keywords ranked on<br>first page of Google</span>
    </div>
    <div>
      <span style="font-size:2.6rem; font-weight:bold; color:#F4C542;">5M+</span><br>
      <span style="font-size:1.1rem; color:#F9F9F9;">avg. organic engagements on<br>social for clients per month</span>
    </div>
    <div>
      <span style="font-size:2.6rem; font-weight:bold; color:#F4C542;">10M+</span><br>
      <span style="font-size:1.1rem; color:#F9F9F9;">cumulative website visits<br>for clients per month</span>
    </div>
    <div>
      <span style="font-size:2.6rem; font-weight:bold; color:#F4C542;">100M+</span><br>
      <span style="font-size:1.1rem; color:#F9F9F9;">cumulative INR revenue<br>collected for clients per month</span>
    </div>
  </div>
</section>

<!-- Intro & Description Section -->
<!-- <section style="background:#fff; text-align:center; padding:35px 12px 25px;">
  <h2 style="color:#F54D23; font-size:2.1rem; font-weight:700; margin-bottom:10px;">
    We’re An ROI Driven Digital Marketing Agency In Mumbai &lt;3
  </h2>
  <p style="max-width:820px; margin:20px auto 10px; font-size:1.16rem; color:#444;">
    We’re a boutique digital marketing company & agency in Mumbai offering integrated digital marketing services.
  </p>
  <p style="max-width:820px; margin:10px auto; font-size:1.1rem; color:#444;">
    We offer end to end digital marketing services, right from content production for digital & offline, technology & UI UX design services, branding & marketing execution using activities like SEO, Social Media & Influencer Management, Ads on Google & Social Channels, Programmatic & Affiliate Marketing, Email Marketing & Marketing Automation and much more.
  </p>
  <p style="max-width:820px; margin:10px auto; font-size:1.04rem; color:#444;">
    We’ve worked with 400+ startups & established brands since 2015, and the rich experience from the hundreds of social media campaigns, thousands of keywords ranked on the first page of Google, plentiful of motion & static content produced, millions of sessions recorded, crores of media money spent & revenues generated for them – have strengthened us as a new age digital marketing agency.
  </p>
</section> -->

<!-- Core Offerings Section -->
<section style="background:#fafafa; padding:25px 0;">
  <div style="max-width:1200px; margin:0 auto;">
    <h2 style="text-align:center; font-size:2.1rem; font-weight:700; margin-bottom:8px; background:linear-gradient(90deg,#F54D23 30%,#F7B533 70%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Our Core Offerings</h2>
    <div style="text-align:center; color:#999; margin-bottom:28px;font-size:1.12rem;">Executive Menu</div>
    <div style="display:flex; justify-content:center; align-items:flex-start; gap:16px; flex-wrap:wrap; margin-bottom: 40px;">
      <div style="flex:1; min-width:290px; text-align:center; border-right:1px solid #eee;">
        <img src="icon-storytelling.svg" alt="Creative Storytelling" style="height:48px; margin-bottom:18px;">
        <h3 style="color:#444; font-weight:700; margin-bottom:10px;">Creative Storytelling</h3>
        <p style="color:#666;max-width:330px;margin:0 auto;">
          We deliver creative campaigns to build a stronger top of funnel for your business. Right from your brand & content strategy to influencers & video production, we take care of it all. Our campaigns have won awards too!
        </p>
      </div>
      <div style="flex:1; min-width:290px; text-align:center;">
        <img src="icon-seo.svg" alt="SEO & Technology Enablement" style="height:48px; margin-bottom:18px;">
        <h3 style="color:#444; font-weight:700; margin-bottom:10px;">SEO & Technology Enablement</h3>
        <p style="color:#666;max-width:330px;margin:0 auto;">
          We’re great at SEO and rank for the most competitive terms in digital domain ourselves! To drive great SEO results, we’ve built a robust tech team. We build word class websites as well as maintain websites to ensure your business creates the right first impression.
        </p>
      </div>
    </div>
        <div style="display:flex; justify-content:center; align-items:flex-start; gap:16px; flex-wrap:wrap;">
      <div style="flex:1; min-width:290px; text-align:center; border-right:1px solid #eee;">
        <img src="icon-storytelling.svg" alt="Creative Storytelling" style="height:48px; margin-bottom:18px;">
        <h3 style="color:#444; font-weight:700; margin-bottom:10px;">Creative Storytelling</h3>
        <p style="color:#666;max-width:330px;margin:0 auto;">
          We deliver creative campaigns to build a stronger top of funnel for your business. Right from your brand & content strategy to influencers & video production, we take care of it all. Our campaigns have won awards too!
        </p>
      </div>
      <div style="flex:1; min-width:290px; text-align:center;">
        <img src="icon-seo.svg" alt="SEO & Technology Enablement" style="height:48px; margin-bottom:18px;">
        <h3 style="color:#444; font-weight:700; margin-bottom:10px;">SEO & Technology Enablement</h3>
        <p style="color:#666;max-width:330px;margin:0 auto;">
          We’re great at SEO and rank for the most competitive terms in digital domain ourselves! To drive great SEO results, we’ve built a robust tech team. We build word class websites as well as maintain websites to ensure your business creates the right first impression.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Services Icons Section -->
<!-- <section style="background:#fff; text-align:center; padding:38px 0;">
  <div style="max-width:1200px; margin:0 auto;">
    <h2 style="font-size:2rem; font-weight:700; background:linear-gradient(90deg,#F54D23 30%,#F7B533 70%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Our Services</h2>
    <div style="color:#999; margin-bottom:45px; font-size:1.15rem;">End to End Digital Marketing Services Agency</div>
    <div style="display:flex; gap:55px; justify-content:center; align-items:flex-start; flex-wrap:wrap; margin-bottom:32px;">
      <div style="min-width:140px;">
        <img src="icon-social-media.svg" alt="Social Media Marketing" style="height:52px;">
        <div style="border-top:4px solid #F54D23; width:36px; margin:8px auto 16px;"></div>
        <div style="color:#444; font-weight:600;">Social Media Marketing</div>
      </div>
      <div style="min-width:140px;">
        <img src="icon-design.svg" alt="Design & Branding" style="height:52px;">
        <div style="border-top:4px solid #F54D23; width:36px; margin:8px auto 16px;"></div>
        <div style="color:#444; font-weight:600;">Design & Branding</div>
      </div>
      <div style="min-width:140px;">
        <img src="icon-seo.svg" alt="Search Engine Optimization" style="height:52px;">
        <div style="border-top:4px solid #F54D23; width:36px; margin:8px auto 16px;"></div>
        <div style="color:#444; font-weight:600;">Search Engine Optimization</div>
      </div>
      <div style="min-width:140px;">
        <img src="icon-paid-ads.svg" alt="Paid Advertising" style="height:52px;">
        <div style="border-top:4px solid #F54D23; width:36px; margin:8px auto 16px;"></div>
        <div style="color:#444; font-weight:600;">Paid Advertising using Google Ads, Social</div>
      </div>
      <div style="min-width:140px;">
        <img src="icon-mobile.svg" alt="Mobile Marketing" style="height:52px;">
        <div style="border-top:4px solid #F54D23; width:36px; margin:8px auto 16px;"></div>
        <div style="color:#444; font-weight:600;">Mobile Marketing</div>
      </div>
      <div style="min-width:140px;">
        <img src="icon-email.svg" alt="Email Marketing" style="height:52px;">
        <div style="border-top:4px solid #F54D23; width:36px; margin:8px auto 16px;"></div>
        <div style="color:#444; font-weight:600;">Email Marketing</div>
      </div>
    </div>
    <div style="display:flex; gap:10px; justify-content:center;">
      <span style="width:12px;height:12px;background:#ddd;border-radius:50%;display:inline-block;"></span>
      <span style="width:12px;height:12px;background:#F54D23;border-radius:50%;display:inline-block;"></span>
      <span style="width:12px;height:12px;background:#ddd;border-radius:50%;display:inline-block;"></span>
    </div>
  </div>
</section> -->

<!-- Scorecard CTA -->
<section style="background:linear-gradient(90deg,#0A0A0A 0%,#1C3C72 50%,#FF6B00 100%); padding:34px;text-align:center;">
  <h3 style="color:#fff;font-size:1.12rem;">Need help in choosing a digital agency? Here’s an unbiased scorecard you could use to narrow down on the agency that’s right for your needs.</h3>
  <button style="margin-top:18px;padding:10px 32px;background:none;border:2px solid #fff;border-radius:4px;color:#fff;font-weight:600;font-size:1.08rem;cursor:pointer;letter-spacing:2px;">Try Now</button>
</section>

<!-- Brands Who Trust Us -->
<!-- <section style="background:#fff;padding:44px 0 20px 0;text-align:center;">
  <h2 style="background:linear-gradient(90deg,#F54D23,#F7B533);-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:inline;font-size:2rem;font-weight:bold;margin-bottom:8px;">Brands Who Trust Us</h2>
  <div style="color:#888;font-size:1.15rem;margin-bottom:36px;">Here’s who we've been serving value meals to since over 8 years</div>
  <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:28px;">
    <img src="logo-jio.png" alt="Jio" style="height:54px;background:#fff;padding:8px;border-radius:8px;">
    <img src="logo-bajaj.png" alt="Bajaj" style="height:54px;background:#fff;padding:8px;border-radius:8px;">
    <img src="logo-tata-motors.png" alt="Tata Motors" style="height:54px;background:#fff;padding:8px;border-radius:8px;">
    <img src="logo-tata-housing.png" alt="Tata Housing" style="height:54px;background:#fff;padding:8px;border-radius:8px;">
    <img src="logo-hindustan.png" alt="Hindustan Platinum" style="height:54px;background:#fff;padding:8px;border-radius:8px;">
    <img src="logo-rbl.png" alt="RBL Bank" style="height:54px;background:#fff;padding:8px;border-radius:8px;">
    <img src="logo-eris.png" alt="Eris" style="height:54px;background:#fff;padding:8px;border-radius:8px;">
    <img src="logo-lupin.png" alt="Lupin" style="height:54px;background:#fff;padding:8px;border-radius:8px;">
    <img src="logo-jubilant.png" alt="Jubilant" style="height:54px;background:#fff;padding:8px;border-radius:8px;">
    <img src="logo-justintime.png" alt="Just In Time" style="height:54px;background:#fff;padding:8px;border-radius:8px;">
    <img src="logo-ram.png" alt="Ram Bandhu" style="height:54px;background:#fff;padding:8px;border-radius:8px;">
    <img src="logo-pfchangs.png" alt="PF Changs" style="height:54px;background:#fff;padding:8px;border-radius:8px;">
    <img src="logo-somaiya.png" alt="Somaiya" style="height:54px;background:#fff;padding:8px;border-radius:8px;">
  </div>
</section> -->

<!-- Our Work -->
<!-- <section style="background:#fffbe5;padding:44px 0 25px 0;text-align:center; width: 1351px; margin:0 auto;">
  <h2 style="background:linear-gradient(90deg,#F54D23,#F7B533);-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:inline;font-size:2rem;font-weight:bold; margin-bottom:15px;">Our Work</h2>
  <div style="color:#888;font-size:1.1rem;margin-bottom:20px;">Winning Recipes</div>
  
  <div style="display:flex;justify-content:center;align-items:center;gap:44px;flex-wrap:wrap;">
    <div style="flex:1; min-width:320px; max-width:520px;">
      <img src="assets/images/default-impact-stories.jpeg" alt="Venture Catalysts" style="width:100%; height:auto; border-radius:12px; object-fit:cover;">
    </div>
    <div style="flex:1; min-width:320px; max-width:520px; color:#444; font-weight:500; font-size:1.22rem; text-align:left;">
      Generated 21,000+ Leads for a Leading Venture Capital Company by Reducing the CPL by 40% | Venture Catalysts
      <a href="#" style="font-size:1rem; color:#666; text-decoration:none; border-bottom:2px solid #222; padding-bottom:2px; margin-top:8px; display:inline-block;">View Case Study</a>
    </div>
  </div>
  <div style="display:flex;justify-content:center;align-items:center;gap:44px;flex-wrap:wrap; margin-top:10px;">
    <div style="flex:1; min-width:320px; max-width:520px; color:#444; font-weight:500; font-size:1.22rem; text-align:left;">
      2X Organic Traffic Growth Using SEO for Phillips Machine Tools<br>
      <a href="#" style="font-size:1rem; color:#666; text-decoration:none; border-bottom:2px solid #222; padding-bottom:2px; margin-top:8px; display:inline-block;">View Case Study</a>
    </div>
    <div style="flex:1; min-width:320px; max-width:520px;">
      <img src="assets/images/default-impact-stories.jpeg" alt="Phillips Case" style="width:100%; height:auto; border-radius:12px; object-fit:cover;">
    </div>
  </div>
</section> -->

<section style="background: #F5F5F7; padding: 30px 0 30px 0; ;">
    <!-- <h2 style="margin-left: 610px;  background:linear-gradient(90deg,#F54D23,#F7B533);-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:inline;font-size:2rem;font-weight:bold; margin-bottom:25px;">Our Work</h2> -->
    <h2 style="margin:0 auto 10px auto; display:block; width:fit-content; text-align:center; background:linear-gradient(90deg,#F54A23,#F7B533); -webkit-background-clip:text; -webkit-text-fill-color:transparent; font-size:2rem; font-weight:bold;">
  Our Work
</h2>

    <div style="text-align:center; color:#525661; font-size:1.25rem; margin-bottom:44px;">
    We didn’t just build websites, we built confidence, clarity, and conversions. Every case you <br>
    see here started with a bold idea and ended with measurable growth.
  </div>
  <div style="max-width:1350px; margin:0 auto; padding:0 0;">
    <div style="display:flex; flex-direction:column; gap:34px;">
      <!-- Top marquee row: cards move left -->
      <div id="topMarqueeRow" style="overflow:hidden; width:100%; position:relative; height:370px;">
        <div id="topMarqueeInner" style="display:flex; gap:34px; animation: marquee-left 28s linear infinite;">
          <!-- ALL cards, UPDATED width/height and NO curve edges -->
          <div style="width:620px;height:320px;background:#efeafe;box-shadow:0 4px 24px rgba(44,55,66,0.09);padding:16px;display:flex;align-items:center;justify-content:center;border-radius:0;">
            <img src="./assets/images/case1.png" style="width:100%;height:100%;object-fit:cover;border-radius:0;">
          </div>
          <div style="width:620px;height:320px;background:#ffe7ed;box-shadow:0 4px 24px rgba(44,55,66,0.09);padding:16px;display:flex;align-items:center;justify-content:center;border-radius:0;">
            <img src="./assets/images/case2.png" style="width:100%;height:100%;object-fit:cover;border-radius:0;">
          </div>
          <div style="width:620px;height:320px;background:#eaeaff;box-shadow:0 4px 24px rgba(44,55,66,0.09);padding:16px;display:flex;align-items:center;justify-content:center;border-radius:0;">
            <img src="./assets/images/case3.png" style="width:100%;height:100%;object-fit:cover;border-radius:0;">
          </div>
          <div style="width:620px;height:320px;background:#ffeedd;box-shadow:0 4px 24px rgba(44,55,66,0.09);padding:16px;display:flex;align-items:center;justify-content:center;border-radius:0;">
            <img src="./assets/images/case4.png" style="width:100%;height:100%;object-fit:cover;border-radius:0;">
          </div>
          <!-- Duplicate all for seamless marquee effect -->
          <div style="width:620px;height:320px;background:#efeafe;box-shadow:0 4px 24px rgba(44,55,66,0.09);padding:16px;display:flex;align-items:center;justify-content:center;border-radius:0;">
            <img src="./assets/images/case1.png" style="width:100%;height:100%;object-fit:cover;border-radius:0;">
          </div>
          <div style="width:620px;height:320px;background:#ffe7ed;box-shadow:0 4px 24px rgba(44,55,66,0.09);padding:16px;display:flex;align-items:center;justify-content:center;border-radius:0;">
            <img src="./assets/images/case2.png" style="width:100%;height:100%;object-fit:cover;border-radius:0;">
          </div>
          <div style="width:620px;height:320px;background:#eaeaff;box-shadow:0 4px 24px rgba(44,55,66,0.09);padding:16px;display:flex;align-items:center;justify-content:center;border-radius:0;">
            <img src="./assets/images/case3.png" style="width:100%;height:100%;object-fit:cover;border-radius:0;">
          </div>
          <div style="width:620px;height:320px;background:#ffeedd;box-shadow:0 4px 24px rgba(44,55,66,0.09);padding:16px;display:flex;align-items:center;justify-content:center;border-radius:0;">
            <img src="./assets/images/case4.png" style="width:100%;height:100%;object-fit:cover;border-radius:0;">
          </div>
        </div>
      </div>
      <!-- Bottom marquee row: cards move right -->
      <div id="bottomMarqueeRow" style="overflow:hidden; width:100%; position:relative; height:350px;">
        <div id="bottomMarqueeInner" style="display:flex; gap:34px; animation: marquee-right 28s linear infinite;">
          <div style="width:620px;height:320px;background:#ffeedd;box-shadow:0 4px 24px rgba(44,55,66,0.09);padding:16px;display:flex;align-items:center;justify-content:center;border-radius:0;">
            <img src="./assets/images/case5.png" style="width:100%;height:100%;object-fit:cover;border-radius:0;">
          </div>
          <div style="width:620px;height:320px;background:#efeafe;box-shadow:0 4px 24px rgba(44,55,66,0.09);padding:16px;display:flex;align-items:center;justify-content:center;border-radius:0;">
            <img src="./assets/images/case6.png" style="width:100%;height:100%;object-fit:cover;border-radius:0;">
          </div>
          <div style="width:620px;height:320px;background:#ffe7ed;box-shadow:0 4px 24px rgba(44,55,66,0.09);padding:16px;display:flex;align-items:center;justify-content:center;border-radius:0;">
            <img src="./assets/images/case7.png" style="width:100%;height:100%;object-fit:cover;border-radius:0;">
          </div>
          <div style="width:620px;height:320px;background:#eaeaff;box-shadow:0 4px 24px rgba(44,55,66,0.09);padding:16px;display:flex;align-items:center;justify-content:center;border-radius:0;">
            <img src="./assets/images/case8.png" style="width:100%;height:100%;object-fit:cover;border-radius:0;">
          </div>
          <!-- Duplicate all for seamless marquee effect -->
          <div style="width:620px;height:320px;background:#ffeedd;box-shadow:0 4px 24px rgba(44,55,66,0.09);padding:16px;display:flex;align-items:center;justify-content:center;border-radius:0;">
            <img src="./assets/images/case5.png" style="width:100%;height:100%;object-fit:cover;border-radius:0;">
          </div>
          <div style="width:620px;height:320px;background:#efeafe;box-shadow:0 4px 24px rgba(44,55,66,0.09);padding:16px;display:flex;align-items:center;justify-content:center;border-radius:0;">
            <img src="./assets/images/case6.png" style="width:100%;height:100%;object-fit:cover;border-radius:0;">
          </div>
          <div style="width:620px;height:320px;background:#ffe7ed;box-shadow:0 4px 24px rgba(44,55,66,0.09);padding:16px;display:flex;align-items:center;justify-content:center;border-radius:0;">
            <img src="./assets/images/case7.png" style="width:100%;height:100%;object-fit:cover;border-radius:0;">
          </div>
          <div style="width:620px;height:320px;background:#eaeaff;box-shadow:0 4px 24px rgba(44,55,66,0.09);padding:16px;display:flex;align-items:center;justify-content:center;border-radius:0;">
            <img src="./assets/images/case8.png" style="width:100%;height:100%;object-fit:cover;border-radius:0;">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style="text-align:center; margin-top:42px;">
    <button style="background: #453c39; color: #fff; font-size:1.1rem; font-weight:600; border:none; border-radius:22px; padding: 13px 44px; cursor:pointer; box-shadow:0 4px 12px rgba(34,27,22,0.13); transition:background 0.3s;">
      <a href="works.html" style="background: #453c39; color: #fff; font-size:1.1rem; font-weight:600; border:none; border-radius:22px;  cursor:pointer; box-shadow:0 4px 12px rgba(34,27,22,0.13); transition:background 0.3s; text-decoration: none ;">See our Work</a>
    </button>
  </div>
  <style>
    @keyframes marquee-left {
      0% { transform: translateX(0);}
      100% { transform: translateX(-50%);}
    }
    @keyframes marquee-right {
      0% { transform: translateX(-50%);}
      100% { transform: translateX(0);}
    }
    #topMarqueeRow, #bottomMarqueeRow { height:320px;}
    #topMarqueeInner>div, #bottomMarqueeInner>div { width:620px; height:320px; min-width:620px; }
    #topMarqueeInner img, #bottomMarqueeInner img { height:100%; width:100%; object-fit:cover; border-radius:0; }
    @media (max-width:1200px) {
      #topMarqueeRow, #bottomMarqueeRow { height:200px;}
      #topMarqueeInner>div, #bottomMarqueeInner>div { min-width:240px; width:240px; height:200px;}
      #topMarqueeInner img, #bottomMarqueeInner img { height:100%; width:100%; }
    }
  </style>
</section>


<!-- Our Testimonial-->
<section style="background:#fff; padding:36px 0 32px 0;">
  <h2 style="background:linear-gradient(90deg,#F54D23,#F7B533);-webkit-background-clip:text;-webkit-text-fill-color:transparent; display:block; margin: 0 auto; width: fit-content; font-size:2rem; font-weight:bold;">Testimonials</h2>
  <div style="display:flex;justify-content:center;align-items:flex-start;gap:60px;max-width:1200px;margin:36px auto 0;">
    <!-- Scrollable Left Testimonial Section -->
    <div style="flex:1; text-align:center; position: relative;">
      <button id="prevTest" style="position: absolute; top: 45%; left: 0; background: transparent; border: none; font-size: 2rem; cursor: pointer; color: #F54D23;">&#8592;</button>
      <div id="testimonialContent" style="padding: 0 40px; min-height: 300px;">
        <!-- Testimonial info dynamically inserted here -->
      </div>
      <button id="nextTest" style="position: absolute; top: 45%; right: 0; background: transparent; border: none; font-size: 2rem; cursor: pointer; color: #F54D23;">&#8594;</button>
    </div>
    <!-- Client Avatars Grid on Right -->
    <div style="flex:1;text-align:center;">
      <h3 style="background:linear-gradient(90deg,#F54D23,#F7B533);-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:inline;margin: 0 auto; width: fit-content;font-size:1.32rem;font-weight:700;">Hear It From Our Clients</h3>
      <div style="margin-top:24px;display:grid;grid-template-columns:repeat(4,130px);grid-gap:24px; grid-auto-rows:150px;">
        <!-- Replace these with avatar images -->
        <img src="./assets/images/logo1png.png" alt="Client 1" style="width: 100%; max-width: 150px; height: auto; object-fit: contain; border-radius: 50%;">
                <img src="./assets/images/logo2png.png" alt="Client 1" style="width: 100%; max-width: 150px; height: auto; object-fit: contain; border-radius: 50%;">
                        <img src="./assets/images/logo1png.png" alt="Client 1" style="width: 100%; max-width: 150px; height: auto; object-fit: contain; border-radius: 50%;">
                                <img src="./assets/images/logo2png.png" alt="Client 1" style="width: 100%; max-width: 150px; height: auto; object-fit: contain; border-radius: 50%;">
                                        <img src="./assets/images/logo1png.png" alt="Client 1" style="width: 100%; max-width: 150px; height: auto; object-fit: contain; border-radius: 50%;">
                                                <img src="./assets/images/logo2png.png" alt="Client 1" style="width: 100%; max-width: 150px; height: auto; object-fit: contain; border-radius: 50%;">
                                                        <img src="./assets/images/logo1png.png" alt="Client 1" style="width: 100%; max-width: 150px; height: auto; object-fit: contain; border-radius: 50%;">
                                                                <img src="./assets/images/logo2png.png" alt="Client 1" style="width: 100%; max-width: 150px; height: auto; object-fit: contain; border-radius: 50%;">
    </div>
  </div>
</section>

<script>
  const testimonials = [
    {
      name: "Ileena Fernandes",
      title: "Marketing Manager - Business Standard",
      quote: "I associated with 17 Dot for the SEO campaigns we were planning to run for Business Standard. In a highly competitive & sensitive space of publications in India, Business Standard has always been one of the best and we wanted to consistently hold on to...",
      image: "./assets/images/default-impact-stories.jpeg"
    },
    {
      name: "Rajesh Kumar",
      title: "CEO - Tech Innovations",
      quote: "17 Dot helped us drastically improve our digital presence by revamping our SEO and social media strategies. Their team is proactive and extremely knowledgeable.",
      image: "./assets/images/default-impact-stories2.jpeg"
    },
    {
      name: "Parvati Singh",
      title: "Founder - Creative Co.",
      quote: "Working with 17 Dot was a game-changer for our brand awareness and customer engagement. Their creative storytelling truly sets them apart.",
      image: "./assets/images/default-impact-stories3.jpeg"
    }
  ];

  let currentIndexs = 0;
  const testimonialContent = document.getElementById('testimonialContent');
  const prevBtn = document.getElementById('prevTest');
  const nextBtn = document.getElementById('nextTest');

  function renderTestimonial(index) {
    const t = testimonials[index];
    testimonialContent.innerHTML = `
      <img src="${t.image}" alt="${t.name}" style="width:140px;height:140px;border-radius:50%;border:5px solid #F54D23;margin-bottom:12px;">
      <h3 style="font-weight:700; margin-bottom:4px; font-size:1.3rem;">${t.name}</h3>
      <div style="color:#888; font-size:1rem; margin-bottom:14px;">${t.title}</div>
      <div style="font-size:2.3rem; color:#F54D23; line-height:0.2;">&ldquo;</div>
      <p style="font-size:1.06rem; color:#444; max-width:340px; margin:0 auto;">${t.quote}</p>
    `;
  }

  prevBtn.addEventListener('click', () => {
    currentIndexs -= 1;
    if(currentIndexs < 0) currentIndexs = testimonials.length - 1;
    renderTestimonial(currentIndexs);
  });
  nextBtn.addEventListener('click', () => {
    currentIndexs += 1;
    if(currentIndexs >= testimonials.length) currentIndexs = 0;
    renderTestimonial(currentIndexs);
  });

  renderTestimonial(currentIndexs);
</script>


<!--Industry Wise Case Studies-->
<!-- <section style="text-align:center; padding:40px 30px;">
  <h2 style="font-size:2rem; font-weight:bold; background: linear-gradient(to right, #f04711, #f7b533); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom:24px;">Industry Wise Case Studies</h2>
  <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:28px; max-width:1100px; margin:auto;">
    <div style="max-width:100px;">
      <img src="icon-automobile.svg" alt="Automobile" style="width:64px; height:64px; margin-bottom:12px; filter: brightness(0) saturate(100%) invert(25%) sepia(40%) saturate(428%) hue-rotate(4deg) brightness(95%) contrast(86%);">
      <div>Automobile</div>
    </div>
    <div style="max-width:100px;">
      <img src="icon-realestate.svg" alt="Real Estate" style="width:64px; height:64px; margin-bottom:12px; filter: brightness(0) saturate(100%) invert(25%) sepia(40%) saturate(428%) hue-rotate(4deg) brightness(95%) contrast(86%);">
      <div>Real Estate</div>
    </div>
    <div style="max-width:100px;">
      <img src="icon-beauty.svg" alt="Beauty" style="width:64px; height:64px; margin-bottom:12px; filter: brightness(0) saturate(100%) invert(25%) sepia(40%) saturate(428%) hue-rotate(4deg) brightness(95%) contrast(86%);">
      <div>Beauty</div>
    </div>
    <div style="max-width:100px;">
      <img src="icon-bfsi.svg" alt="BFSI" style="width:64px; height:64px; margin-bottom:12px; filter: brightness(0) saturate(100%) invert(25%) sepia(40%) saturate(428%) hue-rotate(4deg) brightness(95%) contrast(86%);">
      <div>BFSI</div>
    </div>
    <div style="max-width:100px;">
      <img src="icon-socialwelfare.svg" alt="Social Welfare" style="width:64px; height:64px; margin-bottom:12px; filter: brightness(0) saturate(100%) invert(25%) sepia(40%) saturate(428%) hue-rotate(4deg) brightness(95%) contrast(86%);">
      <div>Social Welfare</div>
    </div>
    <div style="max-width:100px;">
      <img src="icon-education.svg" alt="Education" style="width:64px; height:64px; margin-bottom:12px; filter: brightness(0) saturate(100%) invert(25%) sepia(40%) saturate(428%) hue-rotate(4deg) brightness(95%) contrast(86%);">
      <div>Education</div>
    </div>
    <div style="max-width:100px;">
      <img src="icon-healthfitness.svg" alt="Health & Fitness" style="width:64px; height:64px; margin-bottom:12px; filter: brightness(0) saturate(100%) invert(25%) sepia(40%) saturate(428%) hue-rotate(4deg) brightness(95%) contrast(86%);">
      <div>Health & Fitness</div>
    </div>
    <div style="max-width:100px;">
      <img src="icon-foodnutrition.svg" alt="Food & Nutrition" style="width:64px; height:64px; margin-bottom:12px; filter: brightness(0) saturate(100%) invert(25%) sepia(40%) saturate(428%) hue-rotate(4deg) brightness(95%) contrast(86%);">
      <div>Food & Nutrition</div>
    </div>
    <div style="max-width:100px;">
      <img src="icon-lifestyle.svg" alt="Lifestyle & Entertainment" style="width:64px; height:64px; margin-bottom:12px; filter: brightness(0) saturate(100%) invert(25%) sepia(40%) saturate(428%) hue-rotate(4deg) brightness(95%) contrast(86%);">
      <div>Lifestyle & Entertainment</div>
    </div>
    <div style="max-width:100px;">
      <img src="icon-shipping.svg" alt="Shipping & Logistics" style="width:64px; height:64px; margin-bottom:12px; filter: brightness(0) saturate(100%) invert(25%) sepia(40%) saturate(428%) hue-rotate(4deg) brightness(95%) contrast(86%);">
      <div>Shipping & Logistics</div>
    </div>
    <div style="max-width:100px;">
      <img src="icon-consumer.svg" alt="Consumer Electronics" style="width:64px; height:64px; margin-bottom:12px; filter: brightness(0) saturate(100%) invert(25%) sepia(40%) saturate(428%) hue-rotate(4deg) brightness(95%) contrast(86%);">
      <div>Consumer Electronics</div>
    </div>
    <div style="max-width:100px;">
      <img src="icon-travel.svg" alt="Travel, F&B & Hospitality" style="width:64px; height:64px; margin-bottom:12px; filter: brightness(0) saturate(100%) invert(25%) sepia(40%) saturate(428%) hue-rotate(4deg) brightness(95%) contrast(86%);">
      <div>Travel, F&B & Hospitality</div>
    </div>
    <div style="max-width:100px;">
      <img src="icon-b2b.svg" alt="B2B SAAS / Consulting / Manufacturing" style="width:64px; height:64px; margin-bottom:12px; filter: brightness(0) saturate(100%) invert(25%) sepia(40%) saturate(428%) hue-rotate(4deg) brightness(95%) contrast(86%);">
      <div>B2B SAAS / Consulting / Manufacturing</div>
    </div>
  </div>
</section> -->

<!-- <section style="display:flex;justify-content:space-between;align-items:center; padding:30px 60px; background:#f9f9fb;">
  <div style="max-width:480px;">
    <h2 style="color:#f04711; font-weight:bold; margin-bottom:14px;">Connect With Us!</h2>
    <ul style="padding-left:20px; font-size:1rem; color:#444;">
      <li>To keep up with the latest trends in digital</li>
      <li>To see glimpses of our work</li>
      <li>To see what’s up with our chefs</li>
    </ul>
    <div style="margin-top:18px; display:flex; gap:18px;">
      <a href="#" style="background:#0077b5; color:#fff; text-decoration:none; padding:10px 24px; border-radius:4px; display:flex; align-items:center; gap:8px; font-weight:bold; font-size:0.95rem;">
        <img src="linkedin.png" alt="LinkedIn" style="width:18px; height:18px;">
        CONNECT WITH US!
      </a>
      <a href="#" style="background: linear-gradient(to right, #ff6a00, #ee0979); color:#fff; text-decoration:none; padding:10px 24px; border-radius:4px; display:flex; align-items:center; gap:8px; font-weight:bold; font-size:0.95rem;">
        <img src="instagram.png" alt="Instagram" style="width:18px; height:18px;">
        FOLLOW US NOW!
      </a>
    </div>
  </div>
  <div style="max-width:400px;">
    <img src="connect-illustration.png" alt="Connect Illustration" style="max-width:100%; height:auto;">
  </div>
</section> -->

<section style="display:flex;justify-content:space-between;align-items:center; padding:30px 40px; background: linear-gradient(90deg, #0A0A0A 0%, #1C3C72 50%, #FF6B00 100%); color: #F9F9F9;">
  <div style="max-width:480px;">
    <h2 style="color: #F4C542; font-weight: bold; margin-bottom: 14px;">Connect With Us!</h2>
    <ul style="padding-left: 20px; font-size: 1rem; color: #DEDEDE;">
      <li>To keep up with the latest trends in digital</li>
      <li>To see glimpses of our work</li>
      <li>To see what’s up with our chefs</li>
    </ul>
    <div style="margin-top: 18px; display: flex; gap: 18px;">
      <a href="#" style="background: #1C3C72; color: #fff; text-decoration: none; padding: 10px 24px; border-radius: 4px; display: flex; align-items: center; gap: 8px; font-weight: bold; font-size: 0.95rem;">
        <img src="linkedin.png" alt="LinkedIn" style="width: 18px; height: 18px;">
        CONNECT WITH US!
      </a>
      <a href="#" style="background: linear-gradient(to right, #FF6B00, #F4C542); color: #fff; text-decoration: none; padding: 10px 24px; border-radius: 4px; display: flex; align-items: center; gap: 8px; font-weight: bold; font-size: 0.95rem;">
        <img src="instagram.png" alt="Instagram" style="width: 18px; height: 18px;">
        FOLLOW US NOW!
      </a>
    </div>
  </div>
  <div style="max-width:400px;">
    <img src="./assets/images/default-impact-stories.jpeg" alt="Connect Illustration" style="max-width: 100%; height: auto;">
  </div>
</section>

<div id="footer-container"></div>
<script>

  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading navbar:', error));

  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
</script>

</body>
</html>
