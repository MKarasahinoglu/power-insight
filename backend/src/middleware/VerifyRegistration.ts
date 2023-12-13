import { Injectable, NestMiddleware } from "@nestjs/common"
import { DatabaseServiceElasticSearch } from "src/data/elasticsearch/elasticsearch.service"
import { Request, Response, NextFunction } from "express"

@Injectable()
export class VerifyRegistration implements NestMiddleware {
  constructor(private readonly databaseServiceElasticSearch:DatabaseServiceElasticSearch) {}

  async use(req: Request, res: Response, next: Function) {
    const user = await this.databaseServiceElasticSearch.getClient().search({
      query: {
        term: {
          "email.keyword" : req.body.email
        }
      }
    })
    
    if(user.hits.hits.length > 0) {
      res.status(400).send("This email is already in use. Please try another email.")
      return
    }

    next()
  }
}