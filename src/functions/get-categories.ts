import { createServerFn } from '@tanstack/react-start'
import { getCategories } from '#/lib/excuses'

export const getCategoriesFn = createServerFn({ method: 'GET' }).handler(
  async () => {
    return getCategories()
  },
)
