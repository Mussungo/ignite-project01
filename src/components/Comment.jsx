import { Avatar } from "./Avatar"
import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

export function Comment({comment})  {
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/110233070?v=4"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Julio Jorge</strong>
              <time title="11 de Maio as 8h13" dateTime="2022-05-11 08:00:38">Cerca 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>{comment}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}