import githubLogo from "./GitHubLightIcon.png";

export const Header = () => {
  return (
    <div className="border-2 border-black p-3 flex justify-around">
      <p className="text-black text-xl"> Resume </p>
      <a href="https://github.com/israelmacd">
        <img src={githubLogo} alt="github" />
      </a>
    </div>
  );
};
