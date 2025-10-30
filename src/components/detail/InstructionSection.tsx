interface Props {
  text: string
}
export default function InstructionSection({ text }: Props) {
  return (
    <section className="bg-white rounded-xl shadow p-4 animate-fadeInDelay2">
      <h2 className="text-xl font-semibold mb-3">Instructions</h2>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{text}</p>
    </section>
  )
}