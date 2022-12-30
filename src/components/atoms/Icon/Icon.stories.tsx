import { Colors, IconName, Variants } from './Icon.types';

export default {
	title: 'Components/Atoms/Icon',
	argTypes: {
		name: {
			description:
				'Receives the name of the icon: arrow-left, arrow-right, bel etc.',
			control: {
				type: 'select',
				options: Object.values(IconName),
			},
		},
		variant: {
			description: 'Specifies the variant of the icon',
			control: {
				type: 'select',
				options: Object.values(Variants),
			},
		},
		color: {
			description: 'Icon color',
			control: {
				type: 'select',
				options: Object.values(Colors),
			},
		},
		local: {
			description:
				'This variable is only set for storybook purposes, it validates if you have to do an import at the level of static directories',
			control: {
				type: 'boolean',
			},
		},
	},
};
const Template = ({ name, variant, color, local }) =>
	`<icon-maxll name="${name}" variant="${variant}" color="${color}" local="${local}" />`;

export const Default = Template.bind({});
Default.args = {
	name: IconName.ARROW_LEFT,
	variant: Variants.REGULAR,
	color: Colors.BLACK,
	local: true,
};
