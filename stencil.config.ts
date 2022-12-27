import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
	namespace: 'maxill-ui',
	outputTargets: [
		angularOutputTarget({
			componentCorePackage: 'maxill-ui',
			directivesProxyFile:
				'../angular-workspace/projects/component-library/src/lib/stencil-generated/components.ts',
			directivesArrayFile:
				'../angular-workspace/projects/component-library/src/lib/stencil-generated/index.ts',
		}),
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
			serviceWorker: null, // disable service workers
		},
	],
	globalStyle: './src/global/global.css',
	plugins: [sass()],
};

export const devServer = {
	root: 'www',
	watchGlob: '**/**',
};
