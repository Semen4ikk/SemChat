import Image from "next/image";
import styles from "../page.module.css";
import {Tweet} from "@/app/(home)/Tweet";

export default function Home() {
  return (
    <Tweet tweet={{author: 'Semik', text: 'Изучаю Next'}}/>
  );
}
