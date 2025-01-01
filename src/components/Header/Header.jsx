// import React from 'react';
// import './header.css'; // Import your CSS file for styling

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="container">
//         <div className="logo">
//           <a href="/">eFootball.Fans</a>
//         </div>
//         <nav className="nav">
//           <ul className="nav-list">
//             <li className="nav-item"><a href="https://www.efootball.fans">Home</a></li>
//             <li className="nav-item"><a href="/about">About</a></li>
//             <li className="nav-item"><a href="/tournament">Tournament</a></li>
//             <li className="nav-item"><a href="/hall-of-fame">Hall of Fame</a></li>
//             <li className="nav-item"><a href="/contact">Contact</a></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
// import React from 'react';
// import './header.css';

// const Header = () => {
//   return (
//     <header id="header-wrapper">
//       <div className="header-content flex-center show">
//         <div className="container row-x1">
//           <div className="header-items">
//             <div className="main-logo section" id="main-logo">
//               <a className="mobile-menu-toggle" href="javascript:;" role="button" title="Menu"></a>
//               <a className="logo-img" href="https://community.efootball.fans/">
//                 <img alt="eFootball Fans Community" data-height="100" data-width="468" src="https://blogger.googleusercontent.com/img/a/AVvXsEi5iywIjTB-g91aNVDbjJJODDTNgVFKI--F-A6HJxcNFPN0wPjHG_9O0MRy6EhsZGIwzVfXDrUEEN7SzJnZpFV577lmznGciftE3yxVaMr2Gr5Vp-dtax16vqwctrxkNmSGUl4RLLgwqDgFqdk0iUTB4EyXVy0bjF--ZDVpKQaAdo3FU2ybQfCItEYe8KDq=s252" title="eFootball Fans Community Blog" />
//                 <h1 id="h1-off">eFootball Fans Community</h1>
//               </a>
//             </div>
//             <div className="widget Text" id="Text100">
//               <p className="logo-description excerpt">Tournaments by eFootball Fans</p>
//             </div>
//           </div>
//           <div className="header-icons section" id="header-icons">
//             <div className="widget LinkList" id="LinkList100">
//               <ul className="social-icons social social-bg">
//                 <li className="telegram link-0"><a className="telegram" href="https://telegram.eFootball.fans" rel="noopener noreferrer" target="_blank" title="telegram">Telegram</a></li>
//                 <li className="discord link-1"><a className="discord" href="https://discord.efootball.fans" rel="noopener noreferrer" target="_blank" title="discord">Discord</a></li>
//                 <li className="instagram link-2"><a className="instagram" href="https://www.instagram.com/eFootball" rel="noopener noreferrer" target="_blank" title="instagram">Instagram</a></li>
//                 <li className="youtube link-3"><a className="youtube" href="https://www.youtube.com/channel/UCZ0HWA4sdAdkXIY8dBjHjWw" rel="noopener noreferrer" target="_blank" title="youtube">YouTube</a></li>
//                 <li className="steam link-4"><a className="steam" href="https://store.steampowered.com/app/1665460/eFootball/" rel="noopener noreferrer" target="_blank" title="steam">Steam</a></li>
//               </ul>
//             </div>
//           </div>
//           <a className="mobile-search-toggle" href="javascript:;" role="button" title="Search"></a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const socialLinks = [
    { name: 'YouTube', href: 'https://www.youtube.com/channel/UCZ0HWA4sdAdkXIY8dBjHjWw', icon: 'youtube' },
    { name: 'Telegram', href: 'https://telegram.eFootball.fans', icon: 'telegram' },
    { name: 'Discord', href: 'https://discord.eFootball.fans', icon: 'discord' },
    { name: 'Instagram', href: 'https://www.instagram.com/eFootball', icon: 'instagram' },
    { name: 'Steam', href: 'https://store.steampowered.com/app/1665460/eFootball/', icon: 'steam' }
  ];

  // const SocialIcon = ({ href, name, children }) => (
  //   <a
  //     href={href}
  //     target="_blank"
  //     rel="noopener noreferrer"
  //     className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
  //   >
  //     <span className="sr-only">{name}</span>
  //     {children}
  //   </a>
  // );
  
  // const socialLinks = [
  //   {
  //     name: 'Telegram Group',
  //     href: 'https://telegram.eFootball.fans',
  //     icon: (
  //       <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
  //         <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  //       </svg>
  //     )
  //   },
  //   {
  //     name: 'Discord Server',
  //     href: 'https://discord.eFootball.fans',
  //     icon: (
  //       <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
  //         <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
  //       </svg>
  //     )
  //   },
  //   {
  //     name: 'YouTube Channel',
  //     href: 'https://www.youtube.com/channel/UCZ0HWA4sdAdkXIY8dBjHjWw',
  //     icon: (
  //       <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
  //         <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  //       </svg>
  //     )
  //   },
  //   {
  //     name: 'Instagram',
  //     href: 'https://www.instagram.com/eFootball',
  //     icon: (
  //       <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
  //         <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
  //       </svg>
  //     )
  //   },
  //   {
  //     name: 'Steam',
  //     href: 'https://store.steampowered.com/app/1665460/eFootball/',
  //     icon: (
  //       <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
  //         <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
  //       </svg>
  //     )
  //   }
  // ];

  const navItems = [
    { name: 'HOME', href: 'https://community.efootball.fans/', hasSubmenu: true },
    { name: 'TELEGRAM', href: 'https://telegram.efootball.fans/', hasSubmenu: true },
    { name: 'DISCORD', href: 'https://discord.efootball.fans/', hasSubmenu: true }
  ];

  return (
    <header className="w-full bg-gray-900">
      {/* Top Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-200 hover:text-blue-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEi5iywIjTB-g91aNVDbjJJODDTNgVFKI--F-A6HJxcNFPN0wPjHG_9O0MRy6EhsZGIwzVfXDrUEEN7SzJnZpFV577lmznGciftE3yxVaMr2Gr5Vp-dtax16vqwctrxkNmSGUl4RLLgwqDgFqdk0iUTB4EyXVy0bjF--ZDVpKQaAdo3FU2ybQfCItEYe8KDq=s252"
                alt="eFootball Fans Official"
                className="h-8 lg:h-12 w-auto"
              />
              <span className="ml-2 text-white font-semibold text-sm lg:text-lg hidden md:block">
                eFootball Fans International Community
              </span>
            </a>
          </div>

          {/* Social Icons - Hidden on Mobile */}
          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-200 hover:text-blue-400 ${link.icon}`}
              >
                <span className="sr-only">{link.name}</span>
                <div className={`w-6 h-6 bg-contain bg-center bg-no-repeat social-icon-${link.icon.toLowerCase()}`}></div>
              </a>
            ))}
          </div>

          {/* Search Toggle - Mobile */}
          <button
            className="lg:hidden p-2 text-gray-200 hover:text-blue-400"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search size={24} />
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex items-center justify-between h-12">
            {/* Desktop Navigation */}
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-white hover:text-gray-200 py-3 inline-block text-sm font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Search */}
            <div className="relative">
              <button
                className="text-white hover:text-gray-200"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800">
          <div className="container mx-auto px-4 py-2">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block text-white hover:text-gray-200 py-2 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* Mobile Social Icons */}
            <div className="flex items-center space-x-4 mt-4 pb-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-blue-400"
                >
                  <span className="sr-only">{link.name}</span>
                  <div className={`w-6 h-6 bg-contain bg-center bg-no-repeat social-icon-${link.icon.toLowerCase()}`}></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-0 left-0 w-full bg-gray-900 p-4 z-50">
          <div className="container mx-auto flex items-center">
            <input
              type="search"
              placeholder="Search..."
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="ml-2 text-gray-200 hover:text-blue-400"
              onClick={() => setIsSearchOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;