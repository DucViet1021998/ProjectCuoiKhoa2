import styles from './SideBar.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
export default function SideBar() {
    return (
        <aside className={cx("wrapper")}>

            <h2>SideBar</h2>

        </aside>
    )
}