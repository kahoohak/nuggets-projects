import styles from './index.module.scss'
import reactSvg from '@assets/react.svg'
import ReactSvgCom from '@assets/react.svg?react'
import Worker from './example.js?worker'

const worker = new Worker()
worker.addEventListener('message', (e) => {
  console.log(e)
})

export function Header() {
  return (
    <div className={`${styles.header} p-20px text-center`}>
      <h1 className="flex-c">this is vite</h1>
      <button
        className='bg-blue-400 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 text-sm text-white font-mono font-light py-2 px-4 border-2 border-rounded border-blue-200'
      >
        Button
      </button>
      <img src={reactSvg} alt="" />
      <ReactSvgCom />
      <img src={new URL('./logo.png', import.meta.env.VITE_IMG_BASE_URL).href} alt="" />
    </div>
  );
}
