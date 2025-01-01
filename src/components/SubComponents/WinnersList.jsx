import React, { useState } from 'react';
import { Instagram, Trophy } from 'lucide-react';
import TelegramUserLink from './TelegramUserLink';
import DiscordUserLink from './DiscordUserLink';
import InstagramUserLink from './InstagramUserLink';
import SpotlightCard from '../ReactBits/SpotlightCard/SpotlightCard';

const getCountryCode = (country) => {
    const countryMap = {
      'USA': 'us',
      'India': 'in',
      // Add more mappings as needed
    };
    
    return countryMap[country] || country.toLowerCase();
  };

const getCountryFlag = (country) => {
    const countryToFlag = {
      'USA': '🇺🇸',
      'India': '🇮🇳',
      // Add more mappings as needed
    };
    
    return countryToFlag[country] || country;
  };

const WinnerCard = ({ winner }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SpotlightCard className="rounded-lg" spotlightColor="rgba(255, 255, 255, 0.7)">
    <div 
      onClick={() => setIsExpanded(!isExpanded)}
      className="bg-gray-700/80 rounded-lg p-3 cursor-pointer hover:bg-gray-600/80 transition-all duration-200 relative"
    >
      <div className="flex items-center gap-3">
        {/* Rank Circle */}
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full">
          {winner.rank}
        </div>

        {/* Main Content */}
        <div className="flex-grow">
          {/* Name and Country Row */}
          <div className="flex items-center gap-2">
            <span className="font-medium">
              {`${winner.first_name} ${winner.last_name}`}
            </span>
            {winner.country && (
                <img 
                src={`https://flagcdn.com/16x12/${getCountryCode(winner.country)}.png`}
                alt={winner.country}
                title={winner.country}
                className="w-4 h-3"
            />
            /*<span className="text-sm" aria-label={winner.country}>
                {getCountryFlag(winner.country)}
            </span>*/
            )}
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-2 mt-1">
            {winner.telegram_username && (
              <TelegramUserLink username={winner.telegram_username} compact={true} />
            )}
            {winner.discord_username && (
              <DiscordUserLink username={winner.discord_username} compact={true} />
            )}
            {winner.instagram_username && (
              <InstagramUserLink username={winner.instagram_username} compact={true} />
              /*<a
                href={`https://instagram.com/${winner.instagram_username}`}
                target="_blank"
                rel="noopener noreferrer"
                // className="text-pink-400 hover:text-pink-300"
                className="inline-flex items-center text-sm text-pink-100 hover:text-pink-600"
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>*/
            )}
          </div>

          {/* Expandable Place Details */}
          {isExpanded && winner.place && (
            <div className="mt-2 text-sm text-gray-300 animate-fadeIn">
              📍 {winner.place}
            </div>
          )}
        </div>
      </div>
      
    </div>
    </SpotlightCard>
  );
};

const WinnersList = ({ winners }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Trophy size={20} className="text-yellow-500" />
        Winners
      </h3>
      
      <div className="space-y-3">
        {winners.map((winner) => (
          <WinnerCard key={`winner-${winner.rank}`} winner={winner} />
        ))}
      </div>
    </div>
  );
};

export default WinnersList;