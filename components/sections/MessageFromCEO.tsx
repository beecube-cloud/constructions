import { motion } from "framer-motion";
import Image from "next/image";

export default function FounderMessage() {
  return (
    <section className="w-auto bg-[#EDEBFA] mx-8 my-8 py-20 px-4 md:px-12 lg:px-24 lg:mx-8 rounded-3xl">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.h2
            className="text-4xl text-gray-900 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            A Message from Our <br /> Founder and CEO
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
          >
            There is nothing more fulfilling than watching a project come to life, delivered
            on time, within budget, and with excellence.
          </motion.p>
          </motion.div>
      <div className=" mx-auto sm:flex md:w-max-6xl gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg w-[320px] h-[420px] relative">
            <Image
              src="/assets/teams/DrJoshua.jpeg"
              alt="Founder"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              At Esthoj, our clients’ interests are always at the heart of everything we do. We love
              our work, we know what works, and we are committed to building the cities,
              communities, and nation we all envision.
            </p>
            <p>
              Today, we combine technical expertise, innovative thinking, and deep industry
              knowledge to deliver construction and facility management solutions that stand the
              test of time. We are creators, driven by excellence, inspired by possibilities, and
              committed to turning imagination into reality.
            </p>
            <p>
              Our work ethic is guided by our core values: Integrity, Accountability, Excellence,
              Innovation, Safety, and Quality Delivery.
            </p>
            <p>
              If you have an idea, we can build it. We believe that collaboration is the foundation of
              every successful project.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">Dr. Olorunkiya Joshua, PhD</h3>
            <p className="text-sm text-gray-700">
              Founder & Chief Executive Officer <br />
              Esthoj Engineering Construction & Facility Management
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
