import PropTypes from "prop-types";
import "../Styles/About.css";

const TeamMemberCard = ({ name, imageUrl, linkedInLink, githubLink, info }) => {
  return (
    <div className="team-member-card">
      <hr />
      <img
        id="profile-img"
        src={imageUrl}
        alt={`Profile of ${name}`}
        className="profile-image"
      />
      <h3>{name}</h3>
      <p>{info}</p>
      <div className="social-links">
        <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <br />
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <br />
        <br />
      </div>
    </div>
  );
};

TeamMemberCard.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  linkedInLink: PropTypes.string,
  githubLink: PropTypes.string,
  info: PropTypes.string
};

export default TeamMemberCard;
