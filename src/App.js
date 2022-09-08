import { useSelector } from "react-redux";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import FilterBar from "./components/FilterBar";
import JobList from "./components/JobList";
import bgHeaderDesktop from "./assets/bg-header-desktop.svg";
import logoPhotosnap from "./assets/photosnap.svg";
import logoManage from "./assets/manage.svg";
import logoAccount from "./assets/account.svg";
import logoMyHome from "./assets/myhome.svg";
import logoLoopStudios from "./assets/loop-studios.svg";
import logoFaceIt from "./assets/faceit.svg";
import logoShortly from "./assets/shortly.svg";
import logoInsure from "./assets/insure.svg";
import logoEyecamCo from "./assets/eyecam-co.svg";
import logoTheAirFilterCompany from "./assets/the-air-filter-company.svg";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  width: 80%;
  margin: 6.5rem 2rem 4rem;
  z-index: 2;

  @media (max-width: 1200px) {
    gap: 5rem;
  }
`;

const BgBox = styled.div`
  position: absolute;
  width: 100%;
  height: 9.65rem;
  background: url(${bgHeaderDesktop}) var(--Desaturated-Dark-Cyan);
  background-repeat: repeat-x;
`;

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: var(--Light-Grayish-Cyan-Bg);
`;

const App = () => {
  const jobListings = [
    {
      id: 1,
      company: "Photosnap",
      logo: logoPhotosnap,
      new: true,
      featured: true,
      position: "Senior Frontend Developer",
      role: "Frontend",
      level: "Senior",
      postedAt: "1d ago",
      contract: "Full Time",
      location: "USA Only",
      languages: ["HTML", "CSS", "JavaScript"],
      tools: [],
    },
    {
      id: 2,
      company: "Manage",
      logo: logoManage,
      new: true,
      featured: true,
      position: "Fullstack Developer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "1d ago",
      contract: "Part Time",
      location: "Remote",
      languages: ["Python"],
      tools: ["React"],
    },
    {
      id: 3,
      company: "Account",
      logo: logoAccount,
      new: true,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2d ago",
      contract: "Part Time",
      location: "USA Only",
      languages: ["JavaScript"],
      tools: ["React", "Sass"],
    },
    {
      id: 4,
      company: "MyHome",
      logo: logoMyHome,
      new: false,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "5d ago",
      contract: "Contract",
      location: "USA Only",
      languages: ["CSS", "JavaScript"],
      tools: [],
    },
    {
      id: 5,
      company: "Loop Studios",
      logo: logoLoopStudios,
      new: false,
      featured: false,
      position: "Software Engineer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "1w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["JavaScript"],
      tools: ["Ruby", "Sass"],
    },
    {
      id: 6,
      company: "FaceIt",
      logo: logoFaceIt,
      new: false,
      featured: false,
      position: "Junior Backend Developer",
      role: "Backend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "UK Only",
      languages: ["Ruby"],
      tools: ["RoR"],
    },
    {
      id: 7,
      company: "Shortly",
      logo: logoShortly,
      new: false,
      featured: false,
      position: "Junior Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["HTML", "JavaScript"],
      tools: ["Sass"],
    },
    {
      id: 8,
      company: "Insure",
      logo: logoInsure,
      new: false,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "USA Only",
      languages: ["JavaScript"],
      tools: ["Vue", "Sass"],
    },
    {
      id: 9,
      company: "Eyecam Co.",
      logo: logoEyecamCo,
      new: false,
      featured: false,
      position: "Full Stack Engineer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "3w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["JavaScript", "Python"],
      tools: ["Django"],
    },
    {
      id: 10,
      company: "The Air Filter Company",
      logo: logoTheAirFilterCompany,
      new: false,
      featured: false,
      position: "Front-end Dev",
      role: "Frontend",
      level: "Junior",
      postedAt: "1mo ago",
      contract: "Part Time",
      location: "Worldwide",
      languages: ["JavaScript"],
      tools: ["React", "Sass"],
    },
  ];

  const filters = useSelector((state) => state.jobFilter.filters);

  return (
    <AppBox>
      <GlobalStyle />
      <BgBox></BgBox>
      <Box>
        {filters.length !== 0 && <FilterBar />}
        <JobList jobListings={jobListings} />
      </Box>
    </AppBox>
  );
};

export default App;
