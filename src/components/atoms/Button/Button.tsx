import { Component, h } from '@stencil/core';
import ButtonProps, { Sizes, Variants } from './Button.types';

@Component({
	tag: 'button-maxll',
	styleUrl: 'Button.css',
	shadow: true,
})
export class Button implements ButtonProps {
	testId = 'ButtonComponent';
	size = Sizes.Medium;
	variant = Variants.Primary;
	render() {
		return (
			<button
				type='button'
				class='btn btn-primary'
				id={this.testId}
				data-testid={this.testId}>
				<slot />
			</button>
		);
	}
}
