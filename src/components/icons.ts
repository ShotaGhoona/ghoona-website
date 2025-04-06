// components/icons.ts
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faGear, faBullhorn, faCircleUser, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faSquareInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(faHouse, faGear, faBullhorn, faCircleUser, faBuilding, faSquareInstagram, faLinkedin);
