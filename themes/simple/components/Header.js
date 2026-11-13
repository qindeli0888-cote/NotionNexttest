import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'
import SocialButton from './SocialButton'
import { useRouter } from 'next/router'

/**
 * 网站顶部
 * @returns
 */
export default function Header(props) {
  const { siteInfo } = props
  const router = useRouter()

  if (router.pathname === '/') {
    return (
      <header className='lily-os-site-header'>
        <SmartLink href='/' className='lily-os-site-brand'>
          <span className='lily-os-brand-mark' aria-hidden='true'>
            L
          </span>
          <span>{CONFIG.LILY_OS_TITLE}</span>
        </SmartLink>
        <nav aria-label='首页快捷导航'>
          <a href='#active-projects'>Projects</a>
          <a href='#latest-work'>Works</a>
          <SmartLink href='/archive'>Knowledge</SmartLink>
          <SmartLink href='/search' className='lily-os-header-cta'>
            Search <span aria-hidden='true'>⌘ K</span>
          </SmartLink>
        </nav>
      </header>
    )
  }

  return (
    <header className='text-center justify-between items-center px-6 bg-white h-80 dark:bg-black relative z-10'>
      <div className='float-none inline-block py-12'>
        <SmartLink href='/'>
          {/* 可使用一张单图作为logo */}
          <div className='flex space-x-6 justify-center'>
            <div className='hover:rotate-45 hover:scale-125 transform duration-200 cursor-pointer justify-center items-center flex'>
              <LazyImage
                priority={true}
                src={siteInfo?.icon}
                className='rounded-full'
                width={100}
                height={100}
                alt={siteConfig('AUTHOR')}
              />
            </div>

            <div className='flex-col flex justify-center'>
              <div className='text-2xl font-serif dark:text-white py-2 hover:scale-105 transform duration-200'>
                {siteConfig('AUTHOR')}
              </div>
              <div
                className='font-light dark:text-white py-2 hover:scale-105 transform duration-200 text-center'
                dangerouslySetInnerHTML={{
                  __html: siteConfig('SIMPLE_LOGO_DESCRIPTION', null, CONFIG)
                }}
              />
            </div>
          </div>
        </SmartLink>

        <div className='flex justify-center'>
          <SocialButton />
        </div>
        <div className='text-xs mt-4 text-gray-500 dark:text-gray-300'>
          {siteConfig('DESCRIPTION')}
        </div>
      </div>
    </header>
  )
}
