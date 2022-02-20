import { Controller, Get, Render } from '@nestjs/common';

@Controller('')
export class ViewsController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}
