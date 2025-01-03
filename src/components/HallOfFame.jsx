

import React, { useState, useEffect } from 'react';
import { Filter, ChevronDown, ChevronUp, Trophy } from 'lucide-react';
import { getHallOfFameJsonData } from '../utils/dataService';
// import TelegramUserLink from './SubComponents/TelegramUserLink'; // Adjust the path as necessary
// import DiscordUserLink from './SubComponents/DiscordUserLink'; // Adjust the path as necessary
import WinnersList from './SubComponents/WinnersList'; // Adjust the path as necessary
import GradientText from './ReactBits/GradientText/GradientText';


const MIN_YEAR = 2018;
const currentYear = new Date().getFullYear();
const MAX_YEAR = currentYear + 1 <= 2100 ? currentYear + 1 : 2100;

// Tournament size categories
const TOURNAMENT_SIZES = {
    MINI: { max: 10, label: 'Mini (≤10)' },
    SMALL: { max: 20, label: 'Small (≤20)' },
    MEDIUM: { max: 40, label: 'Medium (≤40)' },
    LARGE: { max: 100, label: 'Large (≤100)' },
    GRAND: { max: 200, label: 'Grand (≤200)' },
    MEGA: { max: Infinity, label: 'Mega (200+)' }
  };

const getTournamentSizeCategory = (participantCount) => {
    if (participantCount <= TOURNAMENT_SIZES.MINI.max) return 'MINI';
    if (participantCount <= TOURNAMENT_SIZES.SMALL.max) return 'SMALL';
    if (participantCount <= TOURNAMENT_SIZES.MEDIUM.max) return 'MEDIUM';
    if (participantCount <= TOURNAMENT_SIZES.LARGE.max) return 'LARGE';
    if (participantCount <= TOURNAMENT_SIZES.GRAND.max) return 'GRAND';
    return 'MEGA';
  };


  const applyFilters = () => {
    let filtered = [...tournaments];
  
    if (filters.platform !== 'all') {
      filtered = filtered.filter(t => t.platform === filters.platform);
    }
  
    if (filters.startYear) {
      const startYear = parseInt(filters.startYear);
      if (startYear >= MIN_YEAR && startYear <= MAX_YEAR) {
        filtered = filtered.filter(t => new Date(t.start_date).getFullYear() >= startYear);
      }
    }
  
    if (filters.endYear) {
      const endYear = parseInt(filters.endYear);
      if (endYear >= MIN_YEAR && endYear <= MAX_YEAR) {
        filtered = filtered.filter(t => new Date(t.end_date).getFullYear() <= endYear);
      }
    }
  
    if (filters.tournamentSize !== 'all') {
      filtered = filtered.filter(t => getTournamentSizeCategory(t.participant_count) === filters.tournamentSize);
    }
  
    setFilteredTournaments(filtered);
  };


  const HallOfFame = () => {
    const [tournaments, setTournaments] = useState([]);
    const [filteredTournaments, setFilteredTournaments] = useState([]);
    const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
    const [filters, setFilters] = useState({
      platform: 'all',
      startYear: '',
      endYear: '',
      tournamentSize: 'all'
    });
  
    useEffect(() => {
      const data = getHallOfFameJsonData();
      setTournaments(data.hall_of_fame);
      setFilteredTournaments(data.hall_of_fame);
    }, []);
  
    const applyFilters = () => {
      let filtered = [...tournaments];
  
      if (filters.platform !== 'all') {
        filtered = filtered.filter(t => t.platform === filters.platform);
      }
  
      if (filters.startYear) {
        filtered = filtered.filter(t => new Date(t.start_date).getFullYear() >= parseInt(filters.startYear));
      }
  
      if (filters.endYear) {
        filtered = filtered.filter(t => new Date(t.end_date).getFullYear() <= parseInt(filters.endYear));
      }
  
      if (filters.tournamentSize !== 'all') {
        // This will be implemented when participant count is added to the JSON
        filtered = filtered.filter(t => getTournamentSizeCategory(t.participant_count) === filters.tournamentSize);
      }
  
      setFilteredTournaments(filtered);
    };
  
    useEffect(() => {
      applyFilters();
    }, [filters, tournaments]);
  
    return (
      <div className="min-h-screen text-gray-100"> {/* Removed bg-gray-900 */}
        {/* Header */}
        <header className="bg-gray-800/60 p-6 shadow-lg">
          <div className="container mx-auto">
            {/* <img 
              src="https://resources.efootball.fans/images/logo/eFF_FullLogo_small.png" 
              alt="eFootball.Fans Hall Of Fame" 
              className="h-20 w-auto mx-auto"
            /> */}
    
            <GradientText
            colors={["#fefe00", "#e6ab16", "#fffa18", "#fefe00", "#ffff99", "#fffa18", "#e6ab16", "#fefe00", "#fefe00", "#e6ab16"]} // Custom gradient colors "#4079ff", "#0000dc", 
            animationSpeed={5} // Custom animation speed in seconds
            showBorder={false} // Show or hide border
            className="text-5xl custom-class"
            >
            Hall Of Fame!
            </GradientText>

          </div>
        </header>
  
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Filters Button */}
          <div className="mb-8">
            <button
              onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
              className="flex items-center gap-2 bg-gray-800/60 hover:bg-gray-700/80 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Filter size={20} />
              Filters
              {isFilterPanelOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
  
            {/* Filter Panel */}
            {isFilterPanelOpen && (
              <div className="mt-4 p-6 bg-gray-800/60 rounded-lg animate-slideDown">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Platform Filter */}
                  <div>
                    <label className="block mb-2 text-sm font-medium">Tournament Platform</label>
                    <select
                      value={filters.platform}
                      onChange={(e) => setFilters({ ...filters, platform: e.target.value })}
                      className="w-full bg-gray-700/80 rounded-lg px-3 py-2"
                    >
                      <option value="all">All Platforms</option>
                      <option value="Discord">Discord</option>
                      <option value="Telegram">Telegram</option>
                    </select>
                  </div>
  
                  {/* Year Range Filters */}
                  <div>
                        <label className="block mb-2 text-sm font-medium">Start Year</label>
                        <input
                        type="number"
                        value={filters.startYear}
                        onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (value >= MIN_YEAR && value <= MAX_YEAR) {
                            setFilters({ ...filters, startYear: value });
                        }
                        }}
                        min={MIN_YEAR}
                        max={MAX_YEAR}
                        className="w-full bg-gray-700/80 rounded-lg px-3 py-2"
                        placeholder="From Year"
                    />
                  </div>
  
                  <div>
                    <label className="block mb-2 text-sm font-medium">End Year</label>
                    <input
                        type="number"
                        value={filters.endYear}
                        onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (value >= MIN_YEAR && value <= MAX_YEAR) {
                            setFilters({ ...filters, endYear: value });
                        }
                        }}
                        min={MIN_YEAR}
                        max={MAX_YEAR}
                        className="w-full bg-gray-700/80 rounded-lg px-3 py-2"
                        placeholder="To Year"
                    />
                  </div>
  
                  {/* Tournament Size Filter */}
                  <div>
                    <label className="block mb-2 text-sm font-medium">Tournament Size</label>
                    <select
                      value={filters.tournamentSize}
                      onChange={(e) => setFilters({ ...filters, tournamentSize: e.target.value })}
                      className="w-full bg-gray-700/80 rounded-lg px-3 py-2"
                    >
                      <option value="all">All Sizes</option>
                      {Object.entries(TOURNAMENT_SIZES).map(([key, { label }]) => (
                        <option key={key} value={key}>{label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
  
          {/* Tournaments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTournaments.map((tournament) => (

              <div
                key={tournament.id}
                className="bg-gray-800/60 rounded-lg overflow-hidden shadow-lg transform hover:scale-102 transition-transform duration-200"
              >
                {/* Tournament Header */}
                <div className="bg-gray-700/80 p-4">
                  <h2 className="text-xl font-bold mb-2">{tournament.tournament_name}</h2>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{new Date(tournament.start_date).toLocaleDateString()}</span>
                    <span>{tournament.platform}</span>
                  </div>
                </div>
  
                {/* Winners List */}
                <WinnersList winners={tournament.winners}/>
                {/* <div className="p-4">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Trophy size={20} className="text-yellow-500" />
                    Winners
                  </h3>
                  <div className="space-y-4">
                    {tournament.winners.map((winner) => (
                      <div 
                        key={`${tournament.id}-${winner.rank}`}
                        className="flex items-center gap-4 p-3 bg-gray-700/80 rounded-lg"
                      >
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full">
                          {winner.rank}
                        </div>
                        <div>
                          <div className="font-medium">{`${winner.first_name} ${winner.last_name}`}</div>
                          {winner.telegram_username && (
                            <TelegramUserLink username={winner.telegram_username} />
                          )}
                          {winner.discord_username && (
                            <DiscordUserLink username={winner.discord_username} />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  };
  
  export default HallOfFame;