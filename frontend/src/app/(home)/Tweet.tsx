import type {ITweet} from "@/shared/types/tweet.interface";

interface TweetProps {
    tweet: ITweet
}


export function Tweet({tweet}: TweetProps){
    return (
        <div>
            <p>{tweet.text}</p>
            <span>@{tweet.author}</span>
        </div>
    )
}