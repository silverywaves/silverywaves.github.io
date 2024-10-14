/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "silverywaves",
  title: "Hello, I'm Here!",
  subTitle: emoji(
    "열정과 의지를 가진 비전공 출신 풀스택 개발자 '조은파'입니다. 💻 JavaScript / React 및 기타 라이브러리와 프레임워크로 웹 애플리케이션을 구축한 경험이 있습니다."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1WewscFV-SIlb0bz7WAo3raCJRHbVI1CO/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/silverywaves",
  gmail: "babyshu1210@gmail.com",
  tStory: "https://dailylifethatsnormal.tistory.com",
  // notion: "https://www.notion.so/f252510e67504ed7851d29e10884faef?pvs=4",  

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "모든 기술 스택을 습득하고자 노력하는 풀 스택 개발자",
  skills: [
    emoji(
      "⚡ 웹 애플리케이션을 위한 대화형 프론트엔드/사용자 인터페이스 개발"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "dart",
      fontAwesomeClassname: "fab fa-dart-lang"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fab fa-flutter"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "영진전문대학",
      logo: require("./assets/images/yeungjinLogo.png"),
      subHeader: "국제관광계열",
      duration: "2012.03 - 2014.08",
      desc: "호텔항공 중 호텔경영학 전공",
      descBullets: [
        "졸업 전 취업",
      ],
      footerLink: [
        {
          name: "졸업증명서",
          url: "https://drive.google.com/file/d/1OQxGYIy6Y98hWsIIOpHw9qObnPQn9WxS/view?usp=sharing"
        },
        {
          name: "성적증명서",
          url: "https://drive.google.com/file/d/1eRYGfTd0ZNFOO9b5sBsDRvPdMekhUh1z/view?usp=sharing"
        }
      ]
    },
    {
      schoolName: "코리아 IT 아카데미",
      logo: require("./assets/images/koreaItLogo.png"),
      subHeader: "임베디드 소프트웨어 융합 풀스택 개발자 양성과정",
      duration: "2024.01 - 2024.07",
      desc: "응용SW엔지니어링 ( Java 기반 웹 개발, 웹 풀스택 개발 및 임베디드 시스템 개발 )",
      descBullets: ["Java를 활용한 서버사이드 개발", "Servlet과 JSP를 이용한 웹 애플리케이션 구조 설계 및 구현", "Spring Framework를 사용한 MVC 아키텍처 설계 및 RESTf ul API 개발",
        "HTML, CSS, JavaScript를 활용한 프론트엔드 개발", "React 프레임워크를 사용한 동적 웹 애플리케이션 개발", "JPA/Hibernate를 사용한 데이터베이스 연동 및 ORM 활용",
        "MySQL을 활용한 데이터베이스 설계 및 운영", "C#을 활용한 아두이노(Arduino) 실습 진행", "아두이노를 이용한 센서 제어"
      ],
      footerLink: [
        {
          name: "수료증",
          url: "https://drive.google.com/file/d/1U7sf29xsQdDFnYppg0081I81H1Sd39iX/view?usp=sharing"
        },
        {
          name: "이수 내역",
          url: "https://drive.google.com/file/d/1uoByBKyE-XZkxHq4M_tzcOpoNcEgEceA/view?usp=sharing"
        }
      ]
    } 
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "디지털 세일즈 예약 매니저",
      company: "MajonGlad Jeju",
      companylogo: require("./assets/images/maisonLogo.png"),
      date: "2022.02 – 2023.05",
      descBullets: [
        "업셀링 전략으로 객실 매출 증가",
        "고객 상담 테스트 1위",
        "오버부킹 예방 관리"
      ]
    },
    {
      role: "인사, 총무, 회계 담당자",
      company: "아세아건영",
      companylogo: require("./assets/images/asiaLogo.png"),
      date: "2020.10 – 2022.02",
      descBullets: [
        "인사 관리 및 복지 개선",
        "총무 업무 및 시설 관리",
        "회계 업무 및 재무 보고"
      ]
    },
    {
      role: "프론트데스크 인챠지",
      company: "Oceansuites Jeju",
      companylogo: require("./assets/images/oceansuitesLogo.png"),
      date: "2013.09 – 2019.09",
      descBullets: [
        "고객 응대 및 예약 관리",
        "고객 불만 처리 및 서비스 개선",
        "팀원 교육 및 관리"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: " ",
  projects: [
    {
      image: require("./assets/images/logo.png"),
      projectName: "Stay Connect",
      projectDesc: "배웠던 것들을 적용하여 학습하고 오류를 해결하면서 성장하고 기술을 익히기 위해 프로젝트 진행",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://stayconnect.shop/"
        }
        //  you can add extra buttons here.
      ]
    },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "정보처리산업기사",
      subtitle:
        "한국산업인력공단<br/>2024.09 합격",
      image: require("./assets/images/HRDK.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1npIe2T7YpzCmLMo2oV2vVGFc3o9Bg9UU/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "SQL개발자(SQLD)",
      subtitle:
        "한국데이터베이스진흥센터<br/>2024.04 합격",
      image: require("./assets/images/data.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1tVM3XkjLokuGoXCSUE7RdkMaBvOvaxId/view?usp=sharing"
        },
      ]
    },

    {
      title: "데이터분석준전문가(ADsP)",
      subtitle: "한국데이터베이스진흥센터<br/>2024.03 합격",
      image: require("./assets/images/data.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1YfUxyACyLKxdq3L0ADtxX_Oc4xfGJ_GD/view?usp=sharing"
        }
      ]
    },

    {
      title: "빅데이터분석기사",
      subtitle: "데이터자격검정<br/>2024.09 필기 합격",
      image: require("./assets/images/data.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1dnwv1oR-yGsSqDU623SG30YUY7zmDQg0/view?usp=sharing"
        }
      ]
    },

    {
      title: "리눅스 마스터 2급",
      subtitle: "한국정보통신인력개발센터<br/>2024.05 1차 합격",
      image: require("./assets/images/KAIT.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1jZfZXJ0Fz24yoRQWlAARhxiyL1rzmt2V/view?usp=sharing"
        }
      ]
    },

    {
      title: "전산회계 2급",
      subtitle: "한국세무사협회<br/>2021.08 합격",
      image: require("./assets/images/koreaTax.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1LtuDyV2nb5T7l9xPzcws1dY2ESnh-AsP/view?usp=sharing"
        }
      ]
    },

    {
      title: "회계관리 2급",
      subtitle: "삼일회계법인<br/>2015.03 합격",
      image: require("./assets/images/samil.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1A4BE5rrshidgCN1J4y_QUBTr6H_v7UMJ/view?usp=sharing"
        }
      ]
    },

    {
      title: "1종 보통 운전 면허",
      subtitle: "경찰청(운전면허시험관리단)<br/>2012.01 합격",
      image: require("./assets/images/drive.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/1jZfZXJ0Fz24yoRQWlAARhxiyL1rzmt2V/view?usp=sharing"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "연락을 원하신다면 :)",
  number: "010-8323-2054",
  email_address: "babyshu1210@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
