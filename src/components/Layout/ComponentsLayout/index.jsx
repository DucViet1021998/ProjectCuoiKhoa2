import styles from './Header/Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'

import classNames from 'classnames/bind'
import images from '~/assets/images'
import { faCircleXmark, faMagnifyingGlass, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItems from '~/components/AccountItems/AccountItems'
import Button from '~/components/Button/Button'

const cx = classNames.bind(styles)

export default function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className="logo">
                    <img width={'118px'} height={'42px'} src={images.logo} alt='tiktok' />
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h5 className={cx('search-title')}>
                                    Accounts
                                </h5>
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                            </PopperWrapper>
                        </div>
                    )}>
                    <div className={cx("search")}>
                        <input placeholder='Search accounts and videos' spellCheck="fasle" />
                        <FontAwesomeIcon className={cx("clear")} icon={faCircleXmark} />
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx("search-btn")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx("actions")}>
                    <Button text >Upload</Button>
                    <Button primary >Login</Button>
                </div>
            </div>
        </header>
    )

}