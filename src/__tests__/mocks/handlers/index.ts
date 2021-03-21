import { rest } from 'msw'
import * as post from './post'

export const handlers = [rest.post('/api', post.postHandler)]
