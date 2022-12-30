import { IconName } from '../Icon/Icon.types';
import { Colors, Sizes, Variants } from './Button.types';

export default {
	title: 'Components/Atoms/Button',
	argTypes: {
		variant: {
			description: 'Specifies the variant of the button',
			control: {
				type: 'select',
				options: Object.values(Variants),
			},
		},
		size: {
			description:
				'Specifies the size of the button: | Xs | Small | Medium | Large',
			control: {
				type: 'select',
				options: Object.values(Sizes),
			},
		},
		color: {
			description: 'Icon color',
			control: {
				type: 'select',
				options: Object.values(Colors),
			},
		},
		disabled: {
			description: 'Specifies if the button is disabled',
			control: {
				type: 'boolean',
			},
		},
		icon: {
			description:
				'Receives the name of the icon: arrow-left, arrow-right, bel etc. ',
			control: {
				type: 'select',
				options: Object.values(IconName),
			},
		},
	},
};
const Template = ({ variant, size, disabled, color, icon, local }) =>
	`<button-maxll variant="${variant}" size="${size}" disabled="${disabled}" color="${color}" icon="${icon}" local="${local}">Click me</button-maxll>`;

export const Default = Template.bind({});
Default.args = {
	variant: Variants.Normal,
	size: Sizes.Medium,
	color: Colors.Primary,
	disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
	...Default.args,
	disabled: true,
};

export const IconButton = Template.bind({});
IconButton.args = {
	...Default.args,
	variant: Variants.Icon,
	color: Colors.Light,
	icon: IconName.BELL,
	local: true,
};
