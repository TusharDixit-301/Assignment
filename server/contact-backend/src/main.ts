import { NestFactory } from '@nestjs/core'
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter(), {
    cors: true,
  })
  await app.listen(Number(process.env.PORT))

  app.setBaseViewsDir(join(__dirname, '..', 'templates'))
  app.setViewEngine('ejs')
}
bootstrap()
