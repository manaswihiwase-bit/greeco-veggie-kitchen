import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"
import { ArrowDown, ArrowUp, ArrowUpRight, MapPin, Menu } from "lucide-react"

import heroImage from "./assets/images/cafe.png"
import gardenBowlImage from "./assets/images/garden-bowl.png"
import greekSaladImage from "./assets/images/greek-salad.png"
import tomatoSoupImage from "./assets/images/tomato-soup.png"

const dishes = [
  {
    name: "Greek Salad",
    description: "Crisp greens, tomatoes, cucumber, olives & feta.",
    price: "₹249",
    image: greekSaladImage,
  },
  {
    name: "Garden Bowl",
    description: "Seasonal vegetables, herbs, grains & house dressing.",
    price: "₹279",
    image: gardenBowlImage,
  },
  {
    name: "Roasted Tomato Soup",
    description: "Slow-roasted tomatoes, basil & extra virgin olive oil.",
    price: "₹199",
    image: tomatoSoupImage,
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  const heroY = useTransform(scrollY, [0, 800], [0, 180])
  const storyImageY = useTransform(scrollY, [500, 1600], [40, -80])

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2
    const y = (e.clientY / window.innerHeight - 0.5) * 2

    document.documentElement.style.setProperty("--mouse-x", `${x * 8}px`)
    document.documentElement.style.setProperty("--mouse-y", `${y * 8}px`)
  }

  return (
    <main
      onMouseMove={handleMouseMove}
      className="min-h-screen overflow-hidden bg-[#FAF8F2] text-[#172126]"
    >
      {/* NAVBAR */}
      <nav className="fixed left-4 right-4 top-4 z-50 flex items-center justify-between rounded-full border border-white/20 bg-black/10 px-5 py-3 text-white backdrop-blur-md md:left-6 md:right-6 md:top-6 md:px-7 md:py-4">
        <a
          href="#"
          className="text-sm font-bold tracking-[0.22em]"
        >
          GREECO
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <a
            href="#story"
            className="text-xs uppercase tracking-[0.18em] text-white/75 transition hover:text-white"
          >
            Story
          </a>

          <a
            href="#rooftop"
            className="text-xs uppercase tracking-[0.18em] text-white/75 transition hover:text-white"
          >
            Rooftop
          </a>

          <a
            href="#menu"
            className="text-xs uppercase tracking-[0.18em] text-white/75 transition hover:text-white"
          >
            Menu
          </a>

          <a
            href="#contact"
            className="text-xs uppercase tracking-[0.18em] text-white/75 transition hover:text-white"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-[70] flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white hover:text-[#0B3D62]"
        >
          <Menu size={17} strokeWidth={1.8} />
        </button>
      </nav>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-[#0B3D62] px-8 md:hidden"
        >
          <div className="flex w-full flex-col items-center gap-8 text-center">
            <a
              href="#story"
              onClick={() => setMenuOpen(false)}
              className="text-5xl font-medium tracking-[-0.04em] text-white"
            >
              Story
            </a>

            <a
              href="#rooftop"
              onClick={() => setMenuOpen(false)}
              className="text-5xl font-medium tracking-[-0.04em] text-white"
            >
              Rooftop
            </a>

            <a
              href="#menu"
              onClick={() => setMenuOpen(false)}
              className="text-5xl font-medium tracking-[-0.04em] text-white"
            >
              Menu
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-5xl font-medium tracking-[-0.04em] text-white"
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}

      {/* HERO */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-[#1769A8] px-6 pb-12 md:px-10 md:pb-16">
        <motion.img
          src={heroImage}
          alt="Greeco Mediterranean food"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          style={{
            y: heroY,
            x: "var(--mouse-x)",
          }}
          transition={{
            duration: 2.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D62]/80 via-[#0B3D62]/20 to-transparent" />

        <div
          className="pointer-events-none absolute inset-0 z-20 opacity-[0.07]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 max-w-6xl"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/70">
            Mediterranean veggie kitchen
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[21vw] font-medium leading-[0.76] tracking-[-0.075em] text-white md:text-[11vw]"
          >
            Eat
            <br />
            <span className="ml-[8vw] md:ml-[4vw]">
              Green.
            </span>
          </motion.h1>

          <div className="mt-8 flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-white/70 md:text-xs">
            <span>Soups</span>
            <span>/</span>
            <span>Salads</span>
            <span>/</span>
            <span>Amravati</span>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm"
        >
          <ArrowDown size={16} strokeWidth={1.5} />
        </motion.div>
      </section>

      {/* STORY */}
      <section
        id="story"
        className="relative overflow-hidden bg-[#FAF8F2] px-6 py-28 md:px-12 md:py-36"
      >
        <div className="pointer-events-none absolute -top-12 left-0 select-none text-[25vw] font-medium leading-none tracking-[-0.08em] text-[#0B3D62]/[0.035]">
          STORY
        </div>

        <div className="relative mx-auto grid max-w-[1500px] items-center gap-16 md:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#1769A8]">
              01 — Our story
            </p>

            <h2 className="max-w-xl text-6xl leading-[0.86] tracking-[-0.06em] md:text-8xl">
              A little
              <br />
              Mediterranean
              <br />
              corner.
            </h2>

            <p className="mt-8 max-w-md text-base leading-7 text-black/55">
              Greeco brings the easy energy of the Mediterranean to
              Amravati — fresh vegetables, bright flavours, good music
              and a place made for slowing down.
            </p>

            <a
              href="#rooftop"
              className="mt-10 inline-flex items-center gap-3 border-b border-[#172126]/30 pb-2 text-xs uppercase tracking-[0.2em]"
            >
              Discover Greeco
              <ArrowUpRight size={15} />
            </a>
          </motion.div>

          <div className="relative min-h-[580px]">
            <motion.div
              style={{ y: storyImageY }}
              className="absolute right-0 top-0 h-[430px] w-[78%] overflow-hidden rounded-[2rem] md:h-[540px]"
            >
              <motion.img
                src={gardenBowlImage}
                alt="Garden Bowl"
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.25,
                duration: 0.9,
              }}
              className="absolute bottom-0 left-0 z-10 h-56 w-[48%] overflow-hidden rounded-[1.5rem] border-8 border-[#FAF8F2] md:h-64"
            >
              <img
                src={greekSaladImage}
                alt="Greek Salad"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <div className="absolute bottom-10 right-[5%] z-20 rounded-full bg-[#F4C95D] px-5 py-3 text-[9px] uppercase tracking-[0.2em]">
              Made for slow days
            </div>
          </div>
        </div>
      </section>

      {/* ROOFTOP 01 */}
      <section
        id="rooftop"
        className="relative flex min-h-screen items-end overflow-hidden bg-[#0B3D62] px-6 py-16 text-white md:px-12"
      >
        <motion.img
          src={heroImage}
          alt="Mediterranean rooftop atmosphere"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0B3D62]/45" />

        <div className="absolute right-8 top-32 hidden text-[10px] uppercase tracking-[0.3em] text-white/60 md:block">
          Amravati · India
        </div>

        <div className="relative z-10 max-w-5xl">
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/60">
            02 — The rooftop
          </p>

          <h2 className="text-7xl leading-[0.8] tracking-[-0.07em] md:text-[10vw]">
            Open
            <br />
            skies.
          </h2>

          <p className="mt-8 max-w-md text-sm leading-6 text-white/65 md:text-base">
            A little escape above the city. Blue skies, fresh plates
            and long afternoons that don't need an agenda.
          </p>
        </div>
      </section>

      {/* ROOFTOP 02 */}
      <section className="relative grid min-h-[85vh] items-center gap-12 overflow-hidden bg-[#F4C95D] px-6 py-24 md:grid-cols-2 md:px-16">
        <div className="pointer-events-none absolute -right-10 top-0 select-none text-[25vw] font-medium leading-none tracking-[-0.08em] text-[#0B3D62]/[0.06]">
          SUN
        </div>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10"
        >
          <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#0B3D62]/60">
            03 — Golden hour
          </p>

          <h2 className="max-w-xl text-6xl leading-[0.84] tracking-[-0.06em] text-[#0B3D62] md:text-8xl">
            Stay for
            <br />
            sunset.
          </h2>

          <p className="mt-8 max-w-md text-base leading-7 text-[#0B3D62]/65">
            Mediterranean colours, warm light and something fresh
            on the table. This is where afternoons turn into evenings.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 h-[500px] overflow-hidden rounded-[2rem]"
        >
          <img
            src={greekSaladImage}
            alt="Mediterranean food"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      {/* MEDITERRANEAN DETAILS */}
      <section className="relative overflow-hidden bg-[#FAF8F2] px-6 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#1769A8]">
                04 — The Mediterranean
              </p>

              <h2 className="text-6xl leading-[0.82] tracking-[-0.06em] md:text-8xl">
                Blue.
                <br />
                White.
                <br />
                Green.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-black/50">
              Inspired by the textures, colours and effortless rhythm
              of the Mediterranean.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <motion.div
              whileHover={{ y: -10 }}
              className="h-[420px] overflow-hidden rounded-[2rem]"
            >
              <img
                src={heroImage}
                alt="Mediterranean setting"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              whileHover={{ y: 10 }}
              className="h-[420px] overflow-hidden rounded-[2rem] md:mt-20"
            >
              <img
                src={greekSaladImage}
                alt="Greek inspired salad"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="h-[420px] overflow-hidden rounded-[2rem]"
            >
              <img
                src={tomatoSoupImage}
                alt="Roasted tomato soup"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative overflow-hidden bg-[#0B3D62] px-6 py-32 text-white md:px-16 md:py-40">
        <div className="pointer-events-none absolute left-0 top-0 select-none text-[25vw] font-medium leading-none tracking-[-0.08em] text-white/[0.035]">
          GREEN
        </div>

        <div className="relative mx-auto max-w-[1300px] text-center">
          <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-white/50">
            05 — Our philosophy
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-6xl leading-[0.86] tracking-[-0.06em] md:text-[9vw]"
          >
            Simple food.
            <br />
            <span className="text-[#F4C95D]">Big feeling.</span>
          </motion.h2>

          <p className="mx-auto mt-10 max-w-xl text-base leading-7 text-white/55">
            Fresh vegetables. Bright flavours. Thoughtful ingredients.
            Nothing complicated — just food that makes you feel good.
          </p>
        </div>
      </section>

      {/* MENU */}
      <section
        id="menu"
        className="overflow-hidden bg-[#0B3D62] px-6 pb-32 text-white md:px-10"
      >
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/45">
              06 — From the kitchen
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-6xl leading-[0.82] tracking-[-0.06em] md:text-8xl"
            >
              The
              <br />
              menu.
            </motion.h2>
          </div>
          <div className="mb-10 flex items-center gap-6 overflow-x-auto pb-2 text-[10px] uppercase tracking-[0.22em] text-white/45">
            <button className="whitespace-nowrap text-[#F4C95D]">
              All
            </button>

            <button className="whitespace-nowrap transition hover:text-white">
              Soups
            </button>

            <button className="whitespace-nowrap transition hover:text-white">
              Salads
            </button>

            <button className="whitespace-nowrap transition hover:text-white">
              Bowls
            </button>
          </div>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0B3D62] md:mt-0"
          >
            View Full Menu
            <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 md:overflow-visible md:pb-0">
          {dishes.map((dish, index) => (
            <motion.article
              key={dish.name}
              drag="x"
              dragConstraints={{
                left: -300,
                right: 300,
              }}
              dragElastic={0.15}
              whileDrag={{
                scale: 0.98,
              }}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -14,
                scale: 1.025,
              }}
              className="group relative min-h-[520px] w-[85vw] flex-shrink-0 snap-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 md:w-[32%]"
            >
              <motion.img
                src={dish.image}
                alt={dish.name}
                className="absolute inset-0 h-full w-full object-cover"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D62] via-[#0B3D62]/25 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 z-10 p-7">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                    0{index + 1}
                  </span>

                  <span className="text-sm text-white/80">
                    {dish.price}
                  </span>
                </div>

                <h3 className="mb-4 text-4xl leading-none tracking-[-0.04em]">
                  {dish.name}
                </h3>

                <p className="max-w-xs text-sm leading-6 text-white/65">
                  {dish.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="relative bg-[#FAF8F2] px-6 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-[1500px]">
          <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#1769A8]">
            07 — The experience
          </p>

          <div className="grid items-end gap-12 md:grid-cols-2">
            <h2 className="text-6xl leading-[0.82] tracking-[-0.06em] md:text-8xl">
              Come for
              <br />
              the food.
              <br />
              <span className="text-[#1769A8]">Stay for the vibe.</span>
            </h2>

            <div className="relative h-[500px] overflow-hidden rounded-[2rem]">
              <img
                src={tomatoSoupImage}
                alt="Greeco food experience"
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-black/20 px-5 py-3 text-[9px] uppercase tracking-[0.25em] text-white backdrop-blur-md">
                Slow afternoons
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative flex min-h-[85vh] flex-col justify-between overflow-hidden bg-[#F4C95D] px-6 py-20 md:px-16 md:py-24"
      >
        <div className="pointer-events-none absolute -right-10 top-10 select-none text-[25vw] font-medium leading-none tracking-[-0.08em] text-[#0B3D62]/[0.06]">
          VISIT
        </div>

        <div className="relative z-10">
          <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#0B3D62]/60">
            08 — Come say hello
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl text-7xl leading-[0.8] tracking-[-0.07em] text-[#0B3D62] md:text-[10vw]"
          >
            See you
            <br />
            at Greeco.
          </motion.h2>
        </div>

        <div className="relative z-10 grid gap-10 border-t border-[#0B3D62]/20 pt-8 md:grid-cols-3">
          <div>
            <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-[#0B3D62]/50">
              Location
            </p>

            <div className="flex items-center gap-3 text-sm text-[#0B3D62]">
              <MapPin size={17} />
              Amravati, Maharashtra
            </div>
          </div>

          <div>
            <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-[#0B3D62]/50">
              Hours
            </p>

            <p className="text-sm text-[#0B3D62]">
              Open for slow afternoons
            </p>
          </div>

          <div>
            <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-[#0B3D62]/50">
              Social
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-[#0B3D62]"
            >
              Follow the greens
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden bg-[#0B3D62] px-6 py-16 text-white md:px-10 md:py-20">
        <div className="pointer-events-none absolute -right-10 -top-16 select-none text-[28vw] font-medium leading-none tracking-[-0.09em] text-white/[0.035]">
          GREEN
        </div>

        <div className="relative z-10">
          <div className="flex flex-col justify-between gap-14 md:flex-row md:items-end">
            <div>
              <p className="mb-6 text-[9px] uppercase tracking-[0.3em] text-white/40">
                Mediterranean veggie kitchen
              </p>

              <h2 className="text-7xl leading-[0.75] tracking-[-0.07em] md:text-[12vw]">
                GREECO
              </h2>
            </div>

            <div className="max-w-xs">
              <p className="text-sm leading-6 text-white/50">
                Fresh food.
                <br />
                Mediterranean mood.
                <br />
                Good times.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-3 border-b border-white/30 pb-2 text-[10px] uppercase tracking-[0.2em] transition hover:border-[#F4C95D] hover:text-[#F4C95D]"
              >
                Visit Greeco
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <div className="mt-20 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3">
            <div>
              <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-white/35">
                Explore
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60">
                <a href="#story" className="transition hover:text-white">
                  Story
                </a>

                <a href="#rooftop" className="transition hover:text-white">
                  Rooftop
                </a>

                <a href="#menu" className="transition hover:text-white">
                  Menu
                </a>

                <a href="#contact" className="transition hover:text-white">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-white/35">
                Find us
              </p>

              <p className="text-sm text-white/60">
                Amravati, Maharashtra
              </p>
            </div>

            <div>
              <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-white/35">
                Follow
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
              >
                Instagram
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.2em] text-white/30 md:flex-row">
            <span>Greeco Veggie Kitchen</span>
            <span>Eat Green. © 2026</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
export default App 

