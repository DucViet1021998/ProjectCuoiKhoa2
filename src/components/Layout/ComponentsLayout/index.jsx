import styles from './Header/Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classNames from 'classnames/bind'
import images from '~/assets/images'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'


const cx = classNames.bind(styles)

export default function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className="logo">
                    <img width={'118px'} height={'42px'} src={images.logo} alt='tiktok' />
                </div>
                <div className={cx("search")}>
                    <input placeholder='Search accounts and videos' spellCheck="fasle" />
                    <FontAwesomeIcon className={cx("clear")} icon={faCircleXmark} />
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx("search-btn")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx("actions")}>

                </div>
            </div>
        </header>
    )

}