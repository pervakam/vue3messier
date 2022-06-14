import {render} from "@testing-library/vue";
import MyButton from "./MyButton.vue";

test('render my button', () => {
    const {debug} = render(MyButton)

    debug()
})