import React, { useEffect, useRef, useState } from 'react';
import MenuIcon from '../../assets/icons/menu.svg?raw';
import XIcon from '../../assets/icons/x.svg?raw';
import Logo from '../../assets/icons/logo.svg?raw';
import InstagramIcon from '../../assets/icons/instagram.svg?raw';
import LinkedInIcon from '../../assets/icons/linkedin.svg?raw';
import WhatsAppIcon from '../../assets/icons/whatsapp.svg?raw';
import classNames from 'classnames';
import Btn from '../Btn';

const Header: React.FC = () => {
    const navItemsDOM = useRef<HTMLDivElement | null>(null);
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

    const nav = [
        {
            label: 'About',
            href: '/#about',
        },
        {
            label: 'Feats',
            href: '/#feats',
        },
        {
            label: 'Pricing',
            href: '/#pricing',
        },
    ];

    useEffect(() => {
        const handleMobileNavClickOutside = (event: MouseEvent) => {
            const navItemsEl = navItemsDOM.current;

            if (navItemsEl && !navItemsEl.contains(event.target as Node)) {
                setShowMobileMenu(false);
            }
        };

        if (showMobileMenu) {
            document.addEventListener('click', handleMobileNavClickOutside);
        } else {
            document.removeEventListener('click', handleMobileNavClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleMobileNavClickOutside);
        };
    }, [showMobileMenu]);

    return (
        <header className="relative z-50">
            <div className="relative z-10 container">
                <nav className="relative flex items-center justify-between pt-6 lg:pt-8">
                    {/* Nav izquierda */}
                    <ul className="flex flex-row gap-8 items-center">
                        {nav.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="text-lg leading-none tracking-[-0.41px] uppercase md:text-sm"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* Logo centrado */}
                    <a
                        href="/"
                        className="flex justify-center flex-1"
                        aria-label="Home page"
                    >
                        <div
                            dangerouslySetInnerHTML={{ __html: Logo }}
                            className={classNames('w-[60px] md:w-[101px]', {
                                'max-md:grayscale-0 max-md:brightness-[0.2] max-md:invert-0':
                                    showMobileMenu,
                            })}
                        />
                    </a>
                    {/* Redes sociales derecha */}
                    <div className="flex flex-row gap-4 items-center">
                        <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
                            <div dangerouslySetInnerHTML={{ __html: XIcon }} style={{ width: 24, height: 24 }} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
                            <div dangerouslySetInnerHTML={{ __html: InstagramIcon }} style={{ width: 24, height: 24 }} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
                            <div dangerouslySetInnerHTML={{ __html: LinkedInIcon }} style={{ width: 24, height: 24 }} />
                        </a>
                        <a href="https://wa.me/" target="_blank" rel="noopener" aria-label="WhatsApp">
                            <div dangerouslySetInnerHTML={{ __html: WhatsAppIcon }} style={{ width: 24, height: 24 }} />
                        </a>
                    </div>
                </nav>
            </div>
            {showMobileMenu && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-appAccent md:hidden" />
            )}
        </header>
    );
};

export default Header;
