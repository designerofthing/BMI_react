import Reach from "react";
import { shallow } from "enzyme";

import Message from "../components/Message";

describe("message component", () => {
    const wrapper = shallow(<Message bmiMessage="Normal" bmiValue="22.50" /> )

    it("renders with message prop", () => {
        expect(wrapper.find('#bmi-message').text()).toEqual(
            "You are Normal with a BMI of 22.50"
        );
    });
});