import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function NavItem({ navItemText, menuItems, megaMenu = false }) {
	const [isOpenDropDown, setIsOpenDropDown] = useState(false);
	const handleClick = (e) => {
	};

	return (
		<li className={`nav-item ${menuItems }`}>
			<a href="/" className="nav-link-item" onClick={handleClick}>
				{navItemText}
				<FontAwesomeIcon icon={faAngleDown} />
			</a>
		</li>
	);
}
