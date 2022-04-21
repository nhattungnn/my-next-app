import React from "react";
import styles from './index.module.scss';
import Link from "next/link";
import Nhanhang from "@pages/nhanhang";

const MenuTop = () => {
    return (
        <div className={styles.menu}>
        <Link href="/nhanhang" passHref>
            Nhãn hàng pharmacity
        </Link>
        </div>
    )
}
export default MenuTop;