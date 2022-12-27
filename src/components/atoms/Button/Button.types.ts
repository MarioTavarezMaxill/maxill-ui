export enum Sizes {
	Xs = 'xs',
	Small = 'small',
	Medium = 'medium',
	Large = 'large',
}

export enum Variants {
	Primary = 'primary',
	Secondary = 'secondary',
	Tertiary = 'tertiary',
	Ghost = 'ghost',
	Link = 'link',
}

interface ButtonProps {
	testId?: string;
	size?: Sizes;
	variant?: Variants;
}

export default ButtonProps;
