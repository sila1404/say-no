import { createFileRoute, Link } from '@tanstack/react-router'
import { m } from '#/paraglide/messages'

export const Route = createFileRoute('/$')({ component: NotFound })

function NotFound() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-4 py-4 text-center"
      style={{ backgroundColor: 'var(--canvas)', color: 'var(--ink)' }}
    >
      <div className="mx-auto max-w-[960px]">
        <h1
          className="mb-4 text-[38px] font-bold leading-[1.5] tracking-tight"
          style={{ color: 'var(--ink)' }}
        >
          404
        </h1>
        <p className="mb-8 text-base leading-[1.5]" style={{ color: 'var(--body)' }}>
          {m.not_found_message()}
        </p>
        <Link
          to="/"
          className="text-base font-medium"
          style={{
            backgroundColor: 'var(--ink)',
            color: 'var(--canvas)',
            padding: '4px 20px',
            borderRadius: '4px',
          }}
        >
          [&lt;] {m.not_found_home()}
        </Link>
      </div>
    </div>
  )
}
