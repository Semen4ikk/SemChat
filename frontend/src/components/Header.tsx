import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logoLink}>
                <Image
                    src="/x-logo.svg"
                    alt="X Logo"
                    width={28}
                    height={28}
                    priority
                />
            </Link>
            <nav className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/">Profile</Link>
                <Link href="/">Chats</Link>
            </nav>
        </header>
    )
}