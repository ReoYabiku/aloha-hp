import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className='header-logo'>
        <div className='header-logo-img-wrapper'>
          <img src="ALOHA_logo.png" alt="ALOHAのロゴ" width={40} height={40} />
        </div>
        <div>
          <h1 className='header-title'>ALOHA</h1>
          <p className='header-subtitle'>沖縄から東大を、日常に</p>
        </div>
      </div>
      <div className='header-nav'>
        <Link to={'/introduction'}>団体紹介</Link>
        <Link to={'/members'}>メンバー紹介</Link>
        <Link to={'/documents'}>資料一覧</Link>
        <Link to={'/activities'}>活動実績</Link>
      </div>
    </header>
  );
}

export default Header;