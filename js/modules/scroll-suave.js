export default class ScrollSuave {
	constructor(links, options) {
		this.linksInternos = document.querySelectorAll(links);
		if (options === undefined) {
			this.option = { behavior: 'smooth', block: 'start'};
		} else {
			this.options = options;
		}
	}

	scrollToSection(event) {
		event.preventDefault();
		const href = event.currentTarget.getAttribute('href');
		const section = document.querySelector(href);
		section.scrollIntoView(this.options);
	}

	addLinkEvent() {
		this.linksInternos.forEach((link) => {
			link.addEventListener('click', this.scrollToSection.bind(this));
		});
	}

	init() {
		this.addLinkEvent();
		return this;
	}
}
