import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';

export const config: Config = {
	namespace: 'maxill-ui',
	globalStyle: 'src/global/global.scss',
	outputTargets: [
		{
			type: 'dist',
			esmLoaderPath: '../loader',
		},
		{
			type: 'dist-custom-elements',
		},
		{
			type: 'docs-readme',
		},
		{
			type: 'www',
			serviceWorker: null,
		},
	],
	plugins: [sass(), inlineSvg()],
};

export const devServer = {
	root: 'www',
	watchGlob: '**/**',
};
