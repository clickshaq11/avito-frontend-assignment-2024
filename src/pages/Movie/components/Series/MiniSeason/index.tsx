import { Season } from '@/types/search';

function MiniSeason({ name, episodes, episodesCount }: Season) {
  return (
    <div>
      <span>
        {name} ({episodesCount} серий)
      </span>
      <ul>
        {episodes.map(({ name, date, description }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export { MiniSeason };
