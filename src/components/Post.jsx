import { useState } from 'react'
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post({author, publishedAt, content}) {
  //const [comments, setComments] = useState([{id: 1, content: "Muito bom Devon, parabéns!! 👏👏"}, {id: 2, content: "Adorei seu novo portifa Devon"}])
  const [comments, setComments] = useState([
    'Post muito bacana'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormmatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event){
    event.preventDefault()
    setComments([
      ...comments, 
      newCommentText
    ])
    setNewCommentText('')
  }

  function handleNewCommentChange(event){
    setNewCommentText(event.target.value)
  }

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <strong>{author.role}</strong>
          </div>
        </div>

        <time title={publishedDateFormmatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if(line.type === 'paragraph'){
            return <p key={line.content}>{line.content}</p>
          }else if(line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe o seu FeedBack</strong>
        <textarea
          placeholder="Deixe um cometario"
          name='textarea'
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type="submit">Publicar</button>  
        </footer> 
      </form>

      <div className={styles.commentList}>
         {comments.map(comment => {
          return <Comment key={comment} comment={comment} />
         })}
      </div>
    </article>
  )
}