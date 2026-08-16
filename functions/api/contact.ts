import { handleFormRequest, type PagesContext } from '../_lib/forms'

export const onRequest = (context: PagesContext): Promise<Response> =>
  handleFormRequest(context, 'contact')
