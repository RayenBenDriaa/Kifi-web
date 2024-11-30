import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import KifiPanner from "@modules/common/icons/kifiPanner"

import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[95vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <Image
        src="/img/kifipanner.png"
        width={1897}
        height={600}
        alt="image source error check US"
        unoptimized
      />
    </div>
  )
}

export default Hero
