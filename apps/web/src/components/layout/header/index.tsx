import { Button } from '@lvc/ui';
import HeaderMenu from './menu';

const Header = () => {
  return (
    <nav className="flex h-16 w-full items-center bg-white px-8">
      <div className="text-2xl font-bold">LOGO</div>
      <div className="flex flex-1 justify-center gap-4">
        <HeaderMenu href="/community">커뮤니티</HeaderMenu>
        <HeaderMenu href="/teamvoice">팀보이스</HeaderMenu>
        <HeaderMenu href="/voicechat">보이스챗</HeaderMenu>
      </div>
      <Button>로그인</Button>
    </nav>
  );
};

export default Header;
