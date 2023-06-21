import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <section id='footer-content'>
        <h1>ALOHA</h1>
        <Link to={'/introduction'}>団体紹介</Link>
        <Link to={'/members'}>メンバー紹介</Link>
        <Link to={'/documents'}>資料一覧</Link>
        <Link to={'/activities'}>活動実績</Link>
      </section>
      <section id='copyright'>
        <p>Copyright © 2023 ALOHA All Rights Reserved.</p>
      </section>
    </>
  );
}

export default Footer;