import { Button } from './Button';
import { newSpecPage } from '@stencil/core/testing';
import { Colors, Sizes, Variants } from './Button.types';
describe('Button Atom Component', () => {
	const htmlElement = 'button-maxll';
	it('Should build button component', () => {
		expect(new Button()).toBeTruthy();
		expect(true).toBe(true);
	});

	it('Has with parameters ', async () => {
		const page = await newSpecPage({
			components: [Button],
			html: `<div></div>`,
		});
		const component = page.doc.createElement(htmlElement);
		component.variant = Variants.Normal;
		component.size = Sizes.Medium;
		component.color = Colors.Primary;
		page.root.appendChild(component);
		await page.waitForChanges();
		expect(page).toBeTruthy();
	});
});
