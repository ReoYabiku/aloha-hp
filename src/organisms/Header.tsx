import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
  return (
    <header>
      <Link to={'/'} className={style.logo}>
        <div className={style.logo_img_wrapper}>
          <img src="ALOHA_logo.png" alt="ALOHAのロゴ" width={45} height={45} />
        </div>
        <div>
          <h1 className={style.title}>ALOHA</h1>
          <p className={style.subtitle}>沖縄から東大を、日常に</p>
        </div>
      </Link>
      <div className={style.nav}>
        <Link to={'/introduction'} className={style.other_pages}>団体紹介</Link>
        <Link to={'/members'} className={style.other_pages}>メンバー紹介</Link>
        <Link to={'/documents'} className={style.other_pages}>資料一覧</Link>
        <Link to={'/activities'} className={style.other_pages}>活動実績</Link>
      </div>
    </header>
  );
}

export default Header;