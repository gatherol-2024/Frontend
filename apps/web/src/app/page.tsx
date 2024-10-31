import { Button } from '@lvc/ui'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-test">
      <Button />
      <Image
        aria-hidden
        src="/globe.svg"
        alt="Globe icon"
        width={16}
        height={16}
      />
    </div>
  )
}
