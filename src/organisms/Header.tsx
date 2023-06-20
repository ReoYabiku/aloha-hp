import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link to={'/introduction'}>団体紹介</Link>
      <Link to={'/members'}>メンバー紹介</Link>
      <Link to={'/documents'}>資料一覧</Link>
      <Link to={'/activities'}>活動実績</Link>
    </>
  );
}

export default Header;