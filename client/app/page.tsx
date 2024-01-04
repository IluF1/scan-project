import img_one from '@/public/Group 13.png'
import img_time from '@/public/Mask group.png'
import img_arrowLeft from '@/public/arrow_left.png'
import img_arrowRight from '@/public/arrow_right.png'
import Image from 'next/image'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import styles from './styles/page.module.css'
import img_two from '@/public/Group 14.png'

export default function Home() {
	return (
		<div>
			<Header />
			<Footer />
			<div className={styles.block_one}>
				<h1 className={styles.block_one_text}>
					сервис по поиску <br /> публикаций <br /> о компании <br /> по его ИНН
				</h1>
				<p className={styles.description_block_one}>
					Комплексный анализ публикаций, получение данных <br /> в формате PDF
					на электронную почту.
				</p>
				<button className={styles.dataReguest}>Запросить данные</button>
				<Image src={img_one} alt='not' className={styles.img_blockOne} />
			</div>
			<div className={styles.block_two}>
				<h1>Почему именно мы</h1>

				<div className={styles.slides_block}>
					<div className={styles.slideItem_one}>
						<Image src={img_time} alt='not' />
					</div>
					<div className={styles.slideItem_two}></div>
					<div className={styles.slideItem_three}></div>
				</div>
			
			</div>
      <div className={styles.block_three}>
        <Image src={img_two} alt='not'/>
      </div>
		</div>
	)
}
