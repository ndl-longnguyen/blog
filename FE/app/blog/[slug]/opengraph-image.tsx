import { ImageResponse } from 'next/og'
import { BLOG_POSTS } from '@/lib/blog-data'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  const title = post?.title || 'Engineering Blog | Nguyen Dai Long'
  const category = post?.category || 'Technical Insights'
  const readTime = post?.readTime || '5 min read'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 80px',
          backgroundColor: '#0a192f',
          backgroundImage:
            'radial-gradient(circle at 90% 10%, rgba(212, 175, 55, 0.18), transparent 45%), radial-gradient(circle at 10% 90%, rgba(14, 165, 233, 0.15), transparent 50%)',
          fontFamily: 'sans-serif',
          color: '#f8fafc',
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                backgroundColor: 'rgba(212, 175, 55, 0.2)',
                border: '2px solid rgba(212, 175, 55, 0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#d4af37',
              }}
            >
              NDL
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  letterSpacing: '-0.5px',
                  color: '#f1f5f9',
                }}
              >
                Nguyen Dai Long
              </span>
              <span style={{ fontSize: '14px', color: '#94a3b8' }}>
                Engineering Blog &amp; System Insights
              </span>
            </div>
          </div>

          <div
            style={{
              padding: '10px 22px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              color: '#d4af37',
              fontSize: '18px',
              fontWeight: 700,
            }}
          >
            {category}
          </div>
        </div>

        {/* Center Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            margin: '20px 0',
          }}
        >
          <h1
            style={{
              fontSize: title.length > 70 ? '44px' : '54px',
              fontWeight: 900,
              lineHeight: 1.2,
              color: '#ffffff',
              margin: 0,
            }}
          >
            {title}
          </h1>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            paddingTop: '24px',
            color: '#94a3b8',
            fontSize: '18px',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Backend Lead</span>
            <span>•</span>
            <span>Da Nang, Vietnam</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
          <span style={{ color: '#d4af37', fontWeight: 700 }}>
            ndlong.site/blog
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
