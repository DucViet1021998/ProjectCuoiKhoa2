import classNames from "classnames/bind";
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'


const cx = classNames.bind(styles)

function Button({
    to,
    href,
    onClick,
    className,
    disable = false,
    text = false,
    large = false,
    small = false,
    children,
    leftIcon,
    rightIcon,
    outline = false,
    primary = false,
    rounded = false,
    ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    if (disable) {
        Object.keys(props).forEach(e => {
            if (e.startsWith('on') && typeof props[e] === 'function') {
                delete props[e]
            }
        })
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        disable,
        rounded,
        text
    })
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <span className={cx("title")} >{children}</span>
            {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
        </Comp>
    )
}


export default Button;