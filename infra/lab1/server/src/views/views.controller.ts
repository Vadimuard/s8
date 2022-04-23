import { Controller, Get, Render } from '@nestjs/common';

@Controller('')
export class ViewsController {
  @Get()
  @Render('index')
  root() {
    return {
      autos: [
        {
          title: 'Title1',
          img: 'https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/mercedes-benz-gle-class__1492040-620x465x70.webp',
        },
        {
          title: 'Title2',
          img: 'https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/mercedes-benz-gle-class__1492040-620x465x70.webp',
        },
        {
          title: 'Title3',
          img: 'https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/mercedes-benz-gle-class__1492040-620x465x70.webp',
        },
        {
          title: 'Title4',
          img: 'https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/mercedes-benz-gle-class__1492040-620x465x70.webp',
        },
        {
          title: 'Title5',
          img: 'https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/mercedes-benz-gle-class__1492040-620x465x70.webp',
        },
        {
          title: 'Title6',
          img: 'https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/mercedes-benz-gle-class__1492040-620x465x70.webp',
        },
      ],
    };
  }
}
