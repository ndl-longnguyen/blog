export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ndlong.site'

export const SUBDOMAINS = {
  arcade: process.env.NEXT_PUBLIC_ARCADE_URL || 'https://arcade.ndlong.site',
  click: process.env.NEXT_PUBLIC_CLICK_URL || 'https://click.ndlong.site',
  kids: process.env.NEXT_PUBLIC_KIDS_URL || 'https://kids.ndlong.site',
  link: process.env.NEXT_PUBLIC_LINK_URL || 'https://link.ndlong.site',
  image: process.env.NEXT_PUBLIC_IMAGE_URL || 'https://image.ndlong.site',
  laisuat: process.env.NEXT_PUBLIC_LAISUAT_URL || process.env.NEXT_PUBLIC_LAISAUT_URL || 'https://laisuat.ndlong.site',
    laisaut: process.env.NEXT_PUBLIC_LAISUAT_URL || process.env.NEXT_PUBLIC_LAISAUT_URL || 'https://laisuat.ndlong.site',
  fb: process.env.NEXT_PUBLIC_FB_URL || 'https://fb.ndlong.site',
} as const
