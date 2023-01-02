import { Component, Prop, h } from '@stencil/core';
import { Colors, IconBaseProps, IconName, Variants } from './Icon.types';
import Icons from '../../../mocks';
@Component({
	tag: 'icon-maxll',
	shadow: true,
})
export class Icon implements IconBaseProps {
	testId = 'IconComponent';
	@Prop() name: IconName = IconName.ArrowLeft;
	@Prop() variant?: Variants = Variants.Regular;
	@Prop() color?: Colors = Colors.Black;
	@Prop() local?: boolean = false;

	render() {
		return <div class='svg-container' innerHTML={Icons[this.name]} />;
	}
}
