import React from "react";
import styles from './index.module.css';
import {Youtubedata} from "@pages/Youtubedata";


const Youtube = () => {
    return (
        <div className={styles.youtubeList}>
                {
                    Youtubedata.map((item,key) => (
                        <div key={key} className={styles.youtubeItem}>
                            <div className={styles.youtubeImage}>
                                <img src={item.image} alt=""/>
                            </div>
                            <div className={styles.youtubeFooter}>
                                <div className={styles.youtubeAvatar}>
                                    <img src={item.avatar} alt=""/>
                                </div>
                                <div className={styles.youtubeInfo}>
                                    <div className={styles.youtubeName}>{item.name}</div>
                                    <div className={styles.youtubeAuthor}>{item.author}</div>
                                </div>
                            </div>
                        </div>
                    ) )
                }
        </div>

    )
}

export default Youtube;

