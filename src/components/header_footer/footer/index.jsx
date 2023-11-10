import { useMemo } from 'react';
import { convertFooterNavToMenu } from '../../../utils/site';
import FooterLink from './FooterLink';
import '../../../styles/footer.scss';
import { useSelector } from 'react-redux';

const Footer = () => {
    const categories = useSelector(state => state.categories);
    const footerLinks = useMemo(() => convertFooterNavToMenu(categories), [categories]);

    return (
        <footer className="footer">
            <ul className="navigate flex-row">
                {
                    footerLinks.map((footerLink, i) => <FooterLink {...footerLink} key={i} />)
                }
            </ul>
            <div className="copyright">
                <p>2001-2023 cardStore, Inc.</p>
                <p>
                    <a
                        href="http://card-store.netlify.app"
                        style={{ color: 'var(--notification-bg)', textDecoration: 'none' }}
                        className="link"
                    >cardStore</a>
                    <span>features a wide selection of sports trading cards,</span>
                </p>
                <p>including rookie cards, team sets and graded cards.</p>
            </div>
        </footer>
    )
};

export default Footer
