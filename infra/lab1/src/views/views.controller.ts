import { Controller, Get, Render } from '@nestjs/common';

@Controller('')
export class ViewsController {
  @Get()
  @Render('index')
  root() {
    return {
      autos: [
        { title: 'Title1', img: '' },
        { title: 'Title2', img: '' },
        { title: 'Title3', img: '' },
        { title: 'Title4', img: '' },
        { title: 'Title5', img: '' },
        { title: 'Title5', img: '' },
        { title: 'Title5', img: '' },
        { title: 'Title5', img: '' },
        { title: 'Title5', img: '' },
        { title: 'Title5', img: '' },
        { title: 'Title5', img: '' },
        { title: 'Title5', img: '' },
        { title: 'Title5', img: '' },
        { title: 'Title5', img: '' },
        { title: 'Title5', img: '' },
        { title: 'Title5', img: '' },
      ],
    };
  }
}
