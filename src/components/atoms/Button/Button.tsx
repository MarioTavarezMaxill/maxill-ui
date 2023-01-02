import { Component, Prop, h } from '@stencil/core';
import ButtonBaseProps, { Colors, Sizes, Variants } from './Button.types';
import { getClass, getTypeOfContainer } from './utils';
import { IconName } from '../Icon/Icon.types';

@Component({
	tag: 'button-maxll',
	styleUrl: 'Button.module.scss',
	shadow: true,
})
export class Button implements ButtonBaseProps {
	testId = 'ButtonComponent';

	@Prop() size?: Sizes;
	@Prop() variant?: Variants;
	@Prop() color?: Colors;
	@Prop() disabled?: boolean;
	@Prop() icon?: IconName;

	render() {
		const classes = getClass(this.size, this.variant, this.color);
		const block = getTypeOfContainer(this.variant);
		const isIcon = this.variant === Variants.Icon;
		return (
			<div class={block}>
				<button
					disabled={this.disabled}
					type='button'
					class={classes}
					id={this.testId}
					data-testid={this.testId}>
					<div class={isIcon && 'btn-icon'}>
						{isIcon && <icon-maxll name={this.icon} />}
						<slot />
					</div>
				</button>
			</div>
		);
	}
}
