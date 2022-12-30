import { Component, Prop, h } from '@stencil/core';
import { Colors, IconBaseProps, IconName, Variants } from './Icon.types';
import { getPath } from './utils';
@Component({
	tag: 'icon-maxll',
	shadow: true,
})
export class Icon implements IconBaseProps {
	testId = 'IconComponent';
	@Prop() name: IconName = IconName.ARROW_LEFT;
	@Prop() variant?: Variants = Variants.REGULAR;
	@Prop() color?: Colors = Colors.BLACK;
	@Prop() local?: boolean = false;

	render() {
		const src = getPath(this.local, this.name);
		return <img src={src} alt={this.name} />;
	}
}
