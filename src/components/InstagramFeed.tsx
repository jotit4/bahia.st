"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Instagram } from "lucide-react"

export function InstagramFeed() {
  const instagramPosts = [
    { id: 1, image: "/images/if1.png", link: "https://www.instagram.com/p/DJ23j3JMJED/?img_index=1" },
    { id: 2, image: "/images/if2.png", link: "https://www.instagram.com/p/DJzGFb9ASCS/?img_index=1" },
    { id: 3, image: "/images/if3.png", link: "https://www.instagram.com/p/DJxClcwJO7r/?img_index=1" },
    { id: 4, image: "/images/if4.png", link: "https://www.instagram.com/p/DJojMsWA2Ow/?img_index=1" },
    { id: 5, image: "/images/if5.png", link: "https://www.instagram.com/p/DJjmlAVNcFH/?img_index=1" },
    { id: 6, image: "/images/if6.png", link: "https://www.instagram.com/p/DKIcuPqytJn/?img_index=1" },
  ]

  return (
    <section className="py-16 bg-cream dark:bg-gray-900">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4 font-light text-xl">Seguinos @bahia.st</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 font-light text-lg">Mirá cómo nuestra comunidad usa la moda sustentable</p>
          <a
            href="https://www.instagram.com/bahia.st/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sage hover:text-sage/80 transition-colors font-light text-lg"
          >
            <Instagram size={20} />
            Seguir en Instagram
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer"
            >
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={`Post de Instagram ${post.id}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Instagram
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    size={24}
                  />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InstagramFeed
