
import SideBar from "./SideBar";
import styles from './DefaultLayout.module.scss'
import classNames from "classnames/bind";
import Header from "../ComponentsLayout/Header";

const cx = classNames.bind(styles)

export default function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx("container")}>
                <SideBar />
                <div className={cx("content")}> {children} </div>
            </div>
        </div>
    )
}