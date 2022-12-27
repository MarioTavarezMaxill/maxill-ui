import { Sizes, Variants } from './Button.types';

export default {
	title: 'Components/Atoms/Button',
	argTypes: {
		variant: {
			control: {
				type: 'select',
				options: Object.values(Variants),
			},
		},
		size: {
			control: {
				type: 'select',
				options: Object.values(Sizes),
			},
		},
	},
};
const Template = ({ variant, size }) =>
	`<button-maxll variant="${variant}" size="${size}">Click me</button-maxll>`;

export const Default = Template.bind({});
Default.args = {
	variant: Variants.Primary,
	size: Sizes.Medium,
};
