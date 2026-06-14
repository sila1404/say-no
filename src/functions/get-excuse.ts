import { createServerFn } from '@tanstack/react-start'
import { getRandomExcuse } from '#/lib/excuses'

export const getExcuse = createServerFn({ method: 'GET' })
  .validator((data: { locale: string; category?: string }) => data)
  .handler(async ({ data }) => {
    return getRandomExcuse(data.locale, data.category)
  })
