import { Icon } from './Icon';
import { newSpecPage } from '@stencil/core/testing';
import { Colors, IconName, Variants } from './Icon.types';
describe('Icon Atom Component', () => {
	const htmlElement = 'icon-maxll';
	it('Should build icon component', () => {
		expect(new Icon()).toBeTruthy();
		expect(true).toBe(true);
	});

	it('Has with parameters ', async () => {
		const page = await newSpecPage({
			components: [Icon],
			html: `<div></div>`,
		});
		const component = page.doc.createElement(htmlElement);
		component.name = IconName.ArrowLeft;
		component.variant = Variants.Regular;
		component.color = Colors.Black;
		page.root.appendChild(component);
		await page.waitForChanges();
		expect(page).toBeTruthy();
	});
});
