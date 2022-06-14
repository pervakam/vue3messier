import {render} from "@testing-library/vue";
import ObjectCard from "./ObjectCard.vue";

test('render object card with data', () => {
  const options = {
    props: {
      name: 'ObjectCard',
      img: 'img/img.jpg',
      year: '2022',
      id: 'card',
    },
    slots: {
      add: 'add',
      remove: 'remove'
    }
  }
  const {debug} = render(ObjectCard, options)

  debug()
})