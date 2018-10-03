import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
	first_name() {
		return faker.name.firstName();
	},
	last_name() {
		return faker.name.lastName();
	},
	job_title() {
		return faker.name.title();
	},
	phone_number() {
		return faker.phone.phoneNumber();
	}
});
