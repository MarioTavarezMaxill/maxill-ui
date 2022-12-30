import { IconName } from './Icon.types';

const getPath = (local = false, iconName: IconName) => {
	if (local) {
		return `/svg/${iconName}.svg`;
	}
	return `../../../assets/svg/${iconName}.svg`;
};
export { getPath };
