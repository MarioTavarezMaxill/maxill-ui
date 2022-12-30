export enum Sizes {
	Xs = 'xs',
	Small = 'sm',
	Medium = 'md',
	Large = 'lg',
}

export enum Variants {
	Outline = 'outline',
	Normal = 'normal',
	Block = 'block',
	Icon = 'icon',
	Rounded = 'rounded',
}

export enum Colors {
	Primary = 'primary',
	Secondary = 'secondary',
	Success = 'success',
	Warning = 'warning',
	Danger = 'danger',
	Info = 'info',
	Light = 'light',
	Ghost = 'ghost',
	MaxiBlue = 'maxi-blue',
	MaxiBlueAcent = 'maxi-blue-accent',
}

interface ButtonBaseProps {
	testId?: string;
}

export default ButtonBaseProps;
