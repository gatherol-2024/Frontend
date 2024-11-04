import Image from 'next/image';
import Status from '../board/status';
import { Button } from '@lvc/ui';
import { LuThumbsUp } from 'react-icons/lu';
import { BoardType } from '@lvc/shared/types';
interface PostContentProps extends BoardType {
  commentsCount: number;
}
const PostContent = ({
  category,
  createdAt,
  isActivated,
  title,
  author,
  content,
  commentsCount
}: PostContentProps) => {
  return (
    <div className="rounded-md bg-white shadow-sm">
      <div className="flex flex-col gap-2 border-b border-gray-300 p-4">
        <Status
          category={category}
          createdAt={createdAt}
          isActivated={isActivated}
        />
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {author?.userImage && (
              <Image
                className="rounded-full object-cover"
                width={25}
                height={25}
                src={author.googleImage || author.userImage}
                alt="유저 이미지"
              />
            )}

            <span className="text-sm font-medium">{author?.name}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>조회수 25</span>
            <span>댓글 {commentsCount}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 p-4">
        <div className="w-full">{content}</div>
        <Button className="border-primary hover:bg-primary text-primary rounded-md border hover:text-white">
          <LuThumbsUp />
          추천 {5}
        </Button>
      </div>
    </div>
  );
};
export default PostContent;
