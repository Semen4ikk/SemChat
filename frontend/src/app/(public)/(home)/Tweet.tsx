import styles from './Tweet.module.css'
import Image from 'next/image'

interface Tweet {
    id: string
    author: string
    text: string
}

interface Props {
    tweet: Tweet
}

export function Tweet({ tweet }: Props) {
    return (
        <div className={styles.tweet}>
            <div className={styles.header}>
                <Image
                    src="/x-logo.svg"
                    alt="X Logo"
                    width={24}
                    height={24}
                />
                <span className={styles.author}>@{tweet.author}</span>
            </div>
            <p className={styles.text}>{tweet.text}</p>
        </div>
    )
}