import { timeSince } from '@lvc/shared/utils';
import { CATEGORY } from '../../../constants/category';

interface StatusProps {
  category?: string;
  isActivated?: boolean;
  createdAt?: string;
}
const Status = ({ category, isActivated, createdAt }: StatusProps) => {
  return (
    <div className="flex gap-2">
      <div className="bg-secondary rounded-sm px-2 text-sm font-medium text-white">
        {CATEGORY.find((item) => item.itemValue == category)?.itemTitle}
      </div>
      {isActivated && (
        <div className="animate-pulse rounded-sm bg-red-500 px-2 text-sm font-medium text-white">
          LIVE
        </div>
      )}
      <span className="text-xs text-gray-500">{timeSince(createdAt)}</span>
    </div>
  );
};
export default Status;
