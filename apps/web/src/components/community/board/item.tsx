import Image from 'next/image';
import { FaRegComment } from 'react-icons/fa';
import { BoardType } from '@lvc/shared/types';
import Link from 'next/link';
import Status from './status';
const BoardItem = ({
  isActivated,
  title,
  author,
  category,
  createdAt,
  id
}: BoardType) => {
  return (
    <Link
      href={`/community/${id}`}
      className="flex justify-between border-b border-gray-300 p-4 duration-200 hover:bg-gray-100">
      <div className="flex flex-col gap-2">
        <Status
          createdAt={createdAt}
          category={category}
          isActivated={isActivated}
        />

        <span className="text-lg font-medium">{title}</span>
        <div className="flex gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <FaRegComment size=".75rem" />
            <span>{2}</span>
          </div>
          <span>by {author.name}</span>
        </div>
      </div>
      <div className="relative h-auto w-28">
        <Image src="/test.jpg" className="object-cover" alt="글 이미지" fill />
      </div>
    </Link>
  );
};

export default BoardItem;
