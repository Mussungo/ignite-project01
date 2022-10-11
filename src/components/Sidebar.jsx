import { PencilLine } from 'phosphor-react'

import styles from "./Sidebar.module.css"
/*import { Avatar } from "./Avatar"*/

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>

      <div className={styles.profile}>
        <img src = "https://github.com/maykbrito.png"/>

        <strong>Julio Jorge</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
          Editar o seu perfil
        </a>
      </footer>
    </aside>
  )
}