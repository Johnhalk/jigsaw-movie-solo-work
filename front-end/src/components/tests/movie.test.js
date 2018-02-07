import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import sinon from 'sinon';

import Movie from '../movie';


Enzyme.configure({ adapter: new Adapter() });

describe('Movie', () => {
    let props
    let testComponent;

    beforeEach(() => {
        props = {
            movie: [{
                original_title: 'Harry Potter',
                overview: 'Wizardry!',
                backdrop_path: 'fake data'
            }]
        }
        testComponent = shallow(
            <Movie {...props} />
        );
    });

    it('renders a movie table', () => {
        expect(testComponent.exists()).to.be.true;
    });

});