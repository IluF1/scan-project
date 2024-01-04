import Logo from '@/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.css'

//TODO:доделать блок с авоторизацией
export default function Header() {
	return (
		<div>
			<Link href='/'>
				<Image src={Logo} alt='not' className={styles.logo} />
			</Link>
			<ul className={styles.page_list}>
				<li>
					<Link href='/'>Главная</Link>
				</li>
				<li>
					<Link href='/'>Тарифы</Link>
				</li>
				<li>
					<Link href='/'>FAQ</Link>
				</li>
			</ul>
			<div className={styles.companies_block}>
				<p className={styles.companies_number_text}>Использовано компаний</p>
				<h2 className={styles.companies_number}>34</h2>
				<p className={styles.companies_limit_text}>Лимит по компаниям</p>
				<h2 className={styles.companies_limit}>100</h2>
			</div>

			<div>
				<ul className={styles.autorization_block}>
					<li>
						<Link href='/autorization'>
						<button className={styles.reg_button}>Зарегистрироваться</button>
						</Link>
					</li>
					<li>
						<div className={styles.line}></div>
					</li>
					<li>
						<Link href='/autorization'>
							<button className={styles.sign_button}>Войти</button>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
