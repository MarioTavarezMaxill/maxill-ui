import { Colors, Sizes, Variants } from './Button.types';

const variantsClass = {
	[Variants.Outline]: 'btn-outline',
	[Variants.Block]: 'd-grid',
	[Variants.Rounded]: 'rounded-pill',
};

const getClass = (size: Sizes, variant: Variants, color: Colors) => {
	const classes = {
		btn: true,
	};

	if (variant !== Variants.Normal && variant !== Variants.Icon) {
		classes[variantsClass[variant]] = true;
	} else {
		classes[`btn-${color}`] = true;
	}

	if (variant === Variants.Icon) {
		classes['btn-icon'] = true;
	}

	if (size) {
		classes[`btn-${size}`] = true;
	}

	return classes;
};

const getTypeOfContainer = (variant: Variants) => {
	return variant === Variants.Block && 'd-grid';
};

export { getClass, getTypeOfContainer };
