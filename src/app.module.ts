import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './article/article.controller';
import { UserModule } from './user/user.module'

import {logger} from './common/middleware/logger.middleware'

@Module({
  imports: [UserModule],
  controllers: [AppController, ArticleController],
  providers: [AppService],
})
export class AppModule implements NestModule{ 
  configure(consumer: MiddlewareConsumer) {
      //  consumer.
      //  apply(logger)
      //  .forRoutes('user')

      consumer
      .apply(logger)
      .forRoutes({path:'user/:id',method: RequestMethod.POST})
  }
}
