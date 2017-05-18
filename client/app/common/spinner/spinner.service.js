export default class SpinnerService {
	constructor() {
		this.visible = false;
	}
	show() {
		this.visible = true;
	}
	hide() {
		this.visible = false;
	}
}