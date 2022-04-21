import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import IconCall from "@assets/svg/Call.svg";
import IconCart from "@assets/svg/Cart.svg";
import IconDropDownBlack from "@assets/svg/DropDownBlack.svg";
import IconDropDownWhite from "@assets/svg/DropDownWhite.svg";
import IconHamburger from "@assets/svg/Hamburger.svg";
import IconLocation from "@assets/svg/Location.svg";
import IconSearch from "@assets/svg/Search.svg";
import IconVietnam from "@assets/svg/Vietnam.svg";

const BannerTop = () => {
  return (
    <div className={styles.fullHeader}>
      <div className={styles.container}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={`${styles.hotline} ${styles.hotline1}`}>
              Hotline CSKH{" "}
              <span>
                <IconCall />
                <Link href="tel:1800 2001">
                  <span>1800 2001</span>
                </Link>
              </span>
            </div>
            <div className={`${styles.hotline} ${styles.hotline2}`}>
              Hotline Đặt hàng{" "}
              <span>
                <IconCall />
                <Link href="tel:1800 6821">
                  <span>1800 6821</span>
                </Link>
              </span>
            </div>
          </div>
          <div className={styles.headerTopRight}>
            <div className={styles.menu}>
              <Link href="/nhanhang">
                <p>Nhãn hàng Pharmacity</p>
              </Link>
              <Link href="/songkhoe">
                <p>Sống khoẻ</p>
              </Link>
              <Link href="/timhieubenh">
                <p>Tìm hiểu bệnh</p>
              </Link>
              <div className={styles.shop}>
                <IconLocation /> 500 cửa hàng
              </div>
              <div className={styles.language}>
                <IconVietnam /> Tiếng Việt <IconDropDownWhite />
              </div>
              <div className={styles.login}>
                Đăng nhập <IconLocation />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <img className={styles.logo} src="/images/Logo.png" alt="pmc-logo" />
          <div className={styles.menu}>
            <IconHamburger /> Danh mục <IconDropDownBlack />
          </div>
          <div className={styles.search}>
            <p className={styles.boxSearch}>
              <input type="text" placeholder="Anh [X] đang tìm gì hôm nay..." />
              <button>
                <IconSearch />
              </button>
            </p>
            <span>
              Khẩu trang Pharmacity Nước rửa tay khô Nước nhỏ mắt Vitamin
              Vitamin E100
            </span>
          </div>
          <div className={styles.delivery}>
            Giao tại: <b>Nhập địa chỉ của bạn</b> <span>Thay đổi</span>
          </div>
          <div className={styles.cart}>
            Giỏ hàng <IconCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTop;
