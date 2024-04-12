import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { Season } from '@/types/search';

function MiniSeason({ name, episodes, episodesCount }: Season) {
  return (
    <TreeItem label={`${name} (${episodesCount} серий)`} itemId={name}>
      {episodes.map(({ name, date, description }) => (
        <TreeItem key={name} itemId={name} label={`${name}`} />
      ))}
    </TreeItem>
  );
}

export { MiniSeason };
