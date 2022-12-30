module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-notes',
		'@storybook/addon-knobs',
		'storybook-addon-stencil',
	],
	framework: '@storybook/html',
	staticDirs: ['../src/assets'],
};
