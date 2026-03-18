import {Tweet} from "@/app/(public)/(home)/Tweet";
import styles from "@/app/(public)/(home)/page.module.css"
import {TWEETS} from "@/shared/data/tweets.data";
import {ITweet} from "@/shared/types/tweet.interface";
export default function Home() {
  return (
      <div className={styles.container}>
          <div className={styles.content}>
              <h1 className={styles.title}>Home</h1>
              {TWEETS.map((tweet: ITweet) =>
                  <Tweet key={tweet.id} tweet={tweet}/>
              )}

          </div>
      </div>

  );
}
