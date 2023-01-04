import classNames from 'classnames/bind'
import styles from './Header.module.scss'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCoins,
    faGear,
    faSignOut,
    faUser
} from '@fortawesome/free-solid-svg-icons'

import routesConfig from '~/config/routes';
import images from '~/assets/images'
import Button from '~/components/Button/Button'
import Menu from '~/components/Popper/Menu'
import { InboxIcon, MessageIcon, SearchIcon, UploadIcon } from '~/components/icons'
import Image from '~/components/Image'
import Search from '../Search'


const cx = classNames.bind(styles)


const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },

                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },

            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    }
];

export default function Header() {

    const currentUser = true
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/feedback'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ]




    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //
                break;
            default:
        }
    }


    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>



                {/* LOGO TIKTOK */}
                <div className="logo">
                    <Link to={routesConfig.home} className={cx('logo-link')}>
                        <img width={'118px'} height={'42px'} src={images.logo} alt='tiktok' />
                    </Link>
                </div>
                {/* END LOGO */}

                {/* Input Search  */}
                <Search />
                {/* End of Input Search  */}


                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <Tippy offset={[0, 5]} content='Upload video' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <UploadIcon width='2.4rem' />
                                </button>
                            </Tippy>
                            <Tippy content='Message' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <MessageIcon width='2.2rem' />
                                </button>
                            </Tippy>
                            <Tippy content='Inbox' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text >Upload</Button>
                            <Button primary >Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (

                            <Image
                                className={cx('user-avatar')}
                                src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/5e33dcbacf3585090627e9ad4b714b8f~c5_720x720.jpeg?x-expires=1672981200&x-signature=GkvP%2BKvmfoafjSyk7%2F7q5WCaLU0%3D'
                                alt='avatar'
                            />

                        ) : (

                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>

                </div>
            </div>
        </header>
    )

}