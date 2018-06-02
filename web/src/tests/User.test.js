import React from 'react';
import User from '../components/User';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('User is NULL', () => {
	let user = null
	const component = shallow(<User user={user} />);
	expect(component.type()).toEqual(null);

	const display = renderer.create(
		<User user={user} />,
	  );
	let tree = display.toJSON();
 	expect(tree).toMatchSnapshot();
});

test('User is valid', () => {
	let user = {
		activeAt:"2018-05-30T16:39:15.000Z",
		createdAt:"2018-05-30T16:39:15.000Z",
		dob:"1988-05-30T16:39:15.000Z",
		email:"camagru.rizky@gmail.com",
		id:"0000000001",
		lat:46.528999,
		long:6.5626,
		name:"Admin",
		password:"3bb37061e887baa3b48ebe9f060f1a42baf995fb",
		picture:"/img/profiles/no-pic.jpg",
		subscribed:{type: "Buffer", data: Array(1)},
		tokenLost:null,
		tokenValidated:null,
		updatedAt:null,
		username:"admin",
	}
	const component = shallow(<User user={user} />);
	expect(component.length).toEqual(1);
	expect(component.find('.user').text()).toEqual(user.name+', ');

	const display = renderer.create(
		<User user={user} />,
	  );
	let tree = display.toJSON();
 	expect(tree).toMatchSnapshot();
});

test('Distance calculation', null);
test('Active time calculation', null);
test('Show more option', null);
test('Unmatch', null);
test('Like', null);
test('Pass', null);