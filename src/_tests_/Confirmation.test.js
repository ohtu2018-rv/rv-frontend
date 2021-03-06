import React from 'react';
import ReactDOM from 'react-dom';
import Confirmation from '../components/sections/Confirmation';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Confirmation />, div);
    const cmpnt = renderer.create(<Confirmation />).toJSON();
    expect(cmpnt).toMatchSnapshot();
});
