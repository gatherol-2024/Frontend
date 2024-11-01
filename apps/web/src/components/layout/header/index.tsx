import { Button } from '@lvc/ui'
import HeaderMenu from './menu'

const Header = () => {
  return (
    <nav className="fixed flex h-16 w-full items-center px-8">
      <div className="text-2xl font-bold">LOGO</div>
      <div className="flex flex-1 justify-center gap-4">
        <HeaderMenu href="/">커뮤니티</HeaderMenu>
        <HeaderMenu href="test1">팀보이스</HeaderMenu>
        <HeaderMenu href="test2">보이스챗</HeaderMenu>
      </div>
      <Button>로그인</Button>
    </nav>
  )
}

export default Header
