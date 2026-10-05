import { motion } from 'framer-motion'

// Reveal: envuelve cualquier sección y la anima sutilmente al entrar en pantalla.
// `once: true` = la animación ocurre una sola vez (buen rendimiento).
export default function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 0.8, 0.24, 1] }}
    >
      {children}
    </motion.div>
  )
}
