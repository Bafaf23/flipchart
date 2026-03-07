import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon({ icon, clasName }) {
  return <FontAwesomeIcon icon={icon} className={clasName} />;
}
