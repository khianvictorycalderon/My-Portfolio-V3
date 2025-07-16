import { useState, useEffect } from "react";
import React from "react";
import { NavBar } from "./Components/NavigationBar/NavBar";
import { Footer } from "./Components/Footer/Footer";
import { Hero } from "./Components/HeroSection/Hero";
import { ImageTextPair } from "./Components/ImageTextPair/ImageTextPair";
import { TextSection } from "./Components/TextSection/TextSection";
import { Cards } from "./Components/Cards/Cards";
import { Banner } from "./Components/Banner/Banner";

const webProjects = [
  {
    "ImagePath": "images/web_proj/stockims.png",
    "Title": "StockIMS",
    "Link": "https://stockims.netlify.app/",
    "Description": "An inventory management system full-stack website with KV Bot Integration."
  },
  {
    "ImagePath": "images/web_proj/gengrade.png",
    "Title": "GenGrade",
    "Link": "https://gengrade.netlify.app/",
    "Description": "A student grades management system full-stack website with KV Bot Integration."
  },
  {
    "ImagePath": "images/web_proj/chatterplex.png",
    "Title": "Chatterplex",
    "Link": "https://chatterplex.netlify.app/",
    "Description": "A no sign-in real-time chat full-stack website system."
  },
  {
    "ImagePath": "images/web_proj/articlestory.png",
    "Title": "Article Story",
    "Link": "https://articlestory.netlify.app/",
    "Description": "A web platform to share articles and orignal stories."
  },
  {
    "ImagePath": "images/web_proj/kvbot.png",
    "Title": "KV Chatbot",
    "Link": "https://kvbot.netlify.app/",
    "Description": "A chatbot website trained from scratch with various capabilities."
  },
  {
    "ImagePath": "images/web_proj/unigma.png",
    "Title": "Unigma",
    "Link": "https://unigma.netlify.app/",
    "Description": "(Ultimate Enigma) a text encryption and decryption website based on custom key."
  },
  {
    "ImagePath": "images/web_proj/myportfolioV2.png",
    "Title": "My Portfolio Version 2",
    "Link": "https://khianvictorycalderon.github.io/My-Portfolio-V2/",
    "Description": "The remake verion of my portfolio V1 with light and dark theme and small projects."
  },
  {
    "ImagePath": "images/web_proj/myportfolioV1.png",
    "Title": "My Portfolio V1",
    "Link": "https://khianvictorycalderon.github.io/My-Portfolio-V1/",
    "Description": "The first version of my portfolio with primitive design."
  },
  {
    "ImagePath": "images/web_proj/sampleportfolio.png",
    "Title": "Sample Portfolio Templates",
    "Link": "https://sampleportfoliostyles.netlify.app/",
    "Description": "A sample website with 3 preset portfolio with different design."
  },
  {
    "ImagePath": "images/web_proj/koreanportfolio.png",
    "Title": "My Korean Portfolio",
    "Link": "https://khianvictorycalderon.github.io/My-Sample-Korean-Portfolio/",
    "Description": "My korean version of my portfolio for EPS-TOPIK."
  },
  {
    "ImagePath": "images/web_proj/elevencrushtips.png",
    "Title": "Eleven Crush Tips",
    "Link": "https://elevencrushtips.github.io/",
    "Description": "My first ever published website built with HTML and CSS only."
  }
];

const desktopProjects = [
  {
    "ImagePath": "images/desk_proj/passwordgenerator.png",
    "Title": "Password Generator",
    "Link": "https://github.com/khianvictorycalderon/CTK-Password-Generator",
    "Description": "My first custom-tkinter project, generates a set of random password based on length input."
  },
  {
    "ImagePath": "images/desk_proj/gradingsystem.png",
    "Title": "Simple Grading System",
    "Link": "https://github.com/khianvictorycalderon/Tkinter-Grading-System",
    "Description": "A simple app that records and show student grades."
  },
  {
    "ImagePath": "images/desk_proj/scoretracker.png",
    "Title": "Student Score Tracker",
    "Link": "https://github.com/khianvictorycalderon/ITCS103-Calderon-Khian-Score-Tracker",
    "Description": "An individual simple school project that records student scores."
  },
  {
    "ImagePath": "images/desk_proj/informationmanagement.png",
    "Title": "Information Management System",
    "Link": "https://github.com/khianvictorycalderon/Information-Management-System",
    "Description": "A simple project that implements simple register and login account system."
  },
  {
    "ImagePath": "images/desk_proj/attendancesystem.png",
    "Title": "Attendance System",
    "Link": "https://github.com/khianvictorycalderon/Attendance-System",
    "Description": "A simple experimental project that records student attendance."
  }
];

const mobileProjects = [
  {
    "ImagePath": "images/mob_proj/simplecalculator.png",
    "Title": "Simple Calculator",
    "Link": "https://github.com/khianvictorycalderon/Simple-Calculator",
    "Description": "My first official React-Native project with colorful buttons, simple and experimental."
  }
];

const fetchedTechStack = [
  {
    "Image": "images/tech/react.png",
    "Title": "React",
    "Description": "I use React to build dynamic and interactive websites with JavaScript XML and TypeScript."
  },
  {
    "Image": "images/tech/bootstrap.png",
    "Title": "Bootstrap",
    "Description": "I use this CSS framework due to its design templates and mobile-responsiveness for my websites."
  },
  {
    "Image": "images/tech/firebase.png",
    "Title": "Firebase",
    "Description": "I use Firebase to manage databases on the front-end and provide real-time synchronization without needing a back-end."
  },
  {
    "Image": "images/tech/google_analytics.png",
    "Title": "Google Analytics",
    "Description": "I use Google Analytics to monitor website performance by tracking user visits, actions, and events."
  },
  {
    "Image": "images/tech/python.png",
    "Title": "Python",
    "Description": "I use Python to create and test desktop applications."
  },
  {
    "Image": "images/tech/tkinter.png",
    "Title": "Tkinter",
    "Description": "I use this python library to make desktop application interfaces."
  },
  {
    "Image": "images/tech/custom_tkinter.png",
    "Title": "Custom Tkinter",
    "Description": "I use this python library to help me create modern user interfaces for desktop applications."
  },
  {
    "Image": "images/tech/javascript.png",
    "Title": "JavaScript",
    "Description": "I use JavaScript to create interactive elements and enhance front-end functionality on websites."
  },
  {
    "Image": "images/tech/css.png",
    "Title": "CSS",
    "Description": "I use CSS to style and layout web pages, making them visually appealing and responsive."
  },
  {
    "Image": "images/tech/html.png",
    "Title": "HTML",
    "Description": "I use HTML to structure the content of websites, forming the foundation of all web pages."
  },
  {
    "Image": "images/tech/react.png",
    "Title": "React Native",
    "Description": "I use React-Native to develop mobile applications."
  },
  {
    "Image": "images/tech/expo.png",
    "Title": "Expo Go",
    "Description": "I use Expo to test my react-native projects."
  },
  {
    "Image": "images/tech/netlify.png",
    "Title": "Netlify",
    "Description": "I use Netlify as a platform and static web hosting to publish my major website projects."
  },
  {
    "Image": "images/tech/git.png",
    "Title": "Git",
    "Description": "I use Git for team collaboration and to keep track of changes in my projects."
  }
];

const fetchedEducation = [
  {
    "Title": "Dalubhasaan ng Lungsod ng Lucena",
    "Image": "images/educ/dll.jpg",
    "Description": "<p>Bachelor of Science in Information Technology</p>",
    "ImageHref": "https://dll.edu.ph/",
    "RoundedImage": true
  },
  {
    "Title": "Southern Luzon State University Lucena",
    "Image": "images/educ/slsulucena.png",
    "Description": "<p>Bachelor in Industrial Technology</p>",
    "ImageHref": "https://www.slsu.edu.ph/slsu-lucena/",
    "RoundedImage": true
  },
  {
    "Title": "Ark Technological Institute Educational System Incorporated",
    "Image": "images/educ/ark.png",
    "Description": "<p>Information Communication Technology</p>",
    "ImageHref": "https://www.facebook.com/@ARKLucena/",
    "RoundedImage": true
  },
  {
    "Title": "Gulang-Gulang National High School",
    "Image": "images/educ/gnhs.jpg",
    "Description": "<p>Science Technology Engineering <i>(Program)</i></p>",
    "ImageHref": "https://www.facebook.com/DepEdTayoGNHS308503/",
    "RoundedImage": true
  }
];

const achievements = [
	{
		"Title": "Dean's List",
		"Description": "Recognized as a Dean's Lister at SLSU for achieving high academic performance.",
		"Image": "images/achv/deanlist.jpg"
	},
	{
		"Title": "Former Part-Time Instructor",
		"Description": "Received a certificate of appreciation from Web Maker for teaching students.",
		"Image": "images/achv/appreciatoncertificate.jpg"
	},
];

const fetchedJourney = [
  {
    "Date": "2019",
    "Description": "This year marked the beginning of my programming journey as a Grade 9 student at 15 years old. The first programming languages I learned were C for Arduino and ActionScript 2.0 for Flash 8 (which is now obsolete). My first Flash project was an animation using keyframes, and my first Arduino project was a simple LED flickering with a fixed time interval."
  },
  {
    "Date": "2020",
    "Description": "In 2020, I began diving deeper into C and C++ using Turbo C, expanding my knowledge of Arduino, and exploring game development with Flash 8. I focused on Flash 8 ActionScript 2.0 for game development, creating a few amateur and experimental games."
  },
  {
    "Date": "2021",
    "Description": "During Grade 11 at ARK, I worked on a few Arduino projects. We had a programming subject where we used VB.Net. Although I didn’t enjoy VB.Net, I studied it to pass the subject. This year also marked my first exposure to HTML, CSS, and JavaScript. In my free time, I explored the DOM, scripting, client-side and server-side interactions, and complex JavaScript logic."
  },
  {
    "Date": "2022",
    "Description": "In Grade 12 at ARK, we transitioned from online classes to face-to-face learning. I took another programming course, but this time focused on Java (which is very different from JavaScript). This shift caused me to temporarily lose focus on HTML, CSS, and JavaScript, slowing my progress in web development."
  },
  {
    "Date": "Early 2023",
    "Description": "By early 2023, I returned to web development, focusing on HTML, CSS, and JavaScript, and started building a few vanilla websites."
  },
  {
    "Date": "May 3, 2023",
    "Description": "I published my first website as part of a work immersion project during senior high school. You can find the project and its code <a href=https://github.com/elevencrushtips target=_blank>here</a> on my separate GitHub account, titled 'Eleven Crush Tips'."
  },
  {
    "Date": "May - June 2023",
    "Description": "During this period, I shifted my focus from web development to game development. I explored Unity 2D and moved away from Flash 8, which was no longer a viable option for game development."
  },
  {
    "Date": "July 3, 2023",
    "Description": "I published my first game, <a href=https://play.google.com/store/apps/details?id=com.khianvictory.blueball2d target=_blank>Blue Ball 2D</a>, on the Google Play Store. It's a simple game similar to Flappy Bird, but with a vertical direction. This period marked the start of my exploration into both game and web development. <br/><b>Note: Due to inactivity in my Google Developer account, both my account and games were at risk of being removed.</b>"
  },
  {
    "Date": "August 23, 2023",
    "Description": "I published my second game, <a href=https://play.google.com/store/apps/details?id=com.khianvictory.clinx&hl=en target=_blank>Clinx</a>, which involved clicking a circle that appeared in the center of the screen before it disappeared. I was unsure if other games used this mechanic, so I thought I was the first to implement it. <br/><b>Note: Due to inactivity in my Google Developer account, both my account and games were at risk of being removed.</b>"
  },
  {
    "Date": "September 4, 2023",
    "Description": "On my first day at SLSU Lucena in the Industrial Technology program, I realized that my true interest lies in software development, particularly web and game development, not hardware. My prior experience with Arduino helped me realize that hardware development was expensive and complex compared to software development. I completed my first semester but chose not to continue in the program."
  },
  {
    "Date": "Late 2023",
    "Description": "After exploring various fields, including Arduino, Flash 8, Unity, and game development, I realized that web development was the most enjoyable for me. Game development, although exciting, was time-consuming and limited by my laptop's specs. In contrast, web development was fast, lightweight, and more accessible with no SDKs, complex installations, or platform restrictions. Thus, I decided to focus on mastering web development."
  },
  {
    "Date": "January 19, 2024",
    "Description": "I officially completed my first semester at SLSU but chose not to enroll for the second semester."
  },
  {
    "Date": "January 20, 2024 - March 2024",
    "Description": "During this period, I redirected my focus to studying for the EPS-TOPIK (a Korean examination that could lead to work opportunities in South Korea). I studied the Korean language whenever I had free time, which left little time for web development."
  },
  {
    "Date": "March 25, 2024",
    "Description": "I took the EPS-TOPIK exam in Ortigas, Manila. I scored 95/200, falling short of the passing score of 110. With this result, I decided to return to school."
  },
  {
    "Date": "April 25, 2024",
    "Description": "I took the entrance exam for DLL College, passed, and got accepted a few months later. I repeated my first year of college and enrolled in the course I truly wanted: Information Technology."
  },
  {
    "Date": "May 2024",
    "Description": "I began studying the basics of back-end systems, specifically PHP and MySQL, and their integration. I read PDFs that were 60 to 200 pages long to deepen my understanding."
  },
  {
    "Date": "July 2024",
    "Description": "My curiosity led me to explore full-stack web development, so I began learning frameworks and libraries, focusing on React."
  },
  {
    "Date": "August 5, 2024",
    "Description": "On my first day at DLL College, I started connecting with professors, peers, and programming communities to further my skills."
  },
  {
    "Date": "September - December 2024",
    "Description": "I began working on React projects with the goal of adding them to my portfolio. These projects became a key part of my learning and development."
  },
  {
    "Date": "December 2024",
    "Description": "I became more active on GitHub, understanding the platform's importance for collaboration and showcasing my projects as I prepare for post-graduation opportunities."
  },
  {
    "Date": "Late December 2024",
    "Description": "I created tutorial lesson projects for my side hustle, 'Programming Tutor'. Though I only had one client (a classmate), the experience was valuable for learning how to teach programming."
  },
  {
    "Date": "January 2025 - April 2025",
    "Description": "I began working on projects that were more polished and professional, guided by my professors and peers."
  },
  {
    "Date": "April 2025",
    "Description": "I started studying react-native, the structure look so much like react."
  },
  {
    "Date": "April 21, 2025",
    "Description": "I started studying Django as part of requirement project by my private team of community."
  },
  {
    "Date": "Late April - Early May 2025",
    "Description": "I was redirected away from web development again because I got distracted by our final project in Python, which involves team collaboration and requires my full attention. As a result, I also stopped studying Django and React Native."
  },
  {
    "Date": "May 10, 2025",
    "Description": "We successfully defended our finals project in python <a href=https://github.com/khianvictorycalderon/Treasury-Management-System>Treasury Management System</a>."
  },
  {
    "Date": "May 11, 2025",
    "Description": "I decided to change my specialization from website to web, desktop, and mobile developer and also updated my portfolio as well."
  },
  {
    "Date": "Latest Journey",
    "Description": "For my latest journey, visit my latest version of portfolio."
  }
];

export default function App() {

  // Dynamic Colors:
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "dark";
  });
  const [color1, setColor1] = useState<string>("");
  const [color2, setColor2] = useState<string>("");
  const [color3, setColor3] = useState<string>("");
  const [color4, setColor4] = useState<string>("");

  // Update localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);

    // Apply theme colors dynamically (you can customize these)
    if (theme === "light") {
      setColor1("#ced4da");
      setColor2("#dee2e6");
      setColor3("#e9ecef");
      setColor4("#f8f9fa");
    } else {
      setColor1("#111111");
      setColor2("#232323");
      setColor3("#343434");
      setColor4("#464646");
    }
  }, [theme]);
  // -------------------------------------

  // Detect if it is mobile or not
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [navBarBG, setNavBarBG] = useState<string>("rgb(0, 0, 0, 0)");

  // Change navigation bar label if it is mobile (display the full text)
  const navItems = [
    { id: "Website_Projects", label: "WEB PROJECTS", icon: "🌐" },
    { id: "Desktop_Projects", label: "DESKTOP APP PROJECTS", icon: "🖥️" },
    { id: "Mobile_Projects", label: "MOBILE APP PROJECTS", icon: "📱" },
    { id: "Tech_Stacks", label: "TECH STACKS", icon: "🛠️" },
    { id: "Education", label: "EDUCATIONAL BACKGROUND", icon: "🎓" },
    { id: "Achievements", label: "ACHIEVEMENTS", icon: "🏆" },
    { id: "Journey", label: "DEVELOPER JOURNEY", icon: "🌟" },
  ];

  const [navBarButtons, setNavBarButtons] = useState<
    { Label: string; OnClick: () => void }[]
  >([]);

  useEffect(() => {
    const buttons = navItems.map(({ id, label, icon }) => ({
      Label: isMobile ? `${label} ${icon}` : icon,
      OnClick: () => slideToID(id),
    }));

    setNavBarButtons(buttons);
  }, [isMobile]);

  // Change navigation bar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.getElementById("About_Me");
      const contentSection = document.getElementById("Content");
  
      if (!aboutMeSection || !contentSection) {
        console.error('❌ One or more sections not found');
        return;
      }
  
      const navHeight = 80; // Fixed navbar height
  
      if (isMobile) {
        // Always darkest gray on mobile
        setNavBarBG(color1);
        return; // Skip scroll logic
      }
  
      // Get positions relative to viewport (for desktop)
      const sectionTitleRect = contentSection.getBoundingClientRect();
  
      // Debugging logs
      console.log('Section Title Rect:', sectionTitleRect);
  
      if (sectionTitleRect.top - navHeight <= 0) {
        // If section-title is at or above navbar
        setNavBarBG(color1);
      } else {
        // In between aboutme and section-title
        setNavBarBG("rgba(0, 0, 0, 0)"); // Transparent
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Re-run on resize for responsiveness
    handleScroll(); // Run on mount
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [color1]);   
  
  const slideToID = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
  };

  const [contentReady, setContentReady] = useState(false);
  const [popUp, setPopUp] = useState<React.ReactNode>();
  const [sectionTarget, setSectionTarget] = useState<string | null>(null);

  // 1. On mount, read section from URL
  useEffect(() => {
    const hash = window.location.hash;
    const queryParams = new URLSearchParams(hash.split("?")[1]);
    const section = queryParams.get("section");
    if (section) {
      setSectionTarget(section);
      setPopUp(<>{`Loading "${section}" content...`}</>);
    }
  }, []);

  // 2. Check when all content is loaded
  useEffect(() => {
    const allLoaded =
      webProjects.length > 0 &&
      desktopProjects.length > 0 &&
      mobileProjects.length > 0 &&
      fetchedTechStack.length > 0 &&
      fetchedEducation.length > 0 &&
      achievements.length > 0 &&
      fetchedJourney.length > 0;

    if (allLoaded) {
      setContentReady(true);
    }
  }, [
    webProjects,
    desktopProjects,
    mobileProjects,
    fetchedTechStack,
    fetchedEducation,
    achievements,
    fetchedJourney
  ]);

  // 3. Scroll to section when content is ready
  useEffect(() => {
    if (contentReady && sectionTarget) {
      slideToID(sectionTarget); // custom scroll
      setTimeout(() => {
        setPopUp(null); // remove popup *after* scroll delay
      }, 1000); // adjust if needed based on scroll duration
    }
  }, [contentReady, sectionTarget]);

  return (
    <>
      <NavBar
            Logo={{
              ImagePath: "icons/Khian_Icon_Logo.png"
            }}
            Buttons={navBarButtons}
            Style={{
              NavBarBackground: navBarBG,
              ButtonTextColor: theme == "light" ? "black" : "white"
            }}
      />
      {popUp && (
        <>
          <div 
            className="pop-up-overlay" 
            onClick={() => {
              // User should not be able to close this while loading...
              // setPopUp(false);
            }}>
          </div>
          <div className="pop-up">{popUp}</div>
        </>
      )}
      <div id="About_Me" />
        <Hero
          Title="Hi, I'm Khian 👋"
          Description="I'm an IT college student specializing in Web🌐, App🖥️, and Mobile📱 Development"
          ButtonLabel="Contact Me 📩"
          ButtonOnClick={() => window.open("mailto:khianpublicmail@gmail.com", "_blank")}
          Logo="images/about/FB_Photo.jpg"
          RoundedLogo={true}
          Style={{
            BackgroundImage: "images/bg/bg.jpg",
            ButtonBackground: color4,
            ButtonTextColor: theme == "light" ? "black" : "white",
          }}
        />

        <div id="Content"/>
        <div className="anim-fadeIn-Delay-3s">

          <div id="Website_Projects" />
          <TextSection
            Title="Website Projects 🌐"
            Content={
              <Cards
                Cards={webProjects}
                Style={{
                  CardsBackground: color2
                }}
              />
            }
            Style={{
              Background: color1,
              TextColor: theme == "light" ? "black" : "white"
            }}
          />

          <div id="Desktop_Projects" />
          <TextSection
            Title="Desktop Application Projects 🖥️"
            Content={
              <Cards
                  Cards={desktopProjects}
                  Style={{
                    CardsBackground: color3
                  }}
                />
            }
            Style={{
              Background: color2,
              TextColor: theme == "light" ? "black" : "white"
            }}
          />

          <div id="Mobile_Projects" />
          <TextSection
            Title="Mobile Applications Projects 📱"
            Content={
              <Cards
                Cards={mobileProjects}
                Style={{
                  CardsBackground: color2
                }}
              />
            }
            Style={{
              Background: color1,
              TextColor: theme == "light" ? "black" : "white"
            }}
          />

          <div id="Tech_Stacks" />
          <TextSection
            Title="Tech Stacks 🛠️"
            Content={
              <div className="pd-2">
                <ImageTextPair
                  Rows={2}
                  List={fetchedTechStack}
                />
              </div>
            }
            Style={{
              Background: color2,
              TextColor: theme == "light" ? "black" : "white"
            }}
          />

          <div id="Education" />
          <TextSection
            Title="Educational Background 🎓"
            Content={
              <ImageTextPair
                Rows={1}
                List={fetchedEducation}
              />
            }
            Style={{
              Background: color1,
              TextColor: theme == "light" ? "black" : "white"
            }}
          />
          
          <div id="Achievements" />
          <TextSection
            Title="Achievements 🏆"
            Content={
              <span>Here are a few of my life achievements. Signatures have been blurred to respect privacy.</span>
            }
            Style={{
              Background: color2,
              TextColor: theme == "light" ? "black" : "white"
            }}
          />
          {achievements.map((item, index) => (
            <Banner
              key={`${item.Title}${index}`}
              BackgroundImage={item.Image}
              Title={item.Title}
              Description={
                <>
                  <p>{item.Description}</p>
                </>
              }
            />
          ))}

          <div id="Journey" />
          <TextSection
            Title="Developer Journey 🌟"
            Content={
              <>
                These developer journey is as far as I can remember and to the best of my knowledge.
                <br/><br/>
                <div className="card-wrapper-journey">
                  {fetchedJourney.map((item, index) => (
                    <div key={`${item.Description}${index}`} className="card-journey p-4 rounded-3" style={{background: index % 2 == 0 ? color2 : color3}}>
                      <h4><i>{item.Date}</i></h4>
                      <hr/>
                      <div dangerouslySetInnerHTML={{ __html: item.Description }} />
                    </div>
                  ))}
                </div>
              </>
            }
            Style={{
              Background: color1,
              TextColor: theme == "light" ? "black" : "white"
            }}
          />

          <Footer
            Title={
              <h4>
                Website Created by Khian Victory D. Calderon
              </h4>
            }
            Description={
              <>
                Want to help Khian?{" "}
                <a href="https://khianvictorycalderon.github.io/donation/donate.html">Donate to Khian</a> 💝💸💰
              </>
              }
            Logo="icons/Khian_Icon_Logo.png"
            Links = {[
              {
                ImagePath: "images/socmed/upwork.png",
                Href: "https://www.upwork.com/freelancers/~013a9c6d4543925f1e",
                Alt: "UpWork Logo"
              },
              {
                ImagePath: "images/socmed/github.png",
                Href: "https://github.com/khianvictorycalderon",
                Alt: "GitHub Logo"
              },
              {
                ImagePath: "images/socmed/linkedin.png",
                Href: "https://www.linkedin.com/in/khian-victory-d-calderon-b1493030a/",
                Alt: "LinkedIn Logo"
              },
              {
                ImagePath: "images/socmed/x.jpg",
                Href: "https://x.com/KhianVictory",
                Alt: "X (Former Twitter) Logo"
              },
              {
                ImagePath: "images/socmed/instagram.png",
                Href: "https://www.instagram.com/khiandelapena/",
                Alt: "Instagram Logo"
              },
              {
                ImagePath: "images/socmed/tiktok.png",
                Href: "https://www.tiktok.com/@khian.vc",
                Alt: "Tiktok Logo"
              }
            ]}
            
            Style={{
              Background: color2,
              TextColor: theme == "light" ? "black" : "white"
            }}

            MiscInfo={
              <>
                <p>
                  Portfolio Version 3: December 2024.
                </p>
                <p>
                Hero section background image by{" "}
                <a href="https://www.pexels.com/photo/close-up-photo-of-programming-of-codes-546819/" target="_blank">Louis Gomes</a>.
                </p>
                <br/>
                <p>
                  All rights reserved 2025.<br/>
                </p>
              </>
            }
          />

          <div className="toggle-theme-button" 
          style={{
            backgroundColor: theme == "light" ? "black" : "white"
          }}
          onClick={() => setTheme(theme == "light" ? "dark" : "light")}
          >
            🔅
          </div>
      </div>
    </>
  );
}