import packageJson from "../../../package.json";

// Adjust the path as needed
const Footer = () => {
  const packageInfo = packageJson;
  return (
    <footer>
      <p>{packageInfo.version}</p>
    </footer>
  );
};

export default Footer;
