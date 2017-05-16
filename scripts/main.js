'use strict';

import ButtonUnfocus from './button_unfocus'
import Carousel from './carousel'

export default class Ense {
  constructor() {
    console.log('Ense activated')
    // list of JS functions
    new ButtonUnfocus()
    new Carousel()
  }
}
