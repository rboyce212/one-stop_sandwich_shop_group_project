import TeamMemberCard from "./TeamMemberCard";
import "../Styles/About.css";

const About = () => {
  const teamMembers = [
    {
      name: "Tyrell Oliver",
      imageUrl: "https://avatars.githubusercontent.com/u/131703401?v=4",
      linkedInLink: "https://www.linkedin.com/in/tyrell-kamara-oliver/",
      githubLink: "https://github.com/TyrellOliver",
      info: `I am a Pursuit fellow studying to become a FSW Developer`
    },
    {
      name: "Daryna Vershinina",
      imageUrl: "https://avatars.githubusercontent.com/u/131687900?v=4",
      linkedInLink: "https://www.linkedin.com/in/daryna-v-17469169/",
      githubLink: "https://github.com/Smille007",
      info: "Full Stack Web Developer Student at Pursuit 10.1"
    },
    {
      name: "Jackie Cheung",
      imageUrl: "https://avatars.githubusercontent.com/u/131386755?v=4",
      linkedInLink: "https://www.linkedin.com/in/jackie-cheung-a0b446b3/",
      githubLink: "https://github.com/JackieC1993",
      info: `FSW developer. I am passionate about meeting other individuals with the potential to succeed in the future. Travel more, Stress less.`
    },
    {
      name: "Rich Boyce",
      imageUrl: "https://avatars.githubusercontent.com/u/122512687?v=4",
      linkedInLink: "https://www.linkedin.com/in/richard-boyce-nyc/",
      githubLink: "https://github.com/rboyce212",
      info: "FSW Developer with a passion for liberal arts and politics!"
    }
  ];
  return (
    <>
      <div className="about-page">
        <h1>Meet the Team</h1>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              imageUrl={member.imageUrl}
              linkedInLink={member.linkedInLink}
              githubLink={member.githubLink}
              info={member.info}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
